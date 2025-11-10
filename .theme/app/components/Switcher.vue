<template>
  <div class="flex gap-xs">
    Active
    <div
      class="
        flex items-center rounded cursor-pointer
        text-fg-mute font-[weight:bold] text-[smaller]
        relative h-6 w-12
      "
      :class="{
        'bg-green-800 text-gray-100 justify-start': status === 'open',
        'bg-gray-500 justify-end': status === 'all'
      }"
      @click="action"
    >
      <button
        class="absolute w-5 h-5 bg-gray-100 rounded cursor-pointer transition-all"
        :class="{
          'left-6.5': status === 'open',
          'left-0.5': status === 'all'
        }"
      />
    </div>
  </div>
</template>
<script setup>
defineProps({
  action: { type: Function, default: null },
  status: { type: String, default: null }
});
</script>
