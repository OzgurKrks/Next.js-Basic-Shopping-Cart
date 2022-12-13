import '../styles/globals.css'
import Layout from '../components/Layout'
import { Context } from '../Context/Context'
import { useState } from 'react'
import Head from 'next/head'
import Script from 'next/script'

function MyApp({ Component, pageProps }) {
  const [x,setX] = useState([])
  const[tot,setTot] = useState(Number(0))
  const value = {
      x,setX,tot,setTot
  }
  return (
    <Context.Provider value={value}>
      <Layout>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
          crossOrigin="anonymous"
          
        />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
      </Head>
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
        crossOrigin="anonymous"
      />
      <Component {...pageProps} />
    </Layout>
    </Context.Provider>
  )
}

export default MyApp
