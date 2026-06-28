<template>
  <div class="space-y-4">
    <h2 class="text-lg font-semibold">Личный кабинет</h2>

    <section v-if="walletStore.user" class="card space-y-2 text-sm">
      <div class="flex justify-between items-center">
        <span>Статус:</span>
        <span class="text-green-400 font-medium">{{ walletStore.user.status || 'Активен' }}</span>
      </div>
      <div class="flex justify-between items-center">
        <span>Баланс (USD):</span>
        <span>{{ walletStore.user.balance_usd ?? 0 }} $</span>
      </div>
      <p class="text-[10px] opacity-60 mt-2">
        Все операции фиксируются автоматически. Для поддержки используйте FAQ или кнопку в меню.
      </p>
    </section>

    <section v-else class="card text-xs opacity-70">
      Данные пользователя загружаются после подтверждения транзакции.
    </section>

    <button @click="$router.push('/topup')" class="btn-primary w-full flex items-center justify-center gap-2 mt-3">
      Пополнить баланс
    </button>
  </div>
</template>

<script setup>
import { useWalletStore } from '../stores/walletStore';
const walletStore = useWalletStore();
</script>
