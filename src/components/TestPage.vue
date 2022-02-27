<template>
  <v-container>
    <v-row class="text-center">
      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">Welcome to CaptionBoard</h1>
        <section id="whenSignedOut">
          <button id="signInBtn" class="btn btn-primary">
            Sign in with Google
          </button>
        </section>
        <section id="whenSignedIn" hidden>
          <div id="userDetails"></div>
          <button id="signOutBtn" class="btn btn-primary">Sign Out</button>
        </section>
      </v-col>
    </v-row>


    <v-row class="text-right">
      <v-col>
        <v-btn color="primary" elevation="2">Register </v-btn>
      </v-col>
    </v-row>

   
      <v-row>
        <v-col
          cols="4"
          sm="6"
          md="3"
        >
          <v-text-field
            label="Username"
          ></v-text-field>

          <v-text-field
            :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required, rules.min]"
            :type="show2 ? 'text' : 'password'"
            name="input-10-2"
            label="Password"
            hint="At least 8 characters"
            
            class="input-group--focused"
            @click:append="show2 = !show2"
          ></v-text-field>
        </v-col>
      </v-row>


  </v-container>
</template>

<script>
export default {
  mounted() {
    let Script = document.createElement("script");
    Script.setAttribute("src", "src/scripts/login.js");
    document.head.appendChild(Script);
  },
  name: "TestPage",

  data () {
      return {
        show1: false,
        show2: true,
        show3: false,
        show4: false,
        password: 'Password',
        rules: {
          required: value => !!value || 'Required.',
          min: v => v.length >= 8 || 'Min 8 characters',
          emailMatch: () => (`The email and password you entered don't match`),
        },
      }
    },
};
</script>
