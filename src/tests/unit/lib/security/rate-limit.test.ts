import { beforeEach, describe, expect, it } from "vitest";
import { checkRateLimit, resetRateLimitStore } from "@/lib/security/rate-limit";

describe("checkRateLimit", () => {
    beforeEach(() => {
        resetRateLimitStore();
    });

    it("bloque une IP après dépassement du nombre maximal de requêtes autorisées", () => {
        const ip = "192.168.1.10";

        // Les 5 premières requêtes doivent être autorisées
        expect(checkRateLimit(ip).allowed).toBe(true);
        expect(checkRateLimit(ip).allowed).toBe(true);
        expect(checkRateLimit(ip).allowed).toBe(true);
        expect(checkRateLimit(ip).allowed).toBe(true);
        expect(checkRateLimit(ip).allowed).toBe(true);

        // La 6e requête doit être bloquée
        const result = checkRateLimit(ip);

        expect(result.allowed).toBe(false);
        expect(result.remaining).toBe(0);
        expect(result.resetAt).toBeTypeOf("number");
    });
});