"use client"
import { logo } from 'components/components/logo'
import styles from '../page.module.css'
import { FloatingLabel, Button, Form, FormControl, FormGroup, FormCheck } from 'react-bootstrap'
import { useState } from 'react'
import { CardComponent } from 'components/components/card'
import 'bootstrap/dist/css/bootstrap.min.css'
import Link from 'next/link'

export default function Signup() {
    return (
    <>
    <header>
        {logo}
        <Link href='/'>Go back</Link>
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