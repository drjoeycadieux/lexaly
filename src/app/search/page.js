import styles from '../page.module.css'

import Link from 'next/link'


// Components
import SearchInput from '../components/SearchInput'


export default function Search() {
    return (
        <div>
            <div className={styles.navbar}>
                <ul>
                    <li><p>Lexaly AI</p></li>
                    <Link className={styles.linknav} href="/">Home</Link>
                    <Link className={styles.linknav} href="/contact/">Contact</Link>
                    <Link className={styles.linknav} href="/openchat/">OpenChat</Link>
                    <Link className={styles.linknav} href="/search/">Search</Link>
                </ul>
            </div>
            <div className={styles.search}>
                <p>
                    Search Our Website...
                    <SearchInput />
                </p>
            </div>
        </div>
    )
}