import React from 'react'
import NavItem from './NavItem'
import styles from './Header.module.css'
import { Link } from 'react-router-dom'
export default function Header() {
    return (
        <div className={styles.headerWrapper}>
            <header className={styles.header}>
                <div className="mainLogo">
                    <Link to="/">
                        <img className={styles.logo} src="https://cdn.discordapp.com/attachments/940402118953668642/986687777531899944/IMG_4370.jpg" alt="UGACSSALogo" />
                    </Link>
                </div>
                <nav className="navbar">
                    <ul>
                        <NavItem />
                    </ul>
                </nav>
            </header>
        </div>
    )
}