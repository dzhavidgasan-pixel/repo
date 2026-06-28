<template>
  <div class="space-y-3">
    <h2 class="text-lg font-semibold">FAQ</h2>

    <section v-for="(q, i) in items" :key="i" class="card text-xs space-y-1">
      <p class="font-medium">{{ q.q }}</p>
      <p class="opacity-70 whitespace-pre-wrap">{{ q.a }}</p>
    </section>

    <button @click="$router.push('/')" class="btn-primary w-full mt-3 text-xs py-2">
      На главную
    </button>
  </div>
</template>

<script setup>
const items = [
  { q: 'Что такое флеш крипта?', a: 'Это токенизированные активы с мгновенной обработкой внутри нашей системы.' },
  { q: 'Как происходит оплата?', a: 'Через TON Connect. Подключите кошелек, выберите сумму и подтвердите транзакцию.' },
  { q: 'Почему сумма в кошельке отличается от $20?', a: 'Сумма конвертируется по текущему курсу сети + небольшая комиссия обработки.' }
];
</script>
