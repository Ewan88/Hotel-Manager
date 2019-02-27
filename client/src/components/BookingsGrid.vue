<template lang="html">
  <div id="bookingsGrid">
    <h3>Guests checked in:</h3>
    <div class="booking" v-for="booking in bookings">
      <section v-if="booking.checked">
        <p class="name">{{ booking.name }}</p>
        <p>{{ booking.email }}</p>
        <button
          v-on:click="deleteBooking(booking._id)"
          class="delete">
          X
        </button>
        <button
          v-on:click="checkBooking(booking._id)"
          class="checkout">
          >
        </button>

      </section>
    </div>
    <h3>Guests checked out:</h3>
    <div class="booking" v-for="booking in bookings">
      <section v-if="!booking.checked">
        <p class="name">{{ booking.name }}</p>
        <p>{{ booking.email }}</p>
        <button
         v-on:click="deleteBooking(booking._id)"
         class="delete">
          X
        </button>
        <button
          v-on:click="checkBooking(booking._id)"
          class="checkin">
          <
        </button>
      </section>
    </div>
  </div>
</template>

<script>
import { eventBus } from '../main.js'
export default {
  name: "BookingsGrid",
  props: ["bookings"],
  methods: {
    deleteBooking(id){
      fetch(`http://localhost:3000/api/bookings/${id}`, {
        method: 'DELETE'
      }).then(data => eventBus.$emit('refresh-data'));
    }
  }
}
</script>

<style lang="css" scoped>
section {
  display: inline-flex;
  border: 1px solid black;
  margin: 2px 0;
}
p {
  padding-left: 2px;
}
p.name {
  font-weight: bold;
}
button:hover {
  cursor: pointer;
}
button.checkout:hover {
  background-color: darkred;
}
button.checkin:hover {
  background-color: darkgreen;
}
button.delete {
  border: none;
  background-color: none;
  color: red;
  font-size: large;
}
button.delete:hover {
  color: black;
}
</style>
