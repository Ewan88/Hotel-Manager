<template lang="html">
  <form id="bookings-form"
        v-on:submit.prevebt="addBooking"
        v-model="newBooking">
    <h3>Add Guest</h3>
    <div class="formContainer">
      <label for="name">Name:</label>
      <input type="text"
             v-model="newBooking.name"
             id="name" required />
      <label for="email">Email:</label>
      <input type="text"
             v-model="newBooking.email"
             id="email" required />
      <label for="check">Checked-in:</label>
      <input type="checkbox"
             v-model="newBooking.checked"
             id="check" />
      <input type="submit" value="Save" id="save"/>
    </div>
  </form>

</template>

<script>
import { eventBus } from '../main.js'
export default {
  name: "BooingsForm",
  data(){
    return {
      newBooking: {
        name: "",
        location: "",
        checked: false,
      }
    }
  },
  methods: {
    addBooking(event){
      event.preventDefault();

      fetch('http://localhost:3000/api/bookings', {
        method: 'POST',
        body: JSON.stringify(this.newBooking),
        headers: { 'Content-Type': 'application/json' }
      })
      .then(data => eventBus.$emit('refresh-data'));
    }
  }
}
</script>

<style lang="css" scoped>
.formContainer {
  display: inline-block;
}
input[type="submit"] {
  margin-left: 5px;
}
</style>
