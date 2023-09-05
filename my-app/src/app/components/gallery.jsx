'use client'

import Image from 'next/image'
import styles from '../sass/gallery.module.scss'
import Link from 'next/link'
import { TagsElements } from '../utils/imagem'


export const GalleryImage = ({ tags }) => {

  const imagensFilted = TagsElements.filter((item) => {
    return tags === '' || item.tag.includes(tags)
  })

  return (
    <div className={styles.containerImg}>
      <div className={styles.descriptionContainer}> 
        <h1 className={styles.descriptionTitle}>Sobre este site</h1>
        <p className={styles.descriptionText}>Este site contém imagens tiradas do jogo eletrônico Genshin Impact desenvolvido pela a empresa Chinesa, Mihoyo. Mais informações sobre o jogo esta presente no site oficial que pode ser acessado aqui: <Link style={{color: '#242424'}} href={'https://genshin.hoyoverse.com/pt/home'}>Genshin impact oficial</Link> Todas as imagens presente neste site foram tiradas por mim. Espero que gostem :{" )"}</p>
      </div>
      <div className={styles.containerImgs}>
        {imagensFilted.map((element) => {
          return <Image src={element.src} width={700} height={300} alt={element.tag.join(',')} />
        })}
      </div>
    </div>
  )
}