import { Button, Card, Col, Row } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'
import Link from "next/link";

export default function TaskCard() {
    return (
        <Card className='taskCard'>
            <Row>
                <Col xs={8}>
                    <Link className='a' href='/petowner/selectedtask'><h1>Name Sur.</h1></Link>
                </Col>
                <Col xs={4}>
                    <Button variant='danger' >Cancel</Button>
                </Col>
            </Row>
            <p>Pending...</p>
        </Card>
    )
}