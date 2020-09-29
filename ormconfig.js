const process = require('process');

// const username = process.env.DB_USERNAME || 'postgres';
// const password = process.env.DB_PASSWORD || 'postgres';
// const database = process.env.DB_DATABASE_NAME || 'postgres';
// const port = process.env.DB_PORT || 5342;

module.exports = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'postgres',
  synchronize: true,
  dropSchema: false,
  logging: true,
  logger: 'advanced-console',
  entities: [
    __dirname + '/src/**/*.entity.ts',
    __dirname + '/dist/**/*.entity.js',
  ],
  migrations: ['migrations/**/*.ts'],
  subscribers: ['subscriber/**/*.ts', 'dist/subscriber/**/.js'],
  cli: {
    entitiesDir: 'src',
    migrationsDir: 'migrations',
    subscribersDir: 'subscriber',
  },
};
