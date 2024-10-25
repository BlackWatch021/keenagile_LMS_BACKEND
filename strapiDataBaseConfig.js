// strapi-api/config/database.js
module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("DATABASE_HOST", "localhost"),
      port: env.int("DATABASE_PORT", 5432),
      database: env("DATABASE_NAME", "LMS"),
      user: env("DATABASE_USERNAME", "postgres"),
      password: env("DATABASE_PASSWORD", "postgres123"),
      schema: env("DATABASE_SCHEMA", "public"), // Not required
      ssl: false,
    },
    debug: false,
  },
});

//     DB_NAME=refurbished
// DB_USER=postgres
// DB_PASSWORD=postgres123
// DB_HOST=localhost
// SECRET_KEY=somethingsupersecre098765

// PORT=2121
