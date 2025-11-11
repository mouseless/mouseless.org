<template>
  <div
    class="flex"
    :class="[
      `justify-center`,
      `${align === 'left' ? 'justify-start' : ''}`,
      `${align === 'right' ? 'justify-end' : ''}`
    ]"
  >
    <ul
      class="c--bullet-list m-0 text-start leading-8 list-inside ps-0"
      :class="[
        `${align === 'right' ? 'pe-px-0' : ''}`,
        `${align === 'left' ? 'ps-px-0' : ''}`
      ]">
      <slot :use="$slots.default" mdc-unwrap="ul" />
    </ul>
  </div>
</template>
<script setup>
defineProps({
  align: { type: String, default: "left" }
});
</script>
