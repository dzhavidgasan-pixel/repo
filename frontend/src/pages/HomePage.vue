<template>
  <div class="space-y-4">
    <section class="card flex items-center justify-between">
      <div>
        <h2 class="text-lg font-semibold">Flash Crypto</h2>
        <p class="text-xs opacity-70 mt-1">Мгновенная покупка флеш-крипты с минимальной комиссией.</p>
      </div>
    </section>

    <section class="grid grid-cols-3 gap-2 text-center text-[10px]">
      <div class="card"><div class="text-lg font-semibold">5+</div><div>Видов крипты</div></div>
      <div class="card"><div class="text-lg font-semibold">&lt; 60s</div><div>Среднее время выдачи</div></div>
      <div class="card"><div class="text-lg font-semibold">24/7</div><div>Поддержка</div></div>
    </section>

    <button @click="$router.push('/pricing')" class="btn-primary w-full flex items-center justify-center gap-2">
      Смотреть цены и купить
    </button>

    <nav class="flex gap-3 text-xs opacity-80 mt-4">
      <a href="/faq" class="underline">FAQ</a>
      <a href="/about" class="underline">О нас</a>
    </nav>
  </div>
</template>
