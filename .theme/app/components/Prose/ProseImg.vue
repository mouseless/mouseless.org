<template>
  <Image
    :src="src"
    :width="width"
    :height="height"
    class="max-w-full rounded"
    :class="alt"
  />
</template>
<script setup>
defineProps({
  src: { type: String, default: "" },
  alt: { type: String, default: "" },
  width: { type: [String, Number], default: undefined },
  height: { type: [String, Number], default: undefined }
});
</script>
