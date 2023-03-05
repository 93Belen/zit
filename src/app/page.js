"use client"
import { logo } from 'components/components/logo';
import { FloatingLabel, Button, Form, FormControl, FormGroup, Modal, ModalBody, ModalHeader } from 'react-bootstrap'
import { useState } from 'react'
import { CardComponent } from 'components/components/card'
import 'bootstrap/dist/css/bootstrap.min.css'
import Link from 'next/link'

export default function Home() {
  const [view, setView] = useState(false);
  const openLoginModal = () => setView(()=>true);
  const closeLoginModal = () => setView(()=> setView(()=> false))
  return (
    <>
    <header>
        {logo}
        <p onClick={openLoginModal}>Log-in</p>
      </header>
    <main className='main'>
    <Modal id='login-modal' centered={true} show={view} onHide={closeLoginModal}>
      <ModalHeader closeButton></ModalHeader>
      <ModalBody>
      <h2 id='h2-login'>Log-in</h2>
      <Form>
        <FormGroup className='mt-4'>
        <FloatingLabel  label='email'>
          <FormControl placeholder='email' />
        </FloatingLabel>
        </FormGroup>
        <FormGroup className='mt-3 mb-4'>
        <FloatingLabel  label='password'>
          <FormControl placeholder='password' />
        </FloatingLabel>
        </FormGroup>
        <Button variant='success'>Log-in</Button>
      </Form>
      <Link className='a' onClick={closeLoginModal} href='/signup'>Sign-up</Link>
      </ModalBody>
    </Modal>
    <CardComponent />
    </main>
    </>
  )
}
