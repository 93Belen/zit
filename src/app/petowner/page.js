"use client"
import { CardComponent } from 'components/components/card'
import 'bootstrap/dist/css/bootstrap.min.css'
import Link from 'next/link'

export default function PetOwner() {

  return (
    <>
    <header>
    <Link className='a' href='/petowner/tasks'>Tasks</Link>
    <Link className='a' href='/'>Log-out</Link>
      </header>
    <main className='main'>     
    <CardComponent />
    </main>
    </>
  )
}
