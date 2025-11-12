<template>
  <div class="flex flex-col gap-sm mt-md">
    <div>
      <div
         class="
           flex flex-row items-end p-0
           max-sm:flex-col max-sm:items-start max-sm:gap-sm
         "
       >
        <ul class="flex flex-row flex-wrap gap-2 max-w-[90%] m-0 p-0">
          <li v-for="(repo, index) in repos" :key="repo" class=":marker:content-none">
            <button
              class="
                rounded-xs cursor-pointer px-sm py-xs
                text-[length:medium] whitespace-nowrap
                leading-[normal] hover:bg-gray-400
              "
              :class="{
                'bg-gray-300 text-darkgreen-900': color === 'dark',
                'bg-bg-mute text-fg': color === 'light',
                'bg-darkgreen-700! text-gray-100': index == repoIndex
              }"
              @click="changeSlider(index)"
            >
              {{ repo }}
            </button>
          </li>
        </ul>
        <Switcher :action="switcher" :status="prState" class="ml-auto mr-0 max-sm:ml-0 max-sm:mr-auto" />
      </div>
    </div>
    <div class="m-auto w-full">
      <div v-if="!render" :style="{ height }" class="flex items-center" >
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
          <div v-else :style="{ height }" class="rounded bg-darkgreen-800 p-md text-bg">
            <span>To see more pull requests, please visit </span>
            <NuxtLink
              :text="`github.com/mouseless/${repos[repoIndex]}/pulls`"
              :to="`https://github.com/mouseless/${repos[repoIndex]}/pulls${prState == 'all' ? '?q=is%3Apr' : ''}`"
              class="text-light-text-heading hover:text-green-500 underline"
            />
          </div>
        </template>
      </SliderInner>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  height: { type: String, default: "60ch" },
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
