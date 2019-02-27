use bookings;
db.dropDatabase();

db.bookings.insertMany([
  {
    name: "Bob",
    email: "bobrocket@gmail.com",
    checked: true,
  },
  {
    name: "Wendy",
    email: "wendyroad@hotmail.co.uk",
    checked: false,
  },
  {
    name: "Kamal",
    email: "princekamal@imaginationland.org",
    checked: true,
  }
]);
