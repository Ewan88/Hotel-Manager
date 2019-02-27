<template lang="html">
  <form id="bookings-form">
    <h3>Add Guest</h3>
    <div class="formContainer">
      <label for="name">
        Name:
      </label>
      <input type="text">
      <label for="email">
        Email:
      </label>
      <input type="text">
      <input type="submit" value="Save"/>
    </div>
  </form>

</template>

<script>
export default {
  name: "BooingsForm"
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
