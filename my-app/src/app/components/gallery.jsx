'use client'

import Image from 'next/image'
import img1 from '../../../public/image 1.png'
import img2 from '../../../public/image 2.png'
import img3 from '../../../public/image 3.png'
import styles from '../sass/gallery.module.scss'
import Link from 'next/link'
import { useRef } from 'react'

export const GalleryImage = ({ tags }) => {

  const refElement = useRef('visible ')
  const TagsArrays = [
    'paisagem',
    'evento',
    'exclusivo',
    'torre',
    'liyue'
  ]
  const searchLogic = tags === '' || TagsArrays.includes(tags) ? {display: 'block', objectFit: 'cover', borderRadius: '5px'}:{display: 'none'}

  return (
    <div className={styles.containerImg}>
      <div className={styles.descriptionContainer}> 
        <h1 className={styles.descriptionTitle}>Sobre este site</h1>
        <p className={styles.descriptionText}>Este site contém imagens tiradas do jogo eletrônico Genshin Impact desenvolvido pela a empresa Chinesa, Mihoyo. Mais informações sobre o jogo esta presente no site oficial que pode ser acessado aqui: <Link style={{color: '#242424'}} href={'https://genshin.hoyoverse.com/pt/home'}>Genshin impact oficial</Link> Todas as imagens presente neste site foram tiradas por mim. Espero que gostem :{" )"}</p>
      </div>
      <div className={styles.containerImgs}>
        <a href='/image 1.png' download>
          <Image 
            src='/image 1.png'  
            quality={80} 
            width={300} 
            height={300}
            alt=''
            ref={refElement}
            style={searchLogic}
            />
          </a>
          <a href={img1}> 
            <Image 
              src={img2} 
              quality={80} 
              width={700} 
              height={300}
              alt=''
              style={searchLogic}
            />
          </a>
          <a href={img1}>
            <Image 
              download src={img3} 
              quality={80} 
              width={700} 
              height={300}
              alt=''
              style={searchLogic}
            />
          </a>
      </div>
    </div>
  )
}