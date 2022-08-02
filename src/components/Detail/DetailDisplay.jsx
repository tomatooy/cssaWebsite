import React from 'react'
import styles from './Detail.module.css'
import { useLocation } from 'react-router-dom';
import { Departments } from './DetailData'

export default function DetailDisplay() {
    function useQuery() {
        const { search } = useLocation();

        return React.useMemo(() => new URLSearchParams(search), [search]);
    }
    const departmentID = useQuery().get('department');
    const query = Departments.find(element => element.ID === departmentID)
    const result = query ? (
        (<div className={styles.display}>
            <div className={styles.headLine}>
                <h2>{query.name}</h2>
            </div>
            <p>
                {query.description}
            </p>
        </div>)
    ) :
        (<div className={styles.display}>
            <div className={styles.headLine}>
                <h2>Default</h2>
            </div>
            <p>
                Default
            </p>
        </div>);
    return (
        result
    )
}
