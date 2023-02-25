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
                        nisi ut aliquip ex ea commodo consequat.</p>
                    <Container className='buttons-div'>
                        <Row>
                            <Col><Button variant='success'>Hire!</Button></Col>
                            <Col><Button onClick={flip} variant='warning'>Contact</Button></Col>
                        </Row>
                    </Container>
                </Card>
                <Card id='contact-card' >
                    <h1>Contact Name Sur.</h1>   
                    <CloseButton onClick={flipBack} />
                    <p><svg width="40 " viewBox="0 0 6 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.120996" y="0.695154" width="4.8" height="7.8" rx="0.9" stroke="black" stroke-width="0.2"/>
                    <path d="M1.271 0.595154H3.771V0.966582C3.771 1.07704 3.68145 1.16658 3.571 1.16658H1.471C1.36054 1.16658 1.271 1.07704 1.271 0.966582V0.595154Z" fill="black"/>
                    </svg> <span>(913) 273-4955</span></p>  
                    <p><svg width="40" viewBox="0 0 9 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.950208" y="0.766766" width="7.9" height="4.9" rx="0.05" stroke="black" stroke-width="0.1"/>
                    <path d="M8.84034 0.80711L4.94782 3.43372L1.0553 0.80711" stroke="black" stroke-width="0.1"/>
                    </svg> <span>email@gmail.com</span></p>   
                    <p><svg width='40' viewBox="0 0 9 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.152832" y="0.931732" width="8" height="5" rx="1" fill="#F0C45B"/>
                    <path d="M6.01336 3.3414C6.08953 3.37754 6.08953 3.48594 6.01336 3.52208L3.2703 4.82383C3.20395 4.85532 3.12743 4.80693 3.12743 4.73349L3.12743 2.12999C3.12743 2.05655 3.20395 2.00816 3.2703 2.03965L6.01336 3.3414Z" fill="#F1ECF2"/>
                    </svg> <span>youtube.com</span></p>
                    <p><svg width="40" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.20188" y="0.209204" width="7.7" height="7.7" rx="0.85" stroke="black" stroke-width="0.3"/>
                    <circle cx="4.05188" cy="4.0592" r="1.85" stroke="black" stroke-width="0.3"/>
                    <circle cx="6.55188" cy="1.5592" r="0.5" fill="#F0C45B"/>
                    </svg> <span>@instagram</span></p>
                    <p><svg width="40" viewBox="0 0 9 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.0518799" y="2.0592" width="8" height="8" rx="1" fill="#F0C45B"/>
                    <path d="M1.96033 4.0992C1.763 4.0992 1.59767 4.03787 1.46433 3.9152C1.33633 3.7872 1.27233 3.62987 1.27233 3.4432C1.27233 3.25654 1.33633 3.10187 1.46433 2.9792C1.59767 2.8512 1.763 2.7872 1.96033 2.7872C2.15767 2.7872 2.32033 2.8512 2.44833 2.9792C2.58167 3.10187 2.64833 3.25654 2.64833 3.4432C2.64833 3.62987 2.58167 3.7872 2.44833 3.9152C2.32033 4.03787 2.15767 4.0992 1.96033 4.0992ZM2.51233 4.6272V9.0592H1.39233V4.6272H2.51233ZM5.47489 4.5632C6.00289 4.5632 6.42956 4.7312 6.75489 5.0672C7.08023 5.39787 7.24289 5.86187 7.24289 6.4592V9.0592H6.12289V6.6112C6.12289 6.2592 6.03489 5.98987 5.85889 5.8032C5.68289 5.6112 5.44289 5.5152 5.13889 5.5152C4.82956 5.5152 4.58423 5.6112 4.40289 5.8032C4.22689 5.98987 4.13889 6.2592 4.13889 6.6112V9.0592H3.01889V4.6272H4.13889V5.1792C4.28823 4.9872 4.47756 4.83787 4.70689 4.7312C4.94156 4.6192 5.19756 4.5632 5.47489 4.5632Z" fill="#F1ECF2"/>
                    </svg> <span>linkedin/profile</span></p>
                    <p><svg width="40" viewBox="0 0 9 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.0518799" y="2.05927" width="8" height="8" rx="1" fill="#F0C45B"/>
                    <path d="M5.08449 5.90994H4.30849V9.42194H3.17249V5.90994H2.66849V4.98994H3.17249V4.76594C3.17249 4.22194 3.32715 3.82194 3.63649 3.56594C3.94582 3.30994 4.41249 3.18994 5.03649 3.20594V4.14994C4.76449 4.1446 4.57515 4.18994 4.46849 4.28594C4.36182 4.38194 4.30849 4.55527 4.30849 4.80594V4.98994H5.08449V5.90994Z" fill="#F1ECF2"/>
                    </svg> <span>Belen G</span></p>      
                </Card>
            </Container>
        </Container>
    )
}