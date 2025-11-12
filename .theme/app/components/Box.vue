<template>
  <div
    class="
      flex flex-row gap-md
      max-lg:flex-col
      max-md:gap-sm
    "
    :class="imageAlign === 'right' ? 'flex-row-reverse' : ''"
  >
    <Image
      v-if="image !== null"
      class="
        w-26 h-26
        max-lg:w-18 max-lg:h-18
      "
      :src="image"
    />
    <div class="flex flex-col gap-sm">
      <h4 v-if="title !== null">
        {{ title }}
      </h4>
      <div class="[&>p:first-child]:mt-0">
        <slot />
      </div>
    </div>
  </div>
</template>
<script setup>
defineProps({
  imageAlign: { type: String, default: "right" },
  title: { type: String, default: null },
  image: { type: String, default: null }
});
</script>
