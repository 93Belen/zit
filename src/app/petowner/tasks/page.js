"use client"
import { logo } from "components/components/logo";
import { ImArrowLeft  } from 'react-icons/im';
import Link from "next/link";
import TaskCard from "components/components/taskcard";


export default function PetOwnerTasks() {
    return (
        <>
         <header>
        {logo}
        <Link className='a' href='/petowner'><ImArrowLeft/></Link>
        </header>
        <main className='main'>
            <TaskCard />     
        </main>
        </>
    )
}