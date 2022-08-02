import React, { useState, useEffect } from 'react'
import styles from './Detail.module.css'
import { Link, useLocation } from 'react-router-dom'
export default function ExpandNav({to}) {

    const [display1, changeDisplay1] = useState('inline');
    const [display2, changeDisplay2] = useState('inline');
    const [displaySelected, changeSelected] = useState('none');


    function useQuery() {
        const { search } = useLocation();

        return React.useMemo(() => new URLSearchParams(search), [search]);
    }
    const departmentID = useQuery().get('department');

    const listClick1 = () => {
        if (display1 === 'inline') {
            changeDisplay1('none')
        }
        else {
            changeDisplay1('inline')
        }
    }
    const listClick2 = () => {
        if (display2 === 'inline') {
            changeDisplay2('none')
        }
        else {
            changeDisplay2('inline')
        }
    }
    useEffect(() => changeSelected(departmentID),[departmentID])
    const {search,pathname}  = useLocation();
    console.log(search)

return (
    <div className={styles.menu}>
        <ul className={styles.subMenu} id={styles.subMenu} >
            <li className={styles.link}>
                <Link to={pathname+search} className={styles.link} onClick={() => listClick1()}>Deparments</Link>
                <ul className={styles.menu} id={styles.subMenu} style={{ display: display1 }}>
                    <li>
                        <Link to='/detail?department=PR' className={styles.sublink} style={displaySelected ==='PR'?({color:'#ba0c2f'}):({})}>President/Vice-President</Link>
                    </li>
                    <li >
                        <Link to='/detail?department=IA' className={styles.sublink} style={displaySelected ==='IA'?({color:'#ba0c2f'}):({})}>Internal Affair</Link>
                    </li>
                    <li>
                        <Link to='/detail?department=IT' className={styles.sublink} style={displaySelected ==='IT'?({color:'#ba0c2f'}):({})}>Information Technology</Link>
                    </li>
                    <li>
                        <Link to='/detail?department=PT' className={styles.sublink} style={displaySelected ==='PT'?({color:'#ba0c2f'}):({})}>PT</Link>
                    </li>
                </ul>
            </li>
            <li>
                <Link to={pathname+search}  className={styles.link} onClick={() => listClick2()}>List2</Link>
                <ul className={styles.menu} id={styles.subMenu} style={{ display: display2 }}>
                    <li>
                        <Link to='dd' className={styles.sublink} style={displaySelected ===''?({color:'#ba0c2f'}):({})}>President/Vice-President</Link>
                    </li>
                    <li>
                        <Link to='dd' className={styles.sublink} style={displaySelected ===''?({color:'#ba0c2f'}):({})}>President/Vice-President</Link>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
)
}
