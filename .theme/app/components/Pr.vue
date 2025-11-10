<template>
  <div class="pr">
    <h3 class="pr__title title">
      {{ pr?.title }}
      <div
        class="title__state"
        :class="`title__state--${getState(pr)}`"
      >
        <img
          class="title__state-icon"
          :src="`/components/pr/${getState(pr)}.svg`"
        >
        {{ getState(pr) }}
      </div>
    </h3>
    <div class="pr__body">
      <MarkdownFormat :body="pr?.body" tag="article" />
    </div>
    <NuxtLink :to="pr?.html_url" class="pr__link">
      See in GitHub
    </NuxtLink>
  </div>
</template>
<script setup>
defineProps({
  pr: { type: Object, default: null },
  height: { type: String, default: null }
});
function getState(object) {
  if(object.state === "closed") {
    return object.merged_at !== null ? "merged" : "closed";
  }

  return object.draft ? "draft" : "open";
}
</script>
<style lang="scss" scoped>
.pr {
  background-color: var(--color-darkgreen-800);
  border-radius: var(--space-sm);
  color: var(--color-bg);
  padding: var(--space-sm);
  overflow: hidden;
  display: grid;
  grid-template-rows: min-content auto min-content;
  height: v-bind(height);

  &__title {
    margin-bottom: var(--space-xs);
    color: var(--color-bg);
  }

  &__body {
    overflow: hidden;
  }

  &__link {
    display: block;
    color: var(--color-bg);
    text-decoration: none;
    text-align: center;
    margin-bottom: calc(var(--space-md) * -1);
    line-height: var(--space-md);

    &:hover {
      color: var(--color-light-link-hover);
    }
  }
}

.title {
  display: inline-flex;
  align-items: flex-start;
  flex-direction: column;
  max-width: calc($page-min / 2);
  white-space: nowrap;

  &__state {
    display: flex;
    align-items: center;
    gap: 0.5em;
    border-radius: var(--border-radius);
    text-transform: capitalize;
    padding: 0 1em;
    font-size: 40%;
    height: 2em;
    color: var(--color-fg);

    &--draft { background-color: var(--color-gray-500); }
    &--open { background-color: var(--color-green-500); }
    &--closed { background-color: var(--color-red-700); color: var(--color-gray-100); }
    &--merged { background-color: var(--color-blue-600); color: var(--color-gray-100); }
  }

  &__state-icon {
    width: 1em;
    height: 1em;
  }
}
</style>
<style lang="scss">
.pr {
  &__body {
    h1 { font-size: 2.5em; }
    h2 { font-size: 2em; }
    h3 { font-size: 1.7em; }
    h4 { font-size: 1.5em; }
    h5 { font-size: 1.25em; }
    h6 { font-size: 1.125em; }

    a, h1, h2, h3, h4, h5, h6 {
      color: var(--color-light-text-heading) !important;
    }

    a:hover {
      color: var(--color-green-500) !important;
    }

    code, a {
      word-break: break-all;
      white-space: break-spaces;
    }

    pre {
      background-color: var(--color-darkgreen-700);
      border-radius: var(--space-sm);
      padding: var(--space-sm);
      line-height: var(--space-sm);
    }
  }
}

</style>
