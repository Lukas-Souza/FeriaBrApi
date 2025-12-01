// Update with your config settings.
/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  production: {
    client: 'mysql2',
    connection: {
      host: 'shortline.proxy.rlwy.net',
      port: 40076,
      database: 'railway',
      user: 'root',
      password: 'FJZNYQOsnLYSReUHWXzxZNvJUOwUxGuf',
    },
  },
};
