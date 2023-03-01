import Head from "next/head"
import Link from "next/link"
import Header from "./Header"
import NewsList from "./NewsList"

const Layout = ({children, title = "CalNews"}) => {
  return (
    <>
    <Head>
        <title>{title}</title>
    </Head>
    
    <Header/>
    <NewsList/>
    
    
    <main>{children}</main>
    

    </>
  )
}

export default Layout