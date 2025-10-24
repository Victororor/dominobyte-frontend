import type { Route } from "./+types/employees";
import { useState, useEffect } from "react";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "DominoByte | Employees" },
        { name: "description", content: "Employees" },
    ];
}

type EmployeeProps = {
    marca: string;
    email: string;
    is_active: boolean;
    budget: number;
    subdepartment: string;
    emp_role: number;
    first_name: string;
    last_name: string;
    hire_date: Date;
    team: string;
    department: string;
    pto_this_year: number;
}

export default function EmployeesPage() {
    const [data, setData] = useState<EmployeeProps[]>([]);

    // when the page loaded call payload function
    useEffect(() => {
        payload();
    }, []);

    // fetch data
    const payload = async () => {
        const responce = await fetch('https://localhost:8000/employees/view_employees', {method: "GET"});
        setData(await responce.json());
    }

    return(
        <>
            {data.map((info) => {
                return(
                    <p key={info.marca}>{info.email}</p>
                )
            })}
        </>
    );
}
