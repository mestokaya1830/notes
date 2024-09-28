<script setup>
  //conposables
  const { message } = useUtils()

  //plugins
  const { $myProvide } = useNuxtApp()
</script>

<template lang="">
  <div>
    <h1>Images</h1>
    <h2>{{ message('This is coming from Composables') }}</h2>
    <h2>{{ $myProvide('This is comming from Pulgins') }}</h2>
    <h3>From Assets</h3>
    <img src="~/assets/2.jpg" alt="no image" class="main-image" />
    <h3>From Assets SWG</h3>
    <img src="~/assets/1.svg" alt="no image" class="main-image" />
    <h3>From Public</h3>
    <img src="/public/1.jpg" alt="no image" class="main-image" />
  </div>
</template>