exports.up = (knex) =>
  knex.schema.createTable("users", (table) => {
    table.increments("id");
    table.text("name").notNullable();
    table.text("email").notNullable();
    table.text("password").notNullable();

    // enum basicamente é uma coluna que só pode ter valores pré definidos , colocamos o nome da coluna de role e nessa caso definimoso como valores o costumer e admin
    table
      .enum("role", ["admin", "costumer"], {
        useNative: true, // informa que é pra usar o driver nativo do banco de dados
        enumName: "roles", // nome do enum
      })
      .notNullable() // nao pode ser nullo
      .default("costumer"); // como padrao o usuário é costumer

    table.timestamp("created_at").default(knex.fn.now());
    table.timestamp("updated_at").default(knex.fn.now());
  });

exports.down = (knex) => knex.schema.dropTable("users");
