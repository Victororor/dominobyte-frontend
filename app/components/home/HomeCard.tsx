interface HomeCardProps {
    imgURL?: string;
    title?: string;
    description?: string;
}

export function HomeCard({imgURL, title, description}: HomeCardProps) {
    return (
        <div className="flex flex-col items-center justify-between h-auto w-full px-5 py-10 rounded-4xl bg-db-950">
            <img 
                src={imgURL} 
                alt="" 
                className="rounded-full w-1/2 mb-6" 
            />
            <h1 className="text-center text-db-100 mb-1">{title}</h1>
            <p className="text-center text-db-300">{description}</p>
        </div>
    );
}
