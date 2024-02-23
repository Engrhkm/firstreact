import Link from "next/link";
import styles from './page.modules.css'

export default function About(){
    return(
        // if we are inside the return and we see {},it indicates that we want to perform a javascript
        <>
        <h1 className={styles.text}>About page</h1>
        <p className={`${styles.text} text`}>I am styled with the global css</p>

        <Link href="/">Home</Link>
        </>
    )
}