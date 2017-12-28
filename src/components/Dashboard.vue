<template>
  <div>
    <h3>Events DashBoard</h3>
    <button class="btn btn-danger btn-sm signout-btn" @click="signOut">Sign Out</button>
    {{$store.state}}
  </div> 
</template>
<script>
import firebaseApp  from 'firebase'
export default {
 methods: {
   signOut () {
     this.$store.dispatch('SIGN_OUT')
     firebaseApp.auth().signOut()
   }
 } 
}
</script>
