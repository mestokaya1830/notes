<template>
  <main>
   <h1>{{ $t('Home') }}</h1>
   <div>
    <button @click="$i18next.changeLanguage('tr')">Turkish</button>
    <button @click="$i18next.changeLanguage('en')">English</button>
   </div>
  </main>
</template>
