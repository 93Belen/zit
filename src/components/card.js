import pic from '../../imgs/pic.jpg';
import { Card } from "react-bootstrap";
import Image from 'next/image';
import { empty, full } from './stars';


export const CardComponent = () => {
    return (
        <Card>
            <h1>Name Sur.</h1>
            <Image className='image' src={pic} alt='profile pic' />
            <div>{full}{full}{full}{full}{empty}</div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, 
                sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </Card>
    )
}