import styles from "./page.module.css";

export default async function Home() {
  await new Promise(resolve => setTimeout(resolve, 1000))
 
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Home</h1>
      </main>
    </div>
  );
}
