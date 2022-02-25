<template>
  <v-container>
    
    <v-row class="text-center">

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          Welcome to CaptionBoard
        </h1>

        <section id="whenSignedOut">
          <button id="signInBtn" class="btn btn-primary">Sign in with Google</button>
        </section>

        <section id="whenSignedIn" hidden>
          <div id="userDetails"></div>
          <button id="signOutBtn" class="btn btn-primary">Sign Out</button>
        </section>

        <script src="login.js" defer></script>
      </v-col>

      
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'TestPage',

    data: () => ({
      
       

    }),
  }
</script>
