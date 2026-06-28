<template>
  <div class="space-y-4">
    <div class="card space-y-2">
      <button 
        @click="handleTopup" 
        :disabled="loading || amount < 10"
        class="btn-primary w-full flex items-center justify-center gap-2 mt-2"
      >
        {{ loading ? 'Обработка...' : `Пополнить на $${amount}` }}
      </button>

      <p v-if="error" class="text-[10px] text-red-400">{{ error }}</p>
    </div>

    <section class="card space-y-2">
      <h3 class="text-xs font-semibold">Наличие флеш крипты</h3>
      <p class="text-[10px] opacity-70">BTC/ETH/USDT токены доступны. Выдача после подтверждения транзакции.</p>
    </section>

    <button @click="$router.push('/faq')" class="w-full text-left card py-2 px-3 text-xs flex justify-between items-center">
      Частые вопросы (FAQ) <span class="text-blue-400">→</span>
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useWalletStore } from '../stores/walletStore'
import { api } from '../services/apiClient'

const walletStore = useWalletStore()
const amount = ref(20)
const loading = ref(false)
const error = ref('')

const handleTopup = async () => {
  if (!walletStore.connected) return
  if (amount.value < 10) {
    error.value = 'Минимальная сумма: $10'
    return
  }

  loading.value = true
  error.value = ''

  try {
    const txData = await api.post('/topup/init', {
      address: walletStore.address,
      requested_usd: amount.value
    })

    if (!txData?.transaction || !Array.isArray(txData.transaction.messages)) {
      throw new Error('Некорректный ответ от сервера')
    }

    const ui = walletStore.getTonConnectUI()
    try {
      await ui.sendTransaction(txData.transaction)
    } catch (e) {
      console.error(e)
      error.value = 'Транзакция отменена или ошибка кошелька'
    }
  } catch (err) {
    console.error(err)
    const msg = err.response?.data?.detail || err.message
    error.value = typeof msg === 'string' ? msg : 'Не удалось подготовить транзакцию. Попробуйте позже.'
  } finally {
    loading.value = false
  }
}
</script>