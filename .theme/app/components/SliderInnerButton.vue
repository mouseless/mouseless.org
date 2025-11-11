<template>
  <button
    class="bg-transparent cursor-pointer"
    :class="{
      'opacity-25 cursor-default!': disabled
    }"
  >
    <img
      class="mouseless logo mark mono h-[25px]!"
      :class="{
        'invert': color === 'light',
        'transform-[scaleX(-1)]': reverse
      }"
    >
  </button>
</template>
<script setup>
defineProps({
  disabled: { type: Boolean, default: false },
  reverse: { type: Boolean, default: false }
});

const color = inject("block-child-color", "dark");
</script>
