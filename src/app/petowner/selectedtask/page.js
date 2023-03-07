import { logo } from "components/components/logo"
import Link from "next/link"
import { ImArrowLeft  } from 'react-icons/im';

export default function SelectedTask() {
    return (
        <>
        <header>
            {logo}
            <Link className='a' href='/petowner/tasks'><ImArrowLeft/></Link>
      </header>
        <main className='main'>     
            <p>Selected task</p>
        </main>
        </>
    )
}