export function Welcome() {
    return (
        <main className="w-full h-screen flex items-center justify-center">
            <a href={resources[0].login_link} className="bg-yellow-300 hover:bg-yellow-500 text-black py-2 px-4 rounded cursor-pointer duration-300 ease-in-out">Login</a>
        </main>
    );
}

const resources = [
    {
        login_link: "http://127.0.0.1:8000/auth/login",
    },
];
