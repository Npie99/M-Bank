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
import myCollection from 'src/boot/firebase.js'

// const userCollection = db.collection('my-collection')

function getRandumNumber (length) {
  const min = Math.pow(10, (length - 1))
  const max = Math.pow(10, (length))
  return Math.floor(Math.random() * (max - min) + min)
}

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
        const docRef = myCollection.add({
          name: this.name,
          email: this.email,
          password: this.pass,
          number: getRandumNumber(10),
          balance: 0
        })
        console.log('Document written with ID: ', docRef.id)
      }
      // Do something with the username and password here
    }
  }
}

</script>
