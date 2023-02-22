"use client"
import { Inter } from '@next/font/google'
import { logo } from 'components/components/logo'
import styles from './page.module.css'
import { Modal, ModalHeader } from 'react-bootstrap'
import { useState } from 'react'
import { CardComponent } from 'components/components/card'

const inter = Inter({ subsets: ['latin'] })

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
    <main className={styles.main}>
    <Modal centered={true} show={view} onHide={closeLoginModal}>
      <ModalHeader closeButton></ModalHeader>
      <p>Login modal</p>
    </Modal>
    <CardComponent />
    </main>
    </>
  )
}
