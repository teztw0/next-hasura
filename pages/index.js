import styles from '../styles/Home.module.css'

export default function Home() {
  return (
      <div className={styles.container}>
          <p className={`paragraph ${styles.paragraphHome}`}>
              ↖ Please, change url parameters<br/>
              Example : <br/>
              /best-hello-ever<br/>
              /best-hello-world-ever<br/>
              /best-world-ever
          </p>
      </div>
  )
}
