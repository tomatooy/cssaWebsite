import React, { useState } from 'react'
import styles from './Header.module.css'
import SubNavItem from './SubNavItem'

const elements = ['UGACSSA', 'UGACommunity', 'Sponsors']

export default function NavItem() {
    const [isShownHoverContent, setHover] = useState(-1);
    const list = elements.map((element, index) => {
        return (
            <li className={styles.navItem} onMouseEnter={() => setHover(index)} onMouseLeave={() => setHover(-1)}>
               {element}
                <SubNavItem category={index} Hover={isShownHoverContent} />
            </li>)
    })
    return list
}
