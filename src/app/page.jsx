
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
    <h1 style={{color: 'red', backgroundColor: 'lightblue'}}
    >my second project</h1>

    <Link href="/about">Go to about page</Link>
    </>
  );
}