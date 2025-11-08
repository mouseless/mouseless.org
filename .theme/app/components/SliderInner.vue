<template>
  <div class="slider">
    <div class="slider__previous d d--v_s">
      <button
        class="button"
        :class="{ 'button--disabled': pageNumber == 0}"
        @click="left"
      >
        <img
          :class="`mouseless logo mark mono ${color == 'light' ? 'invert' : ''}`"
          class="button__image button__image--reverse"
        >
      </button>
    </div>
    <div
      class="slider__content"
      :class="[
        `slider__content--color_${color}`,
        `slider__content--align_${align}`
      ]"
    >
      <slot :page-number="pageNumber" :slides="upToDateSlides" />
    </div>
    <div class="slider__next d d--v_s">
      <button
        class="button"
        :class="{ 'button--disabled': pageNumber == upToDateSlides.length - 1 || upToDateSlides.length == 0}"
        @click="right"
      >
        <img
          :class="`mouseless logo mark mono ${color == 'light' ? 'invert' : ''}`"
          class="button__image"
        >
      </button>
    </div>
    <div class="slider__thumb">
      <button
        class="button d d--h_s"
        :class="{ 'button--disabled': pageNumber == 0}"
        @click="left"
      >
        <img
          :class="`mouseless logo mark mono ${color == 'light' ? 'invert' : ''}`"
          class="button__image button__image--reverse"
        >
      </button>
      <button
        v-for="n in slides.length"
        :key="n"
        :class="[
          { 'slider__dot--active': n - 1 == pageNumber },
          `slider__dot--color_${color}`
        ]"
        class="slider__dot"
        @click="changeSlide(n - 1)"
      />
      <button
        class="button d d--h_s"
        :class="{ 'button--disabled': pageNumber == upToDateSlides.length - 1 || upToDateSlides.length == 0}"
        @click="right"
      >
        <img
          :class="`mouseless logo mark mono ${color == 'light' ? 'invert' : ''}`"
          class="button__image"
        >
      </button>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  slides: {
    type: Array,
    default: () => []
  },
  align: {
    type: String,
    default: "center"
  },
  height: {
    type: String,
    default: "50ch"
  }
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
<style lang="scss">
.slider {
  display: grid;
  grid-template-columns: 50px auto 50px;
  grid-template-areas:
    "previous content next"
    ". boxes .";
  margin-left: -50px;
  margin-right: -50px;

  &__previous {
    grid-area: previous;
  }

  &__content {
    grid-area: content;
    color: var(--color-fg);
    min-height: v-bind(height);

    h2 {
      margin-top: 0;
    }

    &--color {
      &_dark { color: var(--color-dark-text-normal); }
      &_light { color: var(--color-light-text-normal); }
    }

    &--align {
      &_center { text-align: center; }
      &_left {
        text-align: start;

        p { margin-left: 0; }
      }
    }
  }

  &__next {
    grid-area: next;
  }

  &__next,
  &__previous {
    display: flex;
    justify-content: center;
  }

  &__thumb {
    grid-area: boxes;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: var(--space-sm);
  }

  &__dot {
    border: 0;
    border-radius: 50%;
    cursor: pointer;
    height: 10px;
    margin: var(--space-xs);
    padding: 0;
    width: 10px;

    &--color {
      &_dark { background-color: var(--color-gray-500); }
      &_light { background-color: var(--color-darkgreen-700); }
    }

    &--active.slider__dot--color_dark { background-color: var(--color-fg); }
    &--active.slider__dot--color_light { background-color: var(--color-bg); }
  }
}

.button {
  background-color: transparent;
  border: 0;
  padding: 0;
  cursor: pointer;

  &--disabled {
    opacity: 0.25;
    cursor: default;
  }

  &__image {
    height: 25px;
    object-fit: cover;
    padding-inline: var(--space-md) 0;
    max-width: none;

    &--reverse {
      transform: scaleX(-1);
    }
  }
}

@media (max-width: $page-s) {
  .slider {
    margin-left: 0;
    margin-right: 0;
    grid-template-areas:
      "content"
      "boxes";
    grid-template-columns: auto;
  }
}
</style>
