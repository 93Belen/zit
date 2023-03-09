"use client"
import { logo } from "components/components/logo"
import Link from "next/link"
import { Button, Col, Container, FloatingLabel, Form, FormControl, FormGroup, Row } from "react-bootstrap";
import { ImArrowLeft  } from 'react-icons/im';
import 'bootstrap/dist/css/bootstrap.min.css'

export default function TaskForm() {
    return (
        <>
        <header>
            {logo}
            <Link className='a' href='/petowner'><ImArrowLeft/></Link>
      </header>
        <main className='main'>     
            <Form>
                <FormGroup className='m-4'>
                    <FloatingLabel label='Name'>
                        <FormControl placeholder='Name' type='text' />
                    </FloatingLabel>
                </FormGroup>
                <FormGroup className='m-4'>
                    <FloatingLabel label='Date Start'>
                        <FormControl placeholder='Date' type='date' />
                    </FloatingLabel>
                </FormGroup>
                <FormGroup className='m-4'>
                    <FloatingLabel label='Days'>
                        <FormControl placeholder='Days' type='number' />
                    </FloatingLabel>
                </FormGroup>
                <FormGroup className='m-4'>
                    <Row>
                        <Col xs={10}>
                            <FloatingLabel label='Add Task'>
                                <FormControl placeholder='Task' type='text' />
                            </FloatingLabel>
                        </Col>
                        <Col xs={2}>
                            <Button>+</Button>
                        </Col>
                    </Row>
                </FormGroup>
            </Form>
            <Container>
                <Row>
                    <Col xs={8}><p>Some task</p></Col>
                    <Col xs={4}><Button variant='outline-danger'>Remove</Button></Col>
                </Row>
                <Row>
                    <Col xs={8}><p>Some task</p></Col>
                    <Col xs={4}><Button variant='outline-danger'>Remove</Button></Col>
                </Row>
                <Row>
                    <Col xs={8}><p>Some task</p></Col>
                    <Col xs={4}><Button variant='outline-danger'>Remove</Button></Col>
                </Row>
            </Container>
            <Row>
            <Col><Button variant='danger'>Cancel</Button></Col>
            <Col><Button variant='success'>Submit</Button></Col>
            </Row>
        </main>
        </>
    )
}