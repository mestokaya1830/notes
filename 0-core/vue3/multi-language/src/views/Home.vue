<template>
  <div>
    <h2>{{ localized('title') }}</h2>
   <p>{{ localized('localTransation') }}</p>
    <p>{{ localized('hello') }}</p>

   <div class="wrapper">
     <button @click="selectedLanguage='en'">{{ localized('english') }}</button>
     <button @click="selectedLanguage='tr'">{{ localized('turkish') }}</button>
   </div>
  </div>
</template>

<script>
export default {
  name:'Home',
  data () {
    return {
      selectedLanguage:'en',
      languages:{
        en:{
          title:'Home',
          hello:'Hello',
          by:'By',
          localTransation:'Local Transation',
          english:'English',
          turkish:'Turkish',
        },
        tr:{
          title:'Ana Sayfa',
          hello:'Merhaba',
          by:'Gorusuruz',
          localTransation: 'Yerel Ceviri',
          english:'Ingilizce',
          turkish:'Turkce',
        },

      }
    }
  },
  methods:{
    localized(key){
      return this.languages[this.selectedLanguage][key]
    }
  }
};
</script>

<style scoped>
.wrapper{
  display: flex;
}
.wrapper button{
  margin: 10px;
  padding: 3px 10px;
}
</style>