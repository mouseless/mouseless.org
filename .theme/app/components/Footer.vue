<template>
  <article>
    <ContentRenderer v-if="content" :value="content"/>
  </article>
  <footer class="c--content text-sm my-sm opacity-50">
    <div
      class="
        justify-between flex flex-row
        max-md:items-start
        max-sm:flex-col max-sm:gap-sm
      "
    >
      <div class="content-center">
        <NuxtLink to="/">
          <img class="mouseless logo mono short !h-3">
        </NuxtLink>
        <span class="ml-1">&copy; 2025, GC Brains.</span>
      </div>
      <div
        class="
          flex flex-row gap-sm
          max-md:flex-col max-md:items-end max-md:gap-xs
          max-sm:items-start
        "
      >
        <NuxtLink
          v-for="menu in menus"
          :key="menu['menu-title'] ?? menu.title"
          :to="menu.path == $route.path ? '' : menu.path"
          class="no-underline"
          :class="{ 'hover::[text-inherit] ': (menu.path == $route.path)}"
        >
          {{ menu['menu-title'] ?? menu.title }}
        </NuxtLink>
        <NuxtLink
          to="//brand.mouseless.codes"
          class="
            ml-sm no-underline
            max-md:ml-0 max-md:mt-xs
          "
          target="_blank"
        >
          brand <i class="fa-solid fa-arrow-up-right-from-square" />
        </NuxtLink>
      </div>
    </div>
  </footer>
</template>
<script setup>
import { usePageMetaStore } from "~/store/pageMetaStore";

const store = usePageMetaStore();
const menus = store.pageMeta;
const content = await queryCollection("footer").first();
</script>
