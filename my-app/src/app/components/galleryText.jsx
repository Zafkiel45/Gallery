import styles from '../sass/gallery.module.scss'
import Link from 'next/link'

export const GalleryText = () => {
  return (
    <div className={styles.descriptionContainer}> 
      <h1 className={styles.descriptionTitle}>Sobre este site</h1>
      <p className={styles.descriptionText}>
        Este site contém imagens tiradas do jogo eletrônico <em> Genshin Impact </em>desenvolvido pela a empresa Chinesa, Mihoyo. Mais informações sobre o jogo esta presente no site oficial que pode ser acessado aqui:
        <Link style={{color: '#242424', textDecoration: 'underline'}} href={'https://genshin.hoyoverse.com/pt/home'}>Genshin impact oficial</Link> Todas as imagens presente neste site foram tiradas por mim. Espero que gostem :{" )"}</p>
    </div>
  )
}