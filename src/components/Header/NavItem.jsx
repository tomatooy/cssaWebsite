import React, { useState } from 'react'
import styles from './Header.module.css'
import SubNavItem from './SubNavItem'

const elements = ['UGACSSA', 'UGACommunity', 'Sponsors']

export default function NavItem() {
    const [isShownHoverContent, setHover] = useState(-1);
    const list = elements.map((element, index) => {
        return (
            <div className={styles.navItem} onMouseEnter={() => setHover(index)} onMouseLeave={() => setHover(-1)}>
                <li className={styles.li}>{element}
                </li>
                <SubNavItem category={index} Hover={isShownHoverContent} />
            </div>)
    })
    return list
}
