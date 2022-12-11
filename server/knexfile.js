// Update with your config settings.
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

console.log(process.env.PG_CONNECTION_STRING);
/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */

const HOST = process.env.DATABASE_HOST || '127.0.0.1';
const USER = process.env.POSTGRES_USER || 'postgres';
const PASSWORD = process.env.POSTGRES_PASSWORD || 'postgrespw';
const DATABASE = process.env.POSTGRES_DB || 'z_prefix';
const PORT = process.env.PORT || 49157;

module.exports = {

  development: {
    client: 'pg',
    connection: {
      host: HOST,
      user: USER,
      password: PASSWORD,
      port: PORT,
      database: DATABASE
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
