exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("actions")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("actions").insert([
        {
          name: "erat nam at",
          description: "Leo duis ut diam quam.",
          notes: "Consectetur adipiscing elit ut aliquam purus.",
          project_id: 1
        },
        {
          name: "ultrices dui sapien",
          description:
            "Lobortis scelerisque fermentum dui faucibus. Lorem ipsum dolor sit amet consectetur adipiscing.",
          notes: "Iaculis at erat pellentesque adipiscing.",
          project_id: 2
        },
        {
          name: "quam nulla porttitor",
          description:
            "Commodo nulla facilisi nullam vehicula ipsum a. Mattis molestie a iaculis at erat pellentesque.",
          notes: "Pretium lectus quam id leo in vitae turpis massa sed.",
          project_id: 1
        },
        {
          name: "consequat semper viverra",
          description:
            "Eu sem integer vitae justo eget magna fermentum. Scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique.",
          notes: "Vel fringilla est ullamcorper eget.",
          project_id: 3
        },
        {
          name: "sagittis purus sit",
          description:
            "Ut faucibus pulvinar elementum integer enim. Cursus risus at ultrices mi tempus imperdiet nulla malesuada.",
          notes: "Amet consectetur adipiscing elit pellentesque habitant.",
          project_id: 3
        },
        {
          name: "quis enim lobortis",
          description:
            "Et sollicitudin ac orci phasellus egestas tellus rutrum tellus. Cras adipiscing enim eu turpis.",
          notes: "Felis eget nunc lobortis mattis.",
          project_id: 2
        },
        {
          name: "integer quis auctor",
          description:
            "Pellentesque elit ullamcorper dignissim cras tincidunt lobortis. Lacus sed viverra tellus in hac habitasse platea dictumst.",
          notes:
            "Pellentesque eu tincidunt tortor aliquam nulla facilisi cras.",
          project_id: 2
        }
      ]);
    });
};
