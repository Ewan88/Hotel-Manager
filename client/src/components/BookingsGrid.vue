<template v-if="bookings" lang="html">
  <div id="bookingsGrid">
    <h3>Guests checked in:</h3>
    <div class="booking" v-for="booking in bookings">
      <template v-if="booking.checked">
        <p class="name">{{ booking.name }}</p>
        <p>{{ booking.email }}</p>
        <button
          v-on:click="deleteBooking(booking._id)"
          class="delete">
          X
        </button>
        <button
          v-on:click="checkOut(booking._id)"
          class="checkout">
          >
        </button>
      </template>
    </div>
    <h3>Guests checked out:</h3>
    <div class="booking" v-for="booking in bookings">
      <template v-if="!booking.checked">
        <p class="name">{{ booking.name }}</p>
        <p>{{ booking.email }}</p>
        <button
         v-on:click="deleteBooking(booking._id)"
         class="delete">
          X
        </button>
        <button
          v-on:click="checkIn(booking._id)"
          class="checkin">
          <
        </button>
      </template>
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
    },
    checkOut(id){
      let json = {
        "checked": false
      }
      fetch(`http://localhost:3000/api/bookings/${id}`, {
        method: 'PUT',
        body: JSON.stringify(json),
        headers: { 'Content-Type': 'application/json' }
      }).then(data => eventBus.$emit('refresh-data'));
    },
    checkIn(id){
      let json = {
        "checked": true
      }
      fetch(`http://localhost:3000/api/bookings/${id}`, {
        method: 'PUT',
        body: JSON.stringify(json),
        headers: { 'Content-Type': 'application/json' }
      }).then(data => eventBus.$emit('refresh-data'));
    },
  }
}
</script>

<style lang="css" scoped>
.booking {
  display: inline-flex;
  margin: 2px 0;
  background-color: lightgrey;
  margin-right: 3px;
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
button.checkout {
  border: none;
  background-color: lightgrey;
  color: blue;
  font-size: large;
}
button.checkin {
  border: none;
  background-color: lightgrey;
  color: green;
  font-size: large;
}
button.checkout:hover {
  color: darkblue;
}
button.checkin:hover {
  color: darkgreen;
}
button.delete {
  border: none;
  background-color: lightgrey;
  color: red;
  font-size: large;
}
button.delete:hover {
  color: darkred;
}
</style>
