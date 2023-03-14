<template>
  <div id="colorPage">
    <div id="colorBody">
      <div class="q-gutter q-pa" id="signUp">Sign up</div>
      <q-form @submit.prevent="submitSignUp">
        <q-input
          class="nameBox"
          type="text"
          v-model="name"
          label="Name and last name"
          lazy-rules
          :rules="[
            (val) =>
              (val && val.length > 0) || 'Please type your name and last name',
          ]"
        />
        <q-input
          class="emailBox"
          type="email"
          v-model="email"
          label="Email"
          :rules="[
            (val) => (val && val.length > 0) || 'Please type your email',
          ]"
        />
        <q-input
          class="passBox"
          v-model="pass"
          type="password"
          label="Password"
          lazy-rules
          :rules="[
            (val) => (val && val.length > 0) || 'Please type your password',
          ]"
        />
        <q-input
          class="conpassBox"
          type="password"
          v-model="confirmPass"
          label="Confirm Password"
          lazy-rules
          :rules="[
            (val) =>
              (val && val.length > 0) || 'Please type your confirm password',
          ]"
        />
        <div>
          <q-btn
            class="signupSubmit"
            label="SIGN UP"
            @click="submitSignUp"
            v-model="message"
          />
          <!-- <button class="signupSubmit" @click="submitSignUp">SIGN UP</button> -->
        </div>
      </q-form>
    </div>
  </div>
</template>

<script>
// import { useQuasar } from 'quasar'
// import { ref } from 'vue'
// import db from "src/boot/firebase.js";

import firebase from 'boot/firebase'

export default {

  data () {
    return {
      name: '',
      email: '',
      pass: '',
      confirmPass: '',
      message: ''
    }
  },
  methods: {
    submitSignUp () {
      if (this.pass !== this.confirmPass) {
        this.confirmPass = ''
        // this.message.$notify({
        //   title: 'Notification Error',
        //   text: 'Notification Message',
        //   type: 'error'
        // })
      } else {
        firebase.database().ref('path/to/data').set({
          key1: 'value1',
          key2: 'value2',
          key3: 'value3',
          key4: 'value4'
        })
          .then(() => {
            console.log('Data has been written successfully.')
          })
          .catch(error => {
            console.error(error)
          })
      }
      // Do something with the username and password here
    }
  }
}

</script>
