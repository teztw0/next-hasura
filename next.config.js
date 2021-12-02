module.exports = {
  reactStrictMode: true,
  env: {
    HASURA_HOST: process.env.HASURA_HOST,
    HASURA_API_ORIGIN: process.env.HASURA_API_ORIGIN,
    TAILS_URL: process.env.TAILS_URL
  }
}
