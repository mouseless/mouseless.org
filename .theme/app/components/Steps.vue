<template>
  <div class="steps">
    <div class="flow steps__flow">
      <div v-for="index in stepCount" :key="index" class="flow__step">
        <div
          class="step"
          :class="[
            { 'step--active': currentIndex == index - 1 },
            `step--color_${color}`,
          ]"
          @click="changeContent(index - 1)"
        >
          <div
            class="step__number"
            :class="[
              `step__number--color_${color}`,
              {'step__number--active': currentIndex == index - 1}
            ]"
          >
            {{ index }}
          </div>
          <div class="step__name">
            {{ titles[index - 1] }}
          </div>
        </div>
        <img
          v-if="index !== stepCount"
          src="/components/steps/arrow.png"
          class="flow__arrow"
          :class="`flow__arrow--color_${color}`"
        >
      </div>
    </div>
    <div class="steps__scroll">
      <div class="steps__content">
        <slot :name="steps[currentIndex]" />
      </div>
    </div>
  </div>
  <slot />
</template>
<script setup>
defineProps({
  titles: {
    type: Array,
    default: () => []
  },
  height: {
    type: String,
    default: "50ch"
  }
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
<style lang="scss">
.steps {
  border-radius: var(--border-radius);

  &__scroll {
    margin-top: var(--space-md);
    height: v-bind(height);
    overflow: auto;
  }

  &__content {
    max-width: 80ch;
  }
}

.flow {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;

  &__step {
    display: flex;
    flex-direction: row;
  }

  &__arrow {
    width: 3em;
    height: 3em;
    margin-top: auto;
    margin-bottom: auto;

    &--color {
      &_light {
        filter: invert(1);
      }
    }
  }
}

.step {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: var(--space-sm);
  padding: var(--space-sm);
  cursor: pointer;
  width: 100px;
  gap: var(--space-xs);

  &--color {
    &_dark {
      color: var(--color-gray-100);
      background-color: var(--color-darkgreen-900);

      &:hover {
        background-color: var(--color-darkgreen-800);
      }
    }

    &_light {
      color: var(--color-darkgreen-900);
      background-color: var(--color-darkgreen-100);

      &:hover {
        background-color: var(--color-darkgreen-200);
      }
    }
  }

  &__number {
    border-radius: var(--space-xs);
    padding: 0 var(--space-md);
    color: var(--color-bg);
    text-align: center;

    &--color_light { color: var(--color-fg); }

    &--active {
      color: var(--color-bg);
      background-color: var(--color-red-700);
    }
  }

  &__name {
    display: flex;
    align-items: center;
    text-align: center;
    font-family: var(--font-heading);
    font-size: large;
    font-weight: bold;
    height: 100%;
  }
}

@media (max-width: 1279px /* max-md */) {
  .steps {
    display: flex;
    flex-direction: row-reverse;
    gap: var(--space-md);

    &__scroll {
      margin-top: 0;
      width: 100%;
      height: fit-content;
    }
  }

  .step {
    padding: var(--space-xs);
    border-radius: var(--space-xs);
    gap: 0;
  }

  .flow {
    flex-direction: column;
    gap: var(--space-xs);

    &__step {
      flex-direction: column;
      align-items: center;
    }

    &__arrow {
      width: 1.5em;
      height: 1.5em;
      margin-top: var(--space-xs);
      transform: rotate(90deg);
    }
  }
}
</style>
