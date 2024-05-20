const cache = {};
// const CACHE_TIMEOUT = 1000 * 60 * 60 * 24; // 24 hours
const CACHE_TIMEOUT = 1000 * 60 * 60; // 1 hour

export const getCache = (key) => {
    if (cache[key] && cache[key].expires > Date.now()) {
        // console.log('Cache hit for key:', key);
        // console.log('Cache data:', cache[key].data);
        return cache[key].data;
    }
    return null;
};

export const setCache = (key, data) => {
    cache[key] = {
        data,
        expires: Date.now() + CACHE_TIMEOUT,
    };
};