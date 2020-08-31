exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("peoples")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("peoples").insert([
        {
          first_name: "Hewet",
          last_name: "Mattiazzi",
          gender: "Male",
          city: "Farsta",
        },
        {
          first_name: "Elijah",
          last_name: "Guynemer",
          gender: "Male",
          city: "Libertad",
        },
        {
          first_name: "Manfred",
          last_name: "Benko",
          gender: "Male",
          city: "George Hill",
        },
      ]);
    });
};
