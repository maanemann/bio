<script setup lang="ts">
  import BorgerInfo from '@/components/BorgerInfo.vue';
  import MainContent from '../components/MainContent.vue';
</script>

<template>
  <main>
    <div class="contentWrapper">
    <!-- <div class="BorgerWrapper"> -->
      <MainContent />
    </div>
    <BorgerInfo borger="Lisbeth Langstreng">
      <template #info1>
        Information om borgeren
      </template>
      <template #info2>
        Her kunne fx også være et billede, hvis det findes i NemID databasen?
      </template>
      <template #info3>
        Mere info om borgeren...
      </template>
    </BorgerInfo>
  </main>
</template>

<style scoped>
  .contentWrapper {
    display: flex;
    flex-direction: column;
    gap: var(--bio-gap-1);
    margin-bottom: var(--bio-gap-3);
  }
</style>
