exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("projects")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("projects").insert([
        {
          name: "adipiscing at in tellus",
          description:
            "Nunc scelerisque viverra mauris in aliquam sem fringilla ut morbi. Tortor vitae purus faucibus ornare suspendisse sed nisi lacus sed. Dolor sit amet consectetur adipiscing elit duis tristique sollicitudin."
        },
        {
          name: "nulla malesuada pellentesque elit",
          description:
            "Et netus et malesuada fames ac turpis. Malesuada proin libero nunc consequat interdum varius. Vitae suscipit tellus mauris a diam maecenas sed enim."
        },
        {
          name: "consectetur lorem donec massa",
          description:
            "Scelerisque viverra mauris in aliquam. Mauris sit amet massa vitae tortor condimentum lacinia quis vel. Sed ullamcorper morbi tincidunt ornare massa eget egestas purus viverra."
        },
      ]);
    });
};
