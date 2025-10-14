const axios = require('axios');

const client = axios.create({
  timeout: 7000,
  headers: { 'User-Agent': 'telegram-quiz-bot/1.0' },
});

// simple retry interceptor
client.interceptors.response.use(
  (res) => res,
  async (error) => {
    const config = error.config || {};
    if (!config || config.__retryCount >= 2) return Promise.reject(error);
    config.__retryCount = config.__retryCount ? config.__retryCount + 1 : 1;
    const backoff = 500 * config.__retryCount;
    await new Promise((r) => setTimeout(r, backoff));
    return client(config);
  }
);

module.exports = client;
