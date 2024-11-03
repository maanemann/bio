
<script setup lang="ts">
  defineProps<{
    borger: string
  }>()
</script>

<template>
  <aside class="borgerInfo">
    <h2 class="green">{{ borger }}</h2>
    <div class="aboutTheBorger">
      <p>
        <slot name="info1"></slot>
      </p>
      <p>
        <slot name="info2"></slot>
      </p>
      <p>
        <slot name="info3"></slot>
      </p>
    </div>
  </aside>
</template>

<style scoped>
  .borgerInfo {
    height: max-content;
    position: sticky;
    top: var(--bio-gap-_25);
    padding: var(--bio-gap-2) var(--bio-gap-1);
    background-color: hsl(var(--bio-c-second-300));
    border-radius: var(--bio-radius-2);
  }

  .borgerInfo h2 {
    font-weight: 500;
    font-size: 2.6rem;
    line-height: 1.25;
    margin-bottom: var(--bio-gap-1);
    text-align: center;
  }

  .aboutTheBorger {
    font-size: 1.2rem;
  }

  @media (min-width: 1024px) {
    .borgerInfo h2,
    .borgerInfo .aboutTheBorger {
      text-align: left;
    }
  }
</style>
