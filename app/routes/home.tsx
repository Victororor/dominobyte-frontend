import type { Route } from "./+types/home";
import { ContentSection } from "~/components/ui/ContentSection";
import { Navbar } from "~/components/ui/Navbar";
import { HomeCard } from "~/components/home/HomeCard";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "DominoByte | Home" },
        { name: "description", content: "Home" },
    ];
}

export default function HomePage() {
    return (
        <>
            <Navbar></Navbar>

            <h1 className="text-2xl font-semibold mt-14 text-db-50 mb-3">Home</h1>

            <ContentSection className="grid grid-cols-1 gap-3 justify-items-center items-stretch sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                <HomeCard imgURL="home_cards/assets_inventory.jpg" title="Asset inventory" description="List of devices per each user" href="" />
                <HomeCard imgURL="home_cards/duty_register.jpg" title="Duty register" description="Extra hours, OnCalls" href="" />
                <HomeCard imgURL="home_cards/hr_logon.jpg" title="Employees" description="List of all employees" href="" />
                <HomeCard imgURL="home_cards/time_sheet.jpg" title="Time sheet" description="Roaster - see the current timesheet by department" href="" />
                <HomeCard imgURL="home_cards/day_off_request.jpg" title="Day off request" description="PTO, day off, donation and all type day off requests" href="" />
                <HomeCard imgURL="home_cards/status_per_year.jpg" title="Status per year" description="List the status per year" href="" />
                <HomeCard imgURL="home_cards/status_per_month.jpg" title="Status per month" description="Status of PTO, days off..." href="" />
                <HomeCard imgURL="home_cards/pto_planner.jpg" title="PTO planner" description="Plan the PTO for the entire (next) year" href="" />
                <HomeCard imgURL="home_cards/evaluation_form.jpg" title="Evaluation form" description="Evaluate how your team performed in the last 6 months" href="" />
                <HomeCard imgURL="home_cards/activity_report.jpg" title="Activity report" description="Report for daily activities" href="" />
            </ContentSection>
        </>
    );
}
