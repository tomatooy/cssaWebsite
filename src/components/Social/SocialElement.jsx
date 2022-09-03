import React from 'react'
import { BsInstagram, BsFacebook, BsEnvelope, BsLinkedin } from "react-icons/bs";
import "bootstrap-icons/font/bootstrap-icons.css";
import styles from './Social.module.css'

const listElement = [[<BsInstagram className={styles.icon} />, 'Instagram', '@ugacssa'], [<BsFacebook className={styles.icon} />, 'FaceBook', '@cssa.uga'], [<BsLinkedin className={styles.icon} />, 'Linkedin', 'CSSA'], [<BsEnvelope className={styles.icon} />, 'Contact US', 'china@uga.edu']]
export default function SocialElement() {

    const list = listElement.map((element) => {
        return (
            <li className='socialElement'>
                <div className={styles.liContainer}>
                    <a href='..' className={styles.iconLink}>
                        <i class="bi bi-facebook" style={{diplay:'block'},{margin:'auto'}}></i>
                    </a>
                    <div className={styles.socialText}>
                        <span className={styles.footerBold}>{element[1]}</span>
                        <br></br>
                        <span className={styles.grayText}>{element[2]}</span>
                    </div>
                </div>
            </li>
        )
    })
    return list

}