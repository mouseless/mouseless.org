<template>
  <header class="header flex justify-between py-(--space-md)">
    <NuxtLink class="content-center leading-[0]" to="/">
      <img class="mouseless logo d d--v_m">
      <img class="mouseless logo short d d--h_m">
    </NuxtLink>
    <div
      v-if="menuShown"
      class="d d--h_s max-md:fixed max-md:w-full max-md:h-full max-md:top-0 max-md:left-0 max-md:bg-(--color-darkgreen-900) max-md:opacity-50"
      @click="close"
    />
    <div class="flex gap-(--space-sm)">
      <nav
        class="font-(--font-default) pt-(--space-xs) max-lg:hidden "
        :class="{ 'menu--active': menuShown }"
      >
        <NuxtLink
          to="javascript:void(0)"
          class="no-underline d d--h_s mb-(--space-sm) text-(--font-xl)"
          @click="toggle"
        >
          <i class="fa-solid fa-close" />
        </NuxtLink>
        <NuxtLink
          v-for="menu in menus"
          :key="menu['menu-title'] ?? menu.title"
          class="menu__item mx-(--space-sm) my-(--space-xs) pb-(--space-sm)"
          :class="{
            'text-(--color-dark-link) border-b border-(--color-dark-link)': menu.path === root,
            'hover:text-(--color-dark-link-hover)! hover:border-b border-(--color-dark-link-hover)': menu.path !== root
          }"
          :to="menu.path == $route.path ? '' : menu.path"
          @click="close"
        >
          {{ menu['menu-title'] ?? menu.title }}
        </NuxtLink>
      </nav>
      <nav class="font-(--font-default)">
        <LinkButton
          text="contact us"
          class="no-underline"
          to="#contact-us"
        />
        <NuxtLink
          to="javascript:void(0)"
          class="no-underline d d--h_s ml-(--space-sm)"
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
