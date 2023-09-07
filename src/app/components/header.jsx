import styles from '../sass/header.module.scss'
import Link from 'next/link'

export const HeaderLayout = () => {

  const LinkedinButton = {
    backgroundImage: 'linear-gradient(to left, #49CFFA, #3EDCFF, #11ABCD)',
    fontWeight: '700', 
    cursor: 'pointer',
    textShadow: '1px 1px 3px rgba(0, 0, 0, 0.25)'
  }
  const GithubButton = {
    backgroundColor: '#282828',
    fontWeight: '700', 
    cursor: 'pointer',
    textShadow: '1px 1px 3px rgba(0, 0, 0, 0.25)'
  }
  const InstagramButton = {
    backgroundImage: 'linear-gradient(to left, #7D4EC3, #E33A69, #FED07A)',
    fontWeight: '700', 
    cursor: 'pointer',
    textShadow: '1px 1px 3px rgba(0, 0, 0, 0.25)'
  }
  
  return (
    <header className={styles.header}>
      <ol className={styles.list}>
        <li  className={styles.itemList} key={0}>
          <button style={LinkedinButton} className={styles.button}>
            <Link href={"https://www.linkedin.com/in/murilo-araújo-a7a406271/"}>Linkedin</Link>
          </button>
        </li>
        <li className={styles.itemList} key={1}>
          <button style={GithubButton} className={styles.button}>
            <Link href={"https://www.linkedin.com/in/murilo-araújo-a7a406271/"}>GitHub</Link>
          </button>
        </li>
        <li  className={styles.itemList} key={2}>
          <button style={InstagramButton} className={styles.button}>
            <Link href={"https://www.linkedin.com/in/murilo-araújo-a7a406271/"}>Instagram</Link>
          </button>
        </li>
      </ol>
    </header>
  )
}