<template>
  <div
    class="
      sticky top-0 z-1 w-full
      bg-bg border-b border-darkgreen-100
    "
  >
    <Header class="c--content" />
  </div>
  <article class="w-full text-center">
    <slot />
  </article>
  <Footer class="c--content" />
</template>
