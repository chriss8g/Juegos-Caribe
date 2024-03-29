'use client'

import FacultyCard from "../../Components/FacultyCard/FacultyCard";

export default function FacultyCardList()
{
    const Facultades =[
        {
            "id": 1,
            "name": "Artes y Letras",
            "image": "/artes_letras.svg"
        },
        {
            "id": 2,
            "name": "Biología",
            "image": "/biologia.svg"
        },
        {
            "id": 3,
            "name": "Contabilidad y Finanzas",
            "image": "/contabilidad_finanzas.svg"
        },
        {
            "id": 4,
            "name": "Derecho",
            "image": "/derecho.svg"
        },
        {
            "id": 5,
            "name": "Derecho",
            "image": "/derecho.svg"
        },
        {
            "id": 6,
            "name": "Derecho",
            "image": "/derecho.svg"
        },
        {
            "id": 7,
            "name": "Derecho",
            "image": "/derecho.svg"
        },
        {
            "id": 8,
            "name": "Derecho",
            "image": "/derecho.svg"
        },
        {
            "id": 9,
            "name": "Derecho",
            "image": "/derecho.svg"
        },
        {
            "id": 10,
            "name": "Derecho",
            "image": "/derecho.svg"
        },
        {
            "id": 11,
            "name": "Derecho",
            "image": "/derecho.svg"
        },
    ];

    return (
            <div className="faculties-card-list pb-4">
                {Facultades.map((faculty) =>
                    (
                        <FacultyCard
                            key={faculty.id}
                            faculty={faculty}
                        />
                    ))}
            </div>

    )
}