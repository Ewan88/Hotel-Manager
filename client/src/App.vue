<template lang="html">
  <div id="app">
    <h1>Hilary Clinton Hotels</h1>
  </div>
</template>

<script>
import { eventBus } from './main';
export default {
  name: 'app',
  data () {
    return {
      bookings: []
    }
  },
  components: {

  },
  mounted(){
    this.fetchData();

    eventBus.$on('refresh-data', this.fetchData);
  },
  methods: {
    fetchData(){
      fetch("localhost:3000/api/bookings")
      .then(res => res.json())
      .then(bookings => this.bookings = bookings);
    }
  }
}
</script>

<style lang="css" scoped>
</style>
