<template>
  <SliderInner :align="align" :height="height" :slides="slideNames">
    <template #default="{pageNumber}">
      <slot :name="slideNames[pageNumber]" />
    </template>
  </SliderInner>
</template>
<script setup>
defineProps({
  align: { type: String, default: "left" },
  height: { type: String, default: "50ch" }
});

const slots = useSlots();

const slideNames = Object.keys(slots);
</script>
