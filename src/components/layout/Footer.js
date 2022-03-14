import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp, FaTelegram } from 'react-icons/fa'
import styles from './Footer.module.css'

function Footer() {
  // teste com a url do google para direcionar icones de facebook, instgram e linkedin
  const url = "https://www.google.com/"
  return (
    <footer className={styles.footer}>
      <ul className={styles.social_list}>
        <li>
          <a href={url}><FaFacebook /></a>                   
        </li>
        <li>
          <a href={url}><FaInstagram /></a>          
        </li>
        <li>
          <a href={url}><FaLinkedin /></a>
        </li>
        <li>
          <a href={url}><FaWhatsapp /></a>
        </li>
        <li>
          <a href={url}><FaTelegram /></a>
        </li>
      </ul>
      <p className={styles.copy_right}>
        <span>CompanyCosts</span> &copy; 2022
      </p>
    </footer>
  )
}

export default Footer