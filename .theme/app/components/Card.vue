<template>
  <div class="w-full flex flex-col gap-(--space-md) md:gap-(--space-sm)">
    <Image
      v-if="image !== null"
      :src="image"
      class="max-w-[10em] lg:max-w-[7em] md:max-w-[5em]"
    />
    <div class="max-w-[80ch]">
      <slot />
    </div>
  </div>
</template>
<script setup>
defineProps({
  image: {
    type: String,
    default: null
  }
});
</script>
