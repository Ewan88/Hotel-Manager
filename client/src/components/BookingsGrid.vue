<template lang="html">
  <div id="bookingsGrid">
    <h3>Guests checked in:</h3>
    <div class="booking" v-for="booking in bookings">
      <section v-if="booking.checked">
        <p>{{ booking.name }}</p>
        <p>{{ booking.email }}</p>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "BookingsGrid",
  props: ["bookings"],
}
</script>

<style lang="css" scoped>
  section {
    border: 2px solid black;
    margin: 2px 0;
  }
  p {
    padding-left: 2px;
  }
</style>
