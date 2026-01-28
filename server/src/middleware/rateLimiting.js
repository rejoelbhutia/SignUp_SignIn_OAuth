import rateLimit from "express-rate-limit";
import RedisStore from "rate-limit-redis";
import Redis from "ioredis";



const redis = new Redis({
    host: "redis_db", // Docker Compose service name
    port: 6379
});

redis.on('error', (err) => { //listens errors so app does not crash
    console.error('Redis connection error:', err);
});

redis.on('connect', () => {
    console.log('Connected to Redis successfully');
});



// Helper to create store with a custom prefix
const createStore = (prefix) => new RedisStore({
    sendCommand: (...args) => redis.call(...args),
    prefix: prefix // IMPORTANT: Unique prefix for each limiter
});

// 1. GLOBAL LIMITER (Loose)
// Protects the server from being overwhelmed
export const globalLimiter = rateLimit({
    store: createStore('rl_global:'), // Keys look like: rl_global:127.0.0.1
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 1000, // 1000 requests allowed
    message: "Too many requests, please slow down.",
    standardHeaders: true,
    legacyHeaders: false,
});

// 2. AUTH LIMITER (Strict)
// Protects /login and /register from brute force
export const authLimiter = rateLimit({
    store: createStore('rl_auth:'), // Keys look like: rl_auth:127.0.0.1
    windowMs: 60 * 60 * 1000, // 1 hour
    max: 20, // Only 5 login attempts per hour
    message: "Too many login attempts. Please try again in an hour.",
    standardHeaders: true,
    legacyHeaders: false,
});


