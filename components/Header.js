import React from 'react'
import navbar from '../styles/modal.module.css'
import Link from 'next/link'
import { useContext } from 'react'
import { Context } from '../Context/Context'

function Header() {
  const d = useContext(Context)
  return (
    <div className={navbar.navbar}>
      <Link href="/">
        <h1>Logo</h1>
      </Link>
      <Link href="/sepet">
        <div className={navbar.i}>
          <i class="fa-sharp fa-solid fa-cart-shopping"></i>
          <span>{d.x.length}</span>
        </div>

      </Link>
    </div>
  )
}

export default Header