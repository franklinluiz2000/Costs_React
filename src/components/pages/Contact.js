import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt,} from "react-icons/fa";
import styles from './Contact.module.css'

function Contact() {
  const numero = "https://www.google.com/"
  const email = "https://www.google.com/"
  const localizacao = "https://www.google.com/"
    return (
      <section className={styles.section}>
        <h1>Contato</h1><br/>        
          <ul className={styles.list_contact}>
            <li><a href={numero}><FaPhoneAlt /> (84)9-9999-9999</a></li><br/>
            <li><a href={email}><FaEnvelope /> projectcosts@company.com</a></li><br/>
            <li><a href={localizacao}><FaMapMarkerAlt/> Natal/RN</a></li>
          </ul>               
      </section>
    );
  }
  
  export default Contact;