<template>
  <div
    class="my-4 w-full"
    :class="`text-${align}`"
  >
    <div class="inline-flex flex-row flex-wrap gap-(--space-xs)">
      <div v-for="member in members" :key="member.login">
        <a :href="member.html_url" target="_blank">
          <img
            :src="member.avatar_url"
            class="transition-transform duration-200 ease-[cubic-bezier(0.175,0.885,0.32,2)] hover:scale-150"
            :style="`width: ${itemHeight}; height: ${itemHeight}; border-radius: ${itemHeight};`"
          >
        </a>
      </div>
    </div>
  </div>
</template>
<script setup>
defineProps({
  align: { type: String, default: "left" },
  itemHeight: { type: String, default: "4em" }
});

const { getPeople } = useGitHub();

const members = ref([]);

onServerPrefetch(async() => members.value = await getPeople());
onBeforeMount(async() => members.value = await getPeople());
</script>
