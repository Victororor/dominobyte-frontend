import type { Route } from "./+types/home";
import { useEffect, useState } from "react";
import { ContentSection } from "~/components/ui/ContentSection";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "DominoByte | Home" },
        { name: "description", content: "Home" },
    ];
}

type Me = { email?: string;[k: string]: unknown };

export default function HomePage() {
    const [me, setMe] = useState<Me | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetch("https://localhost:8000/auth/me", {
            method: "GET",
            credentials: "include",
            headers: { Accept: "application/json" },
        })
            .then(async (res) => {
                if (!res.ok) throw new Error(`HTTP ${res.status} ${res.statusText}`);
                return (await res.json()) as Me;
            })
            .then((data) => {
                setMe(data);
                if (data?.email) {
                    try {
                        localStorage.setItem("email", data.email);
                    } catch { /* ignore */ }
                }
            })
            .catch((e) => setError(e instanceof Error ? e.message : String(e)));
    }, []);

    return (
        <>
            <h1 className="text-white">HOME</h1>

            <ContentSection>
                <h1>Titolo 1</h1>
                <p>Contenuto 1</p>
            </ContentSection>

            {/* {error ? (
                <p className="text-danger-500">Error: {error}</p>
            ) : (
                <pre>{me ? JSON.stringify(me, null, 2) : "Loading..."}</pre>
            )} */}
        </>
    );
}
