import React from 'react'
import { BsInstagram, BsFacebook, BsEnvelope, BsLinkedin } from "react-icons/bs";
import styles from './Social.module.css'

const listElement = [[<BsInstagram  className={styles.icon}/>, 'Instagram', '@ugacssa'], [<BsFacebook className={styles.icon} />, 'FaceBook', '@cssa.uga'], [<BsLinkedin className={styles.icon}/>, 'Linkedin', 'CSSA'], [<BsEnvelope className={styles.icon}/>, 'Contact US', 'china@uga.edu']]
export default function SocialElement() {
 
    const list = listElement.map((element) => {
        return (
            <li className='socialElement'>
                <div className={styles.liContainer}>
                    <a href='..' className={styles.iconLink}>{element[0]}</a>
                    <div>
                        <p className={styles.footerBold}>{element[1]}</p>
                        <p className={styles.grayText}>{element[2]}</p>
                    </div>
                </div>
            </li>
        )
    })
    return list

}