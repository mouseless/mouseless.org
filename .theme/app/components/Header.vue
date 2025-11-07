<template>
  <header class="header flex justify-between m0 p0 pt-(--space-md) pb-(--space-md)">
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
          class="no-underline d d--h_s m0 p0 mb-(--space-sm) text-(--font-xl)"
          @click="toggle"
        >
          <i class="fa-solid fa-close" />
        </NuxtLink>
        <NuxtLink
          v-for="menu in menus"
          :key="menu['menu-title'] ?? menu.title"
          class="menu__item m0 p0 ml-(--space-sm) mr-(--space-sm) mt-(--space-xs) mb-(--space-xs) pb-(--space-sm)"
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
          class="no-underline d d--h_s m0 p0 ml-(--space-sm)"
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
<style lang="scss" scoped>
// @media (max-width: $page-s) {
//   .header {
//     padding: var(--space-sm) 0;

//     &__overlay {
//       position: fixed;
//       width: 100%;
//       height: 100%;
//       background-color: var(--color-darkgreen-900);
//       opacity: 0.5;
//       padding: 0;
//       margin: 0;
//       top: 0;
//       left: 0;
//     }
//   }

//   .menu {
//     display: none;
//     flex-direction: column;
//     position: fixed;
//     top: 0;
//     right: 0;
//     width: 50%;
//     min-width: $page-min*0.75;
//     height: 100%;
//     z-index: 1;
//     padding-top: 0;
//     border-left: solid var(--space-xs) var(--color-darkgreen-800);
//     background-color: var(--color-darkgreen-900);

//     &--active {
//       display: flex;
//     }

//     &__item {
//       color: var(--color-light-link);
//       margin-left: var(--space-sm);
//       padding: var(--space-xs) 0;

//       &:hover {
//         color: var(--color-light-link-hover);
//         border-bottom: 0;
//       }

//       &--selected {
//         color: var(--color-light-link);
//         border-bottom: none;
//         border-left: solid var(--space-xs) var(--color-light-link-hover);
//         margin-left: calc(var(--space-xs) * -1);
//         padding-left: var(--space-sm);

//         &:hover {
//           color: var(--color-light-link);
//         }
//       }
//     }
//   }
// }
</style>
