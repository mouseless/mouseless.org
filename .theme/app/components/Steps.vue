<template>
  <div
    class="
      rounded
      max-md:flex max-md:flex-row-reverse max-md:gap-md
    "
  >
    <div
      class="
        flex justify-start
        max-md:flex-col max-md:gap-xs
      "
    >
      <div
         v-for="index in stepCount"
         :key="index"
         class="
           flex
           max-md:flex-col max-md:items-center
         "
      >
        <div
          class="
            flex flex-col justify-center items-center gap-xs
            rounded w-32 p-sm cursor-pointer
            max-md:gap-0 max-md:rounded-xs max-md:p-xs max-md:w-28
          "
          :class="{
            'text-gray-100 bg-darkgreen-900 hover:bg-darkgreen-800': color === 'dark',
            'text-darkgreen-900 bg-darkgreen-100 hover:bg-darkgreen-200': color === 'light'
          }"
          @click="changeContent(index - 1)"
        >
          <div
            class="rounded-xs w-full text-center"
            :class="{
              'text-bg! bg-red-700': currentIndex == index - 1,
              'text-bg': color === 'dark',
              'text-fg': color === 'light'
            }"
          >
            {{ index }}
          </div>
          <div
            class="flex items-center h-full text-center font-heading text-[large] font-bold">
            {{ titles[index - 1] }}
          </div>
        </div>
        <img
          v-if="index !== stepCount"
          src="/components/steps/arrow.png"
          class="
            w-12 h-12 my-auto
            max-md:w-6 max-md:h-6 max-md:mt-xs
            max-md:transform-[rotate(90deg)]
          "
          :class="{
            'invert-[1]': color === 'light'
          }"
        >
      </div>
    </div>
    <div
      class="
        mt-md overflow-auto
        max-md:mt-0 max-md:w-full max-md:h-fit!
      "
      :style="{ height }"
    >
      <div class="max-w-(--width-content)">
        <slot :name="steps[currentIndex]" />
      </div>
    </div>
  </div>
  <slot />
</template>
<script setup>
defineProps({
  titles: { type: Array, default: () => [] },
  height: { type: String, default: "50ch" }
});
const slots = useSlots();

const steps = Object.keys(slots);
const stepCount = steps.length;
const currentIndex = ref(0);
const color = inject("block-child-color", "dark");

function changeContent(index) {
  currentIndex.value = index;
}
</script>
