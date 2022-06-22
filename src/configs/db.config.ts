import knex from 'knex';

const { HOST, PPORT, DATABASE, USER, PASSWORD = '' } = process.env;

export const pgKnex = knex({
  client: 'pg',
  connection: process.env.DATABASE_URL
    ? {
        connectionString: process.env.DATABASE_URL,
        ssl: { rejectUnauthorized: false },
      }
    : {
        host: HOST,
        port: Number(PPORT),
        database: DATABASE,
        user: USER,
        password: PASSWORD,
      },
});
