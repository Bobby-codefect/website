"use client";

import Script from "next/script";
import { useId } from "react";

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

    function renderWidget() {
        if (!window.turnstile) {
            return;
        }

        const element = document.getElementById(widgetId);

        if (!element || element.childElementCount > 0) {
            return;
        }

        window.turnstile.render(element, {
            sitekey: process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || "",
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
    }

    return (
        <>
            <Script
                src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
                strategy="afterInteractive"
                onLoad={renderWidget}
            />

            <div id={widgetId} />
        </>
    );
}