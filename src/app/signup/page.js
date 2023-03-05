"use client"
import { logo } from 'components/components/logo'
import { FloatingLabel, Button, Form, FormControl, FormGroup, FormCheck } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Link from 'next/link'
import { ImArrowLeft  } from 'react-icons/im';

export default function Signup() {
    return (
    <>
    <header>
        {logo}
        <Link className='a' href='/'><ImArrowLeft/></Link>
      </header>
    <main className='main'>
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
        <FormGroup className='mt-3 mb-4'>
        <FloatingLabel  label='confirm-password'>
          <FormControl placeholder='confirm-password' />
        </FloatingLabel>
        </FormGroup>
        <FormGroup className='mt-3 mb-4'>
          <FormCheck type='switch' label='Are you a pet ziter?' />
        </FormGroup>
        <Button variant='success'>Sign-up</Button>
      </Form>
    </main>
    </>
  )}