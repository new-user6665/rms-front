"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

const page = () => {
    const [chestNo, setChestNo] = React.useState("")
    const router = useRouter()
    return (
        <div className="p-3 h-52 w-96 fixed top-1/2 -translate-y-1/2 bg-accent rounded-xl left-1/2 shadow-lg shadow-black -translate-x-1/2 flex flex-col items-center gap-5">
            <img
                src="https://www.realia.live/_next/image?url=%2Frealia-txt.png&w=1920&q=75"
                alt=""
                className="h-12"
            />
            <input
                onChange={
                    (e) => {
                        setChestNo(e.target.value)
                    }
                }
                type="text"
                className="bg-white border rounded-full h-12 w-1/2 text-center uppercase font-bold placeholder:font-light"
                placeholder="Chest No."
            />
            <button onClick={() => {
                router.push(`/candidate/${chestNo}`)
            }} className="bg-secondary hover:bg-primary rounded-full h-8 w-1/4 text-lg text-white font-semibold transition-all duration-500">
                SUBMIT
            </button>
        </div>

    )
}

export default page