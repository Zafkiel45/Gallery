'use client'

import Image from 'next/image'
import styles from './page.module.scss'
import banner from '../../public/banner main.png'
import { HeaderLayout } from './components/header'
import { GalleryImage } from './components/gallery'
import { useState } from 'react'

export default function Home() {

  const [img, setImg] = useState('')

  return (
    <>
      <HeaderLayout/>
      <main className={styles.main}>
        <h1 className={styles.title}>Galeria De Imagens</h1>
        <input 
          className={styles.input} 
          type="text" 
          name="" 
          id=""
          onChange={(item) => setImg(item.target.value)}
          placeholder='Busque por palavras chaves...'/>
      </main>
      <GalleryImage tags={img}/>
    </>
  )
}
