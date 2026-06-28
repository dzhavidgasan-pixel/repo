<template>
  <div class="min-h-screen flex flex-col">
    <header class="flex items-center justify-between px-4 py-3 border-b border-gray-800 bg-black/60 backdrop-blur-md sticky top-0 z-50">
      <h1 class="text-lg font-semibold tracking-tight">Flash Crypto</h1>
      <div id="ton-connect"></div>
    </header>

    <main class="flex-1 px-4 py-6 max-w-xl mx-auto w-full space-y-4">
      <router-view />
    </main>

    <nav v-if="walletStore.connected" class="fixed bottom-0 inset-x-0 bg-black/95 border-t border-gray-800 flex justify-around text-xs py-2 z-50">
      <button @click="$router.push('/')" class="flex flex-col items-center gap-1"><span>🏠</span><span>Главная</span></button>
      <button @click="$router.push('/pricing')" class="flex flex-col items-center gap-1"><span>💰</span><span>Цены</span></button>
      <button @click="$router.push('/topup')" class="flex flex-col items-center gap-1"><span>➕</span><span>Пополнить</span></button>
      <button @click="$router.push('/dashboard')" class="flex flex-col items-center gap-1"><span>👤</span><span>Кабинет</span></button>
    </nav>

    <footer v-else class="fixed bottom-0 inset-x-0 bg-black/95 border-t border-gray-800 py-3 text-center text-xs opacity-70">
      Подключите TON кошелек для доступа.
    </footer>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useWalletStore } from './stores/walletStore';
const walletStore = useWalletStore();

onMounted(async () => {
  const manifestUrl = import.meta.env.VITE_TON_CONNECT_MANIFEST_URL || 
                     'https://repo-gray-omega.vercel.app/manifest.json';
  
  await walletStore.initTonConnect(manifestUrl);
});