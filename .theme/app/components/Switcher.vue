<template>
  <div
    class="
      flex items-center rounded-(--border-radius) cursor-pointer
      text-(--color-fg-mute) font-[weight:bold] text-[smaller]
      relative h-[25px] w-[65px]
    "
    :class="{
      'bg-(--color-green-800) text-(--color-gray-100) justify-start': status === 'open',
      'bg-(--color-gray-300) justify-end': status === 'all'
    }"
    @click="action"
  >
    <button
      class="absolute w-[21px] h-[21px] bg-(--color-gray-100) rounded-[50%] cursor-pointer top-2"
      :class="{
        'right-[2px]': status === 'open',
        'left-[2px]': status === 'all'
      }"
    />
    <div class="ml-[7px] mr-[8px]">
      {{ status === "all" ? "All" : "Open" }}
    </div>
  </div>
</template>
<script setup>
defineProps({
  action: { type: Function, default: null },
  status: { type: String, default: null }
});
</script>
