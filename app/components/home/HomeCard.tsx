import { Link } from "react-router";

interface HomeCardProps {
    imgURL: string;
    title: string;
    description: string;
    href: string;
}

export function HomeCard({imgURL, title, description, href}: HomeCardProps) {
    return (
        <Link 
            to={href}
            className="flex flex-col items-center h-auto max-w-[300px] px-5 py-10 rounded-4xl bg-db-950 hover:scale-105 cursor-pointer ease-in-out duration-300"
        >
            <img 
                src={imgURL} 
                alt="" 
                className="rounded-full w-1/2 mb-6" 
            />
            <h1 className="text-center text-xl font-semibold text-db-100 mb-1">{title}</h1>
            <p className="text-center text-md text-db-300">{description}</p>
        </Link>
    );
}
