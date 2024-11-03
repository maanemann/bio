<script setup lang="ts">
import FormItem from './FormItem.vue'
</script>

<template>
  <FormItem>
    <template #heading>
      Spørgsmål 1
    </template>

    <template #question>
      <p>
        Beskrivelse af, hvad sagsbehandleren skal informere borgeren om.
      </p>

      <label>
        <input type="checkbox" />
        Borgeren har forstået ovenstående information
      </label>
    </template>

    <template #questionNumber>1/5</template>
  </FormItem>

  <FormItem>
    <template #heading>
      Spørgsmål 2
    </template>

    <template #question>
      <p>
        Beskrivelse af, hvad sagsbehandleren skal informere borgeren om. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate ut amet distinctio? Quaerat ducimus ipsam dolore maiores ea cupiditate sequi aspernatur architecto. Deleniti sunt corporis explicabo eius blanditiis quos temporibus!
      </p>

      <p>
        Quaerat ducimus ipsam dolore maiores ea cupiditate sequi aspernatur architecto. Deleniti sunt corporis explicabo eius blanditiis quos temporibus!
      </p>

      <label>
        <input type="checkbox" />
        Borgeren har forstået ovenstående information
      </label>
    </template>

    <template #questionNumber>2/5</template>
  </FormItem>

  <FormItem>
    <template #heading>
      Spørgsmål 3
    </template>

    <template #question>
      <p>
        Beskrivelse af, hvad sagsbehandleren skal informere borgeren om.
      </p>

      <label>
        <input type="checkbox" />
        Borgeren har forstået ovenstående information
      </label>
    </template>

    <template #questionNumber>3/5</template>
  </FormItem>

  <FormItem>
    <template #heading>
      Spørgsmål 4
    </template>
    <template #question>
      <p>
        Beskrivelse af, hvad sagsbehandleren skal informere borgeren om. Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>

      <label>
        <input type="checkbox" />
        Borgeren har forstået ovenstående information
      </label>
    </template>

    <template #questionNumber>4/5</template>
  </FormItem>

  <FormItem>
    <template #heading>
      Spørgsmål 5
    </template>
    <template #question>
      <p>
        Beskrivelse af, hvad sagsbehandleren skal informere borgeren om. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate ut amet distinctio? Voluptate ut amet distinctio? Quaerat ducimus ipsam dolore maiores ea cupiditate sequi aspernatur architecto. Deleniti sunt corporis explicabo eius blanditiis quos temporibus!
      </p>

      <p>
        Quaerat ducimus ipsam dolore maiores ea cupiditate sequi aspernatur architecto. Deleniti sunt corporis explicabo eius blanditiis quos temporibus!
      </p>

      <label>
        <input type="checkbox" />
        Borgeren har forstået ovenstående information
      </label>
    </template>

    <template #questionNumber>5/5</template>
  </FormItem>
</template>

<style scoped>

</style>
