import React from "react";

interface ContentSectionProps {
    children?: React.ReactNode;
    className?: string;
}

export function ContentSection({ children, className }: ContentSectionProps) {
    return (
        // 1536px is '2xl' from TailwindCSS v4.1 
        <div className={`flex flex-col items-center justify-center w-full h-full`}>
            <div className={`flex flex-col items-center justify-center w-full custom-max-w ${className ?? ""}`}>
                {children}
            </div>
        </div>
    );
}
