<template>
  <div class="from-inline">
    <h3>Sign In</h3>
    <div class="form-group">
      <input 
        type="text"
        placeholder="Email"
        v-model="email"
        class="form-control"
      >
      <input 
        type="password"
        placeholder="Password"
        v-model="password"
        class="form-control"
      >
      <br>
      <button class="btn btn-primary" @click="signIn">Sign In</button>
    </div>
    <br>
    <router-link to="/signup">Not a user? Sign Up</router-link>
    <br>
    <p>{{ error.message }}</p>
  </div>
</template>
<script>
import {firebaseApp}  from '../firebaseApp'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: {
        message: ''
      }
    }
  },
  methods: {
    signIn () {
      firebaseApp.auth().signInWithEmailAndPassword(this.email, this.password)
        .catch(error => {
          this.error = error
        })
    }
  }
}
</script>
