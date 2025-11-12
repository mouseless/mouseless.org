<template>
  <div
    class="flex flex-col rounded bg-darkgreen-800 p-md text-bg overflow-hidden"
    :style="{ height }"
  >
    <h3 class="inline-flex flex-col mb-xs items-start text-bg! whitespace-nowrap">
      {{ pr?.title }}
      <div
        class="flex items-center gap-2 rounded capitalize h-8 px-4 text-fg text-[50%]"
        :class="[
          getState(pr) === 'draft' ? 'bg-gray-500' :
          getState(pr) === 'open' ? 'bg-green-500' :
          getState(pr) === 'closed' ? 'bg-red-700 text-gray-100' :
          getState(pr) === 'merged' ? 'bg-blue-600 text-gray-100' : ''
        ]"
      >
        <img
          class="w-4 h-4"
          :src="`/components/pr/${getState(pr)}.svg`"
        >
        {{ getState(pr) }}
      </div>
    </h3>
    <div class="flex-2 overflow-hidden c--pr-body">
      <MarkdownFormat :body="pr?.body" tag="article" />
    </div>
    <div class="block text-bg no-underline text-center -mb-md py-xs leading-md hover:text-light-link-hover">
      <NuxtLink
        :to="pr?.html_url"
        class="rounded-xs px-sm py-xs bg-green-900 hover:bg-green-600 text-bg hover:text-fg"
      >
        See in <i class="fa-brands fa-github ml-1" /> GitHub
      </NuxtLink>
    </div>
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
