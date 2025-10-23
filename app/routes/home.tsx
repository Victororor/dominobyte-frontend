import type { Route } from "./+types/home";
import { useEffect, useState } from "react";
import { ContentSection } from "~/components/ui/ContentSection";
import { Navbar } from "~/components/ui/Navbar";
import { HomeCard } from "~/components/home/HomeCard";

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
            <Navbar></Navbar>

            <h1 className="text-2xl font-semibold mt-14 text-db-50 mb-3">HOME</h1>

            <ContentSection className="grid grid-cols-1 gap-5 2xl:grid-cols-5 2xl:gap-5">
                <HomeCard imgURL="home_cards/assets_inventory.jpg" title="Asset inventory" description="List of devices per each user"></HomeCard>
                <HomeCard imgURL="home_cards/duty_register.jpg" title="Duty register" description="Extra hours, OnCalls"></HomeCard>
                <HomeCard imgURL="home_cards/hr_logon.jpg" title="HR logon" description="Used by HR to modify the Employee list"></HomeCard>
                <HomeCard imgURL="home_cards/time_sheet.jpg" title="Time sheet" description="Roaster - see the current timesheet by department"></HomeCard>
                <HomeCard imgURL="home_cards/day_off_request.jpg" title="Day off request" description="PTO, day off, donation and all type day off requests"></HomeCard>
                <HomeCard imgURL="home_cards/status_per_year.jpg" title="Status per year" description="List the status per year"></HomeCard>
                <HomeCard imgURL="home_cards/status_per_month.jpg" title="Status per month" description="Status of PTO, days off..."></HomeCard>
                <HomeCard imgURL="home_cards/pto_planner.jpg" title="PTO planner" description="Plan the PTO for the entire (next) year"></HomeCard>
                <HomeCard imgURL="home_cards/evaluation_form.jpg" title="Evaluation form" description="Evaluate how your team performed in the last 6 months"></HomeCard>
                <HomeCard imgURL="home_cards/activity_report.jpg" title="Activity report" description="Report for daily activities"></HomeCard>
            </ContentSection>

            {/* {error ? (
                <p className="text-danger-500">Error: {error}</p>
            ) : (
                <pre>{me ? JSON.stringify(me, null, 2) : "Loading..."}</pre>
            )} */}
        </>
    );
}
