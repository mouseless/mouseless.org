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
      class="m-0 [&>li]:max-w-[600px] text-start leading-8 list-inside [&>li::marker]:content-['-'] [&>li::marker]:text-red-500 [&>li::marker]:text-xl [&>li::marker]:font-semibold"
      :class="[
        `${color === 'light' ? '[&>li::before]:invert [&>li::before]:filter' : ''}`,
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
const color = inject("block-child-color", "dark");
</script>
