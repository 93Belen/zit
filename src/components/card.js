import pic from '../../imgs/pic.jpg';
import { Card, Button, Row, Col, Container, CloseButton } from "react-bootstrap";
import Image from 'next/image';
import { empty, full } from './stars';
import './card.css';




export const CardComponent = () => {
    const flip = () => {
        document.getElementById('the-card').style.transform = 'rotateY(180deg)';
    }
    const flipBack = () => {
        document.getElementById('the-card').style.transform = '';
    }


    return (
        <Container id='container'>
            <Container id='the-card'>
                <Card id='profile-card' >
                    <h1>Name Sur.</h1>
                    <p className='age'>29y/old</p>
                    <Image className='image' src={pic} alt='profile pic' />
                    <div className='stars'>{full}{full}{full}{full}{empty}</div>
                    <p className='text'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                        nisi ut aliquip ex ea commodo consequat. llum dolore eu fugiat nulla pariatur. 
                        Excepteur sint occaecat cupidatat non proident, 
                        sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <Container className='buttons-div'>
                        <Row>
                            <Col><Button variant='success'>Hire!</Button></Col>
                            <Col><Button onClick={flip} variant='warning'>Contact</Button></Col>
                        </Row>
                    </Container>
                </Card>
                <Card id='contact-card' >
                    <h1>Contact</h1>   
                    <CloseButton onClick={flipBack} />          
                </Card>
            </Container>
        </Container>
    )
}