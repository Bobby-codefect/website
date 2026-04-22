type RateLimitEntry = {
    count: number;
    resetAt: number;
};

const RATE_LIMIT_MAX_REQUESTS = 5;          // 5 messages max autorisés
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;    // fenêtre de limitation de 10 minutes

const rateLimitStore = new Map<string, RateLimitEntry>();

/**
 * Récupère l'adresse IP du client à partir des en-têtes HTTP.
 */
export function getClientIp(request: Request): string {
    const forwardedFor = request.headers.get("x-forwarded-for");

    if (forwardedFor) {
        return forwardedFor.split(",")[0].trim();
    }

    return "ip-inconnue";
}

/**
 * Vérifie si une adresse IP a dépassé le nombre de requêtes autorisées.
 */
export function checkRateLimit(ip: string): {
    allowed: boolean;
    remaining: number;
    resetAt: number;
} {
    const now = Date.now();
    const entry = rateLimitStore.get(ip);

    if (!entry || now > entry.resetAt) {
        const resetAt = now + RATE_LIMIT_WINDOW_MS;

        rateLimitStore.set(ip, {
            count: 1,
            resetAt,
        });

        return {
            allowed: true,
            remaining: RATE_LIMIT_MAX_REQUESTS - 1,
            resetAt,
        };
    }

    if (entry.count >= RATE_LIMIT_MAX_REQUESTS) {
        return {
            allowed: false,
            remaining: 0,
            resetAt: entry.resetAt,
        };
    }

    entry.count += 1;
    rateLimitStore.set(ip, entry);

    return {
        allowed: true,
        remaining: RATE_LIMIT_MAX_REQUESTS - entry.count,
        resetAt: entry.resetAt,
    };
}

/**
 * Réinitialise le stockage en mémoire.
 * Cette fonction est utile uniquement pour les tests.
 */
export function resetRateLimitStore(): void {
    rateLimitStore.clear();
}