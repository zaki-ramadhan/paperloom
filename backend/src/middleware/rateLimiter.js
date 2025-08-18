import ratelimit from "../config/upstash.js";

const rateLimiter = async (req, res, next) => {
    try {
        //? Ideally use a unique user like "userId" identifier for rate limiting.
        // Since this app has no authentication, we fallback to a simple static key.
        const { success } = await ratelimit.limit("my-rate-limit")

        // if failed
        if (!success) return res.status(429).json({ message: "Too many request, please try again later" })

        next();

    } catch (error) {
        console.error("Rate Limit Error", error);
        next(error);
    }
}

export default rateLimiter;