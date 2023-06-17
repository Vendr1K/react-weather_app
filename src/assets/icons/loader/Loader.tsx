
import styles from './loader.module.scss'

export function Loader() {
  return (
    // <div className={styles.testLoader}>Loader</div>
    <section className={styles.svg_container}>
    <svg  className={styles.svg_load}>
      <circle cx="9" cy="9" r="9"></circle>
    </svg>
   </section>
  )
}
