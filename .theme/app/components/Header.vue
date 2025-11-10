<template>
  <header class="header flex justify-between py-md max-sm:py-sm">
    <NuxtLink class="content-center leading-[0]" to="/">
      <img class="mouseless logo max-md:hidden">
      <img class="mouseless logo short hidden max-md:block">
    </NuxtLink>
    <div
      v-if="menuShown"
      class="sm:hidden fixed w-full h-full top-0 left-0 bg-darkgreen-900 opacity-50"
      @click="close"
    />
    <div class="flex gap-sm">
      <nav
        class="
          font-default pt-xs
          max-sm:hidden max-sm:flex-col max-sm:fixed
          max-sm:top-0 max-sm:right-0 max-sm:w-1/2
          max-sm:h-full max-sm:bg-darkgreen-900
          max-sm:pt-0 max-sm:z-1
          max-sm:min-w-[calc(var(--page-min)*0.75)]
          max-sm:border-l-(length:--space-xs) max-sm:border-darkgreen-800
        "
        :class="{ 'max-sm:flex!': menuShown }"
      >
        <NuxtLink
          to="javascript:void(0)"
          class="
            no-underline sm:hidden mb-sm text-xl
            max-sm:ml-sm max-sm:py-xs
            max-sm:text-light-link max-sm:hover:text-light-link-hover
          "
          @click="toggle"
        >
          <i class="fa-solid fa-close" />
        </NuxtLink>
        <NuxtLink
          v-for="menu in menus"
          :key="menu['menu-title'] ?? menu.title"
          class="
            mx-sm my-xs pb-sm
            max-sm:ml-sm max-sm:py-xs
            max-sm:text-light-link max-sm:hover:text-light-link-hover
          "
          :class="{
            'text-dark-link border-b border-dark-link': menu.path === root,
            'max-sm:border-b-0 max-sm:border-l-(length:--space-xs) max-sm:border-l-light-link-hover': menu.path === root,
            'max-sm:-ml-xs! max-sm:pl-sm': menu.path === root,
            'hover:text-dark-link-hover! hover:border-b border-dark-link-hover': menu.path !== root
          }"
          :to="menu.path == $route.path ? '' : menu.path"
          @click="close"
        >
          {{ menu['menu-title'] ?? menu.title }}
        </NuxtLink>
      </nav>
      <nav class="font-default">
        <LinkButton
          text="contact us"
          class="no-underline"
          to="#contact-us"
        />
        <NuxtLink
          to="javascript:void(0)"
          class="no-underline sm:hidden ml-sm"
          @click="toggle"
        >
          <i class="fa-solid fa-bars" />
        </NuxtLink>
      </nav>
    </div>
  </header>
</template>
<script setup>
import { useRoute } from "#imports";
import { usePageMetaStore } from "~/store/pageMetaStore";

const store = usePageMetaStore();
const menus = store.pageMeta;
const route = useRoute();
const root = computed(() => `/${route.path.split("/")[1]}`);
const menuShown = ref(false);

function toggle() { menuShown.value = !menuShown.value; }
function close() { menuShown.value = false; }
</script>
