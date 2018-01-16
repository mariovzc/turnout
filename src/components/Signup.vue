<template>
  <div class="from-inline">
    <h3>Sign Up</h3>
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
      <button class="btn btn-primary" @click="signUp">Sign Up</button>
    </div>
    <br>
    <router-link to="/signin">Already a user? Sign In</router-link>
    <br>
    <p>{{ error.message }}</p>
  </div>
</template>
<script>
import firebaseApp  from 'firebase'
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
    signUp () {
      firebaseApp.auth().createUserWithEmailAndPassword(this.email, this.password)
        .catch(error => {
          this.error = error
        })
    }
  }
}
</script>
