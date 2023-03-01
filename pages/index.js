import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Header from '../components/Header'
import Footer from '../components/Footer'
import NewsList from '../components/NewsList'

const inter = Inter({ subsets: ['latin'] })

export default function index({articles}) {
  return (
    <>
    <Header/>
    <NewsList/>
    <Footer/>
    </>
    
  )
}

