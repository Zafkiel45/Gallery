'use client'

import Image from 'next/image'
import styles from '../sass/gallery.module.scss'
import { TagsElements } from '../utils/imagem'
import { GalleryText } from './galleryText'
import '../sass/responsividade.scss'

export const GalleryImage = ({ tags }) => {

  const imagensFilted = TagsElements.filter((item) => {
    return tags === '' || item.description.includes(tags)
  })

  return (
    <div className={styles.containerImg}>
      <GalleryText/>
        <div className={styles.containerImgs}>
          {imagensFilted.map((element) => {
            return <figure key={element.id} className='figure'>
                    <Image 
                      key={element.id}
                      src={element.src} 
                      fill={true}
                      className={styles.imgs}  
                      alt={element.tag.join(',')}
                    />
                    <figcaption className={styles.figcaption}>
                      {element.description}
                    </figcaption>
              </figure>
            })}
        </div>
    </div>
  )
}

