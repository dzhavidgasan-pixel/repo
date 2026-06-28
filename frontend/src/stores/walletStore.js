import { defineStore } from 'pinia';
import TonConnectUI from '@tonconnect-ui/sdk';

const API = import.meta.env.VITE_API_BASE_URL || '';

export const useWalletStore = defineStore('wallet', {
  state: () => ({
    ui: null,
    connected: false,
    address: '',
    user: null
  }),
  actions: {
    async initTonConnect(manifestUrl) {
      this.ui = new TonConnectUI({ manifestUrl });
      if (this.ui.account) await this.syncWallet();

      this.ui.onStatusChange(async wallet => {
        if (!wallet) return this.logout();
        await this.syncWallet(wallet);
      });
    },
    async syncWallet(walletInfo) {
      const addr = walletInfo?.account?.address || '';
      this.connected = !!addr;
      this.address = addr;

      try {
        if (this.connected && API) {
          const res = await fetch(`${API}/auth`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ address: this.address })
          });
          const data = await res.json();
          if (data.user) this.user = data.user;
        }
      } catch {}
    },
    async logout() {
      try { await this.ui?.disconnect(); } catch {}
      this.connected = false;
      this.address = '';
      this.user = null;
    },
    getTonConnectUI() { return this.ui; }
  }
});
