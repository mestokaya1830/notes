<template>
  <div class="popup">
    <h2>This is Popup Component</h2>
    <input type="button" @click="$emit('close')" value="Close Popup" class="input-btn"/>
  </div>
</template>

