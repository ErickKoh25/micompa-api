export default () => ({
  port: process.env.API_PORT,
  database: {
    host: process.env.DB_MONGO_URL,
    port: process.env.DB_MONGO_PORT,
  },
});
