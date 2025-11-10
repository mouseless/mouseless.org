<template>
  <div
    class="c--block text-left py-lg"
    :class="{
      'bg-darkgreen-900': currentColor === 'black',
      'bg-gray-100': currentColor === 'white',
      'bg-blue-900': currentColor === 'blue',
      'bg-green-900': currentColor === 'green',
      'text-dark-text-normal': colors[currentColor] === 'dark',
      'text-light-text-normal': colors[currentColor] === 'light',
      [colors[currentColor]]: true
    }"
  >
    <div
      v-if="debug"
      class="
        sticky left-md top-md w-md h-0 -mt-md
        max-sm:gap-sm max-sm:left-xs max-sm:top-md max-sm:w-xs max-sm:-mt-md
      "
    >
      <button
        v-for="(_, item) in colors"
        :key="item"
        class="
          color cursor-pointer rounded-xs border-0 h-sm mb-xs w-md
          max-sm:h-sm max-sm:w-sm max-sm:mb-sm
        "
        :class="{
          'bg-darkgreen-900': item === 'black',
          'bg-gray-100': item === 'white',
          'bg-blue-900': item === 'blue',
          'bg-green-900': item === 'green'
        }"
        @click="backgroundChange(item)"
      />
    </div>
    <div class="content">
      <Include v-if="content !== null" :content="content" />
      <slot v-else />
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  color: { type: String, default: "white" },
  content: { type: String, default: null },
  debug: { type: Boolean, default: false }
});

const colors = {
  black: "light",
  white: "dark",
  blue: "light",
  green: "light"
};
const currentColor = ref(props.color);
const childColor = computed(() => colors[currentColor.value] || "dark");

provide("block-child-color", childColor);

function backgroundChange(color) {
  currentColor.value = color;
}
</script>
<style>
@reference "../assets/tailwind.css";

h1, h2, h3, h4, h5, h6 {
  .c--block & { @apply m-0; }
  .c--block.dark & { @apply text-dark-text-heading; }
  .c--block.light & { @apply text-light-text-heading; }
}
</style>
