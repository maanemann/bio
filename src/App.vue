<script setup lang="ts">
  import { RouterLink, RouterView } from 'vue-router'
  import AnmodningsIntro from './components/AnmodningsIntro.vue'
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">
        Punkt 1
      </RouterLink>

      <RouterLink to="/about">
        Punkt 2
      </RouterLink>

      <a href="https://duckduckgo.com" target="_blank" rel="noopener">
        Punkt 3
      </a>
    </nav>

    <div class="wrapper">
      <AnmodningsIntro
        introHeading="Fritagelsesanmodning"
      >
        <template #introContent>
          <p>
            Med dette værktøj, kan du hjælpe borgeren med at søge fritagelse for digital post, for i stedet etc. etc.
          </p>
          <p>
            Som sagsbehandler er det vigtigt, at du du sikrer, at borgeren er informeret om vigtig information og viser tydeligt, at det er forstået.
          </p>
        </template>
      </AnmodningsIntro>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
  nav {
    background-color: hsl(var(--bio-c-second-500));
    position: fixed;
    top: var(--bio-gap-_25);
    width: max-content;
    border-radius: var(--bio-radius-1);
    z-index: 16;
  }

  nav a {
    display: inline-block;
    line-height: var(--bio-gap-2);
    padding: 0 var(--bio-gap-1);
    border-left: 1px solid hsla(var(--bio-c-second-700), .64);
    color: var(--bio-c-second-800);
  }

  @media (hover: hover) {
    a:hover {
      background-color: hsl(var(--bio-c-second-400));
    }
  }

  nav a.router-link-exact-active {
    color: var(--bio-c-primary-900);
    background-color: hsla(var(--bio-c-second-600), .5);
  }

  nav a.router-link-exact-active:hover {
    background-color: hsla(var(--bio-c-second-600), .75);
  }

  nav a:first-of-type {
    border: 0;
    border-radius: var(--bio-radius-1) 0 0 var(--bio-radius-1);
  }

  nav a:last-of-type {
    border-radius: 0 var(--bio-radius-1) var(--bio-radius-1) 0;
  }

  .wrapper {
    display: grid;
    grid-template-columns: .75fr;
    margin-right: var(--bio-gap-1);
  }
</style>
