<template>
  <Image
    :src="src"
    :width="width"
    :height="height"
    class="prose max-w-full rounded"
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
