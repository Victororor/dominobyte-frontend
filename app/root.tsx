import {
    isRouteErrorResponse, // it verifies if an error is from HTML or JS
    Links, // 'dynamic' links
    Meta, // 'dynamic' meta tags
    Outlet, // render point for children routes
    Scripts, // 'dynamic' scripts
    ScrollRestoration,
} from "react-router";

import type { Route } from "./+types/root"; // some TS things
import "./app.css";

// Layout just builds the HTML document
export function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <Meta /> {/* All 'meta' exports on all routes will render here */}
                <Links /> {/* All 'link' exports on all routes will rendere here */}
            </head>
            <body className="flex flex-col items-center justify-center w-full min-h-screen">
                {/* children will be the root Component, ErrorBoundary, or HydrateFallback */}
                {children}
                <ScrollRestoration />
                <Scripts />
            </body>
        </html>
    );
}

export default function App() {
    return <Outlet />;
}

// Errors
export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
    let message = "Oops!";
    let details = "An unexpected error occurred.";
    let stack: string | undefined;

    if (isRouteErrorResponse(error)) {
        message = error.status === 404 ? "404" : "Error";
        details =
            error.status === 404
                ? "The requested page could not be found."
                : error.statusText || details;
    } else if (import.meta.env.DEV && error && error instanceof Error) {
        details = error.message;
        stack = error.stack;
    }

    return (
        <main className="pt-16 p-4 container mx-auto">
            <h1>{message}</h1>
            <p>{details}</p>
            {stack && (
                <pre className="w-full p-4 overflow-x-auto">
                    <code>{stack}</code>
                </pre>
            )}
        </main>
    );
}
