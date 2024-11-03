
<script setup lang="ts">
  defineProps<{
    introHeading: string
  }>()
</script>

<template>
  <div class="greetings">
    <h1>{{ introHeading }}</h1>
    <div class="introContent">
      <slot name="introContent"></slot>
    </div>
  </div>
</template>

<style scoped>
  .greetings {
    color: var(--bio-c-primary-50);
    padding: 0 var(--bio-gap-2);
    margin: var(--bio-gap-2) 0;
  }

  h1 {
    font-weight: 500;
    font-size: var(--bio-gap-2);
    text-align: center;
    margin-bottom: var(--bio-gap-1);
  }

  .introContent {
    display: flex;
    flex-direction: column;
    gap: var(--bio-gap-_5);
  }

  @media (min-width: 1024px) {
    .greetings h1{
      text-align: left;
    }
  }
</style>
