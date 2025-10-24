import type { Route } from "./+types/login";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "DominoByte | Login" },
        { name: "description", content: "Login" },
    ];
}

export default function LoginPage() {
    return <>
        <div className="flex items-center justify-center w-full h-screen">
            <div className="flex flex-col items-center justify-center gap-4 bg-db-950 px-10 py-7 rounded-4xl shadow-2xl">
                <h1 className="text-2xl font-semibold text-db-50 mb-3">Login</h1>
                <a href="https://localhost:8000/auth/login" className=" px-4 py-2 text-lg text-accent-100 bg-accent-500 hover:bg-accent-700 rounded-full duration-300 ease-in-out cursor-pointer">Login with Microsoft account</a>
            </div>
        </div>
    </>;
}
