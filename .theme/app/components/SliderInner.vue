<template>
  <div class="flex flex-col -mx-[50px] max-sm:mx-0">
    <div class="flex gap-[25px]">
      <SliderInnerButton
        class="max-sm:hidden"
        :disabled="pageNumber === 0"
        reverse
        @click="left"
      />
      <div
        class="flex-1 max-w-full"
        :class="{
          'text-center': align === 'center',
          'text-start [&>p]:ml-0': align === 'left'
        }"
        :style="`min-height: ${height};`"
      >
        <slot :page-number="pageNumber" :slides="upToDateSlides" />
      </div>
      <SliderInnerButton
        class="max-sm:hidden"
        :disabled="pageNumber === upToDateSlides.length - 1 || upToDateSlides.length === 0"
        @click="right"
      />
    </div>
    <div class="flex justify-center items-center mt-sm">
      <SliderInnerButton
        class="pr-sm sm:hidden"
        :disabled="pageNumber === 0"
        reverse
        @click="left"
      />
      <button
        v-for="n in slides.length"
        :key="n"
        class="rounded-[50%] cursor-pointer w-[10px] h-[10px] m-xs p-0"
        :class="{
          'bg-gray-500': color === 'dark',
          'bg-darkgreen-700': color === 'light',
          'bg-fg!': color === 'dark' && n - 1 === pageNumber,
          'bg-bg!': color === 'light' && n - 1 === pageNumber
        }"
        @click="changeSlide(n - 1)"
      />
      <SliderInnerButton
        class="pl-sm sm:hidden"
        :disabled="pageNumber === upToDateSlides.length - 1 || upToDateSlides.length === 0"
        @click="right"
      />
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  slides: { type: Array, default: () => [] },
  align: { type: String, default: "center" },
  height: { type: String, default: "50ch" }
});

const color = inject("block-child-color", "dark");

const upToDateSlides = computed(() => props.slides);

const pageNumber = ref(0);
const left = () =>
  pageNumber.value > 0
    ? (pageNumber.value = pageNumber.value - 1)
    : pageNumber.value;
const right = () =>
  pageNumber.value < upToDateSlides.value.length - 1
    ? (pageNumber.value = pageNumber.value + 1)
    : pageNumber.value;
function changeSlide(page) {
  pageNumber.value = page;
}
</script>
