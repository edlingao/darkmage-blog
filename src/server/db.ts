'use server';

// db.js
import postgres from 'postgres';

const sql = postgres(`${process.env.DATABASE_URL || ''}`, {
  idle_timeout: 20,
  max_lifetime: 60 * 30
}); // will use psql environment variables

export default sql;
