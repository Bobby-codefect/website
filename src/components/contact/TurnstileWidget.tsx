"use client";

import Script from "next/script";
import { useCallback, useEffect, useId } from "react";

type TurnstileWidgetProps = {
    onSuccess: (token: string) => void;
    onExpire: () => void;
};

declare global {
    interface Window {
        turnstile?: {
            render: (
                element: string | HTMLElement,
                options: {
                    sitekey: string;
                    callback: (token: string) => void;
                    "expired-callback"?: () => void;
                    "error-callback"?: () => void;
                    size?: "normal" | "compact" | "flexible";
                    theme?: "auto" | "light" | "dark";
                }
            ) => void;
        };
    }
}

export default function TurnstileWidget({
                                            onSuccess,
                                            onExpire,
                                        }: TurnstileWidgetProps) {
    const widgetId = useId().replace(/:/g, "");

    const renderWidget = useCallback(() => {
        if (!window.turnstile) {
            return;
        }

        const element = document.getElementById(widgetId);

        if (!element || element.childElementCount > 0) {
            return;
        }

        const isMobile = window.innerWidth < 640;

        window.turnstile.render(element, {
            sitekey: process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || "",
            theme: "light",
            size: isMobile ? "compact" : "normal",
            callback: (token: string) => {
                onSuccess(token);
            },
            "expired-callback": () => {
                onExpire();
            },
            "error-callback": () => {
                onExpire();
            },
        });
    }, [widgetId, onSuccess, onExpire]);

    useEffect(() => {
        renderWidget();
    }, [renderWidget]);

    return (
        <>
            <Script
                src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
                strategy="afterInteractive"
                onReady={renderWidget}
            />

            <div id={widgetId} className="max-w-full" />
        </>
    );
}