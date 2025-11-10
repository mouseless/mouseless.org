<template>
  <div class="pr-list mt-md flex flex-col gap-sm">
    <div class="pr-list__repos">
      <div class="repo-list flex flex-row items-end p-0">
        <ul class="repo-list__items m-0 p-0 flex flex-row flex-wrap gap-2 max-w-[90%]">
          <li v-for="(repo, index) in repos" :key="repo" class="repo-list__item :marker:content-none">
            <button
                class="repo-list__item-link cursor-pointer w-full text-left whitespace-nowrap border-0 hover:bg-gray-400 active:bg-darkgreen-700"
              :class="[
                `repo-list__item-link--color_${color}`,
                {'repo-list__item-link--active': index == repoIndex},
              ]"
              @click="changeSlider(index)"
            >
              {{ repo }}
            </button>
          </li>
        </ul>
        <Switcher :action="switcher" :status="prState" class="repo-list__switcher" />
      </div>
    </div>
    <div class="pr-list__prs m-auto w-full">
      <div v-if="!render" :style="`height: ${height};`" class="flex items-center" >
        <div class="border-4 border-solid border-bg-soft border-l-fg rounded-full h-12 w-12 mx-[auto] my-0 animate-spin" />
      </div>
      <SliderInner
        v-if="render"
        :align="'left'"
        :slides="pullRequests"
        :height="height"
      >
        <template #default="{pageNumber, slides}">
          <Pr
            v-if="slides.length !== 0 && pageNumber != slides.length - 1"
            :pr="slides[pageNumber]"
            :height="height"
          />
          <div v-else :style="`height: ${height};`" class="bg-darkgreen-800 rounded p-sm pr">
            <div class="pr__body">
              To see more pull requests, please visit
              <NuxtLink
                :text="`github.com/mouseless/${repos[repoIndex]}/pulls`"
                :to="`https://github.com/mouseless/${repos[repoIndex]}/pulls${prState == 'all' ? '?q=is%3Apr' : ''}`"
              />
            </div>
          </div>
        </template>
      </SliderInner>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  height: { type: String, default: "50ch" },
  repos: { type: Array, default: () => [] }
});

const github = useGitHub();

const color = inject("block-child-color", "dark");
const pullRequests = ref([]);
const repoIndex = ref(0);
const render = ref(false);
const prState = ref("all");

onBeforeMount(async() => {
  const result = await getPullRequests(prState.value);
  pullRequests.value = result.length > 0 ? [...result, { }] : result;
});

watch([repoIndex, prState], async() => {
  const result = await getPullRequests(prState.value);
  pullRequests.value = result.length > 0 ? [...result, { }] : result;
});

function switcher() {
  prState.value = prState.value === "all" ? "open" : "all";
};

function changeSlider(index) {
  repoIndex.value = index;
}

async function getPullRequests(state) {
  render.value = false;
  const result = await github.getPullRequests(props.repos[repoIndex.value], state);
  render.value = true;

  return result;
}
</script>
<style lang="scss">
.repo-list {
  &__item-link {
    border-radius: var(--space-xs);
    padding: var(--space-xs) var(--space-sm);
    font-family: var(--font-default);
    font-size: medium;

    &--color{
      &_dark {
        background-color: var(--color-gray-300);
        color: var(--color-darkgreen-900);
      }

      &_light {
        background-color: var(--color-bg-mute);
        color: var(--color-fg);
      }
    }

    &--active, &--active:hover {
      background-color: var(--color-darkgreen-700);
      color: var(--color-gray-100);
    }
  }

  &__switcher {
    margin-left: auto;
    margin-right: 0
  }
}

@media (max-width: $page-s) {
  .repo-list {
    flex-direction: column;
    align-items: flex-start;
    gap: var(--space-sm);

    &__switcher {
      margin-left: 0;
      margin-right: auto;
    }
  }
}
</style>
