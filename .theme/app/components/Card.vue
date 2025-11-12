<template>
  <div class="w-full flex flex-col gap-md md:gap-sm">
    <Image
      v-if="image !== null"
      :src="image"
      class="
        max-w-[10em]
        max-lg:max-w-[7em]
        max-md:max-w-[5em]
      "
    />
    <div class="max-w-(--width-content)">
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
