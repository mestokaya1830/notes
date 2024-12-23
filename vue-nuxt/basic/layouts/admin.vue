<template>
  <div>
    <main class="router">
      <slot />
    </main>
  </div>
</template>

<style>
  .router > div{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px;
  }
</style>