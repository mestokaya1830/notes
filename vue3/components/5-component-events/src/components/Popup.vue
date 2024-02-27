<template>
  <div>
    <h2>These are Component Click Events</h2>
    <input type="text" v-model="message" placeholder="Enter the message" />
    <input type="button" @click="$emit('messageEvent', message)" value="Message Event Parameter" />
    <input type="button" @click="$emit('calcEvent', 20)" value="Calc Event With Parameter" />
    <input type="button" @click="$emit('closeEvent')" value="Close Event" />
  </div>
</template>
<script>
  export default {
    name: "PopupComponent",
    emits:{
      messageEvent(message){
        if(!message){
          return false
        }
        return true
      }
    },
    data() {
      return { 
        message:''
      }
    }
  };
  </script>
  <style scoped>
    div{
      width: 400px;
      padding: 10px;
      margin-top: 20px;
      text-align: center;
      border-radius: 4px;
      border: 1px solid #ccc;
      box-shadow: 1px 1px 10px #999;
    }
    button{
      margin: 20px;
      padding: 10px 20px;
    }
  </style>
<style scoped>
input{
  width: 100%;
  margin: 10px 0;
  min-height: 30px;
}
input[type="text"]{
  padding-left: 10px;
  border: none;
  border: 1px solid #ddd;
}
input[type="text"]:focus{
  border-radius: 3px;
  outline: none;
  box-shadow:inset 2px 2px 5px #444;
}
</style>