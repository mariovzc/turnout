<template>
  <div>
    <h3>Events DashBoard</h3>
    <button class="btn btn-danger btn-sm signout-btn" @click="signOut">Sign Out</button>
    <hr>
    <add-event/>
    <hr>
    <div class="col-md-12">
      <event-item
        v-for="(event_item, index) in this.$store.state.events"
        :event="event_item"
        :key="index"
      />
    </div>
  </div> 
</template>
<script>
import {firebaseApp, eventsRef}  from '../firebaseApp'
import AddEvent from './AddEvent'
import EventItem from './EventItem'
export default {
 methods: {
   signOut () {
     this.$store.dispatch('SIGN_OUT')
     firebaseApp.auth().signOut()
   }
 },
 components: {
   AddEvent,
   EventItem
 },
 mounted () {
   eventsRef.on('value', snap => {
     let events = []
     snap.forEach(event => {
       events.push(event.val())
     })
     this.$store.dispatch('SET_EVENTS', events)
   })
 }
}
</script>
