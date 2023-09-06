'use client'

import Image from 'next/image'
import styles from '../sass/gallery.module.scss'
import Link from 'next/link'
import { TagsElements } from '../utils/imagem'
import '../sass/gallleryTeste.scss'

export const GalleryImage = ({ tags }) => {

  const imagensFilted = TagsElements.filter((item) => {
    return tags === '' || item.tag.includes(tags)
  })

  return (
    <div className={styles.containerImg}>
      <div className={styles.descriptionContainer}> 
        <h1 className={styles.descriptionTitle}>Sobre este site</h1>
        <p className={styles.descriptionText}>
          Este site contém imagens tiradas do jogo eletrônico <em> Genshin Impact </em>desenvolvido pela a empresa Chinesa, Mihoyo. Mais informações sobre o jogo esta presente no site oficial que pode ser acessado aqui:
          <Link style={{color: '#242424', textDecoration: 'underline'}} href={'https://genshin.hoyoverse.com/pt/home'}>Genshin impact oficial</Link> Todas as imagens presente neste site foram tiradas por mim. Espero que gostem :{" )"}</p>
      </div>
      <div className={styles.containerImgs}>
        {imagensFilted.map((element, index) => {
          return <Image 
              key={element.id}
              src={element.src} 
              width={400} height={400} 
              className={styles.imgs}  
              alt={element.tag.join(',')} 
              onClick={(e) => {
                let newElement = document.createElement('img');
                newElement.src = e.target.src;
                newElement.alt = TagsElements[index].tag.join(',');
                newElement.classList.add('modal');
                document.body.appendChild(newElement)
                newElement.addEventListener('click', () => {
                  document.body.removeChild(newElement)
                })
              }}
            />
        })}
      </div>
    </div>
  )
}