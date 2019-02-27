<template lang="html">
  <div id="app">
    <h1>Hilary Clinton Hotels</h1>
    <bookings-grid :bookings="bookings" />
  </div>
</template>

<script>
import BookingsGrid from './components/BookingsGrid';
import { eventBus } from './main';
export default {
  name: 'app',
  data () {
    return {
      bookings: []
    }
  },
  components: {
    BookingsGrid,
  },
  mounted(){
    this.fetchData();

    eventBus.$on('refresh-data', this.fetchData);
  },
  methods: {
    fetchData(){
      fetch("http://localhost:3000/api/bookings")
      .then(res => res.json())
      .then(bookings => this.bookings = bookings);
    }
  }
}
</script>

<style lang="css" scoped>
</style>
