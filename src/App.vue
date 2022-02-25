<template>
  <v-app>
  

    <v-main>
      <TestPage/>
    </v-main>


  </v-app>
</template>

<script>
import TestPage from './components/TestPage';

export default {
  name: 'App',

  components: {
    TestPage,
  },

  data: () => ({
    //
  }),
};
</script>
