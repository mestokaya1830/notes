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
        }
      }
    }
  },
  methods:{
    localized(key){
      console.log(this.languages['tr']['title'])
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



<!-- javascript version
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <h2 id="title"></h2>
  <p id="message"></p>
  
  <div class="wrapper">
   <button onclick="loadLanguage('en')">English</button>
   <button onclick="loadLanguage('tr')">Turkce</button>
  </div>
  
  <script>
    const languages = {
      en:{
        title:'Home',
        hello:'Hello'
      },
      tr:{
        title:'Ana Sayfa',
        hello:'Merhaba'
      }
    }
    
    const loadLanguage = (key) => {
      document.getElementById('title').innerText = languages[key]['title']
      document.getElementById('message').innerText = languages[key]['hello']
    }
    loadLanguage('en')
  </script>
</body>
</html> -->
