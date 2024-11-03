
// stores/componentStore.ts
import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const useComponentStore = defineStore('component', () => {
  const components = ref<number[]>([]);

  const addComponent = () => {
    components.value.push(components.value.length + 1);
  };

  const totalComponents = computed(() => components.value.length);

  return { components, addComponent, totalComponents };
});
