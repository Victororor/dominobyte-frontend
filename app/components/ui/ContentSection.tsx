import React from "react";

interface ContentSectionProps {
    children?: React.ReactNode;
    className?: string;
    containerImgURL?: string;
}

export function ContentSection({ children, className, containerImgURL }: ContentSectionProps) {
    // External contasinere bg img style
    const style = containerImgURL ? {
        backgroundImage: `url(${containerImgURL})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
    } : undefined;

    return (
        // 1536px is '2xl' from TailwindCSS v4.1 
        <div 
            className={`flex flex-col items-center justify-center w-full ${containerImgURL ? "bg-cover bg-center bg-no-repeat" : ""}`}
            style={style}
            >
            <div className={`flex flex-col items-center justify-center w-full max-w-[1536px] ${className ?? ""}`}>
                {children}
            </div>
        </div>
    );
}
