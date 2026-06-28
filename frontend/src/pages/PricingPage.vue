<template>
  <div class="space-y-3">
    <h2 class="text-lg font-semibold">Цены и наличие флеш крипты</h2>

    <section v-for="(item, i) in items" :key="i" class="card flex justify-between items-center text-sm">
      <div>
        <div class="font-medium">{{ item.name }}</div>
        <div class="text-[10px] opacity-70">{{ item.desc }}</div>
      </div>
      <div class="flex flex-col items-end gap-1">
        <span class="text-xs font-semibold text-green-400">{{ item.status }}</span>
        <button @click="$router.push('/topup')" class="btn-primary px-3 py-1 text-[10px]">Купить</button>
      </div>
    </section>

    <p class="text-[10px] opacity-60 mt-2">Минимальная покупка: от 10$. Оплата через TON Connect.</p>
  </div>
</template>

<script setup>
const items = [
  { name: 'Flash BTC', desc: 'BTC-токены с мгновенным выводом', status: 'В наличии' },
  { name: 'Flash ETH', desc: 'ETH-токены, быстрая обработка', status: 'В наличии' },
  { name: 'Flash USDT (TRC20)', desc: 'USDT на TRON сеть', status: 'Ограниченно' }
];
</script>
