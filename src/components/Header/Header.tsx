import React from 'react'
import styles from './header.module.scss'

export function Header() {
  return (
    <div className='container'>
        <div className={styles.header}>
            <div className={styles.header__test}></div>
        </div>
    </div>
  )
}
