<template>
  <div class="item">
      <h2>
        <slot name="heading"></slot>
      </h2>
      <div class="question">
        <slot name="question"></slot>
      </div>
      <span class="questionNumber">
        <slot name="questionNumber"></slot>
      </span>
  </div>
</template>

<style scoped>
.item {
  position: relative;
  background-color: hsl(var(--bio-c-second-100));
  border-radius: var(--bio-radius-1);
  padding: var(--bio-gap-1) var(--bio-gap-2);
}

h2 {
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 0.4rem;
  color: var(--color-heading);
}

.question {
  display: flex;
  flex-direction: column;
  gap: var(--bio-gap-_5);
}

.questionNumber {
  position: absolute;
  right: var(--bio-gap-_5); bottom: var(--bio-gap-_25);
  font-size: var(--bio-gap-1);
  letter-spacing: .25rem;
  font-weight: 500;
  color: var(--bio-c-accent-500);
  opacity: .3;
}
</style>
