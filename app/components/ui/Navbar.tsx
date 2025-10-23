export function Navbar() {
    return (
        // 1536px is '2xl' from TailwindCSS v4.1 
        <div className="flex flex-col items-center justify-center w-full h-full py-5 shadow-2xl/70 shadow-db-950 bg-db-950">
            <div className="flex flex-col items-start justify-center w-full custom-max-w">
                <p className="text-2xl font-bold text-db-100">DominoByte</p>
            </div>
        </div>
    );
}
