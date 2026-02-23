import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link';
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <h1>Praktikum Next.js Pages Router</h1> <br />
      <p>Mahasiswa D4 Pemrograman berbasis Framework</p>

      {/* Tugas 2: Link Navigasi */}
      {/* <nav style={{ marginTop: '20px' }}>
        <Link href="/about" style={{ 
          padding: '10px 20px', 
          backgroundColor: '#0070f3', 
          color: 'white', 
          borderRadius: '5px', 
          textDecoration: 'none' 
        }}>
          Lihat Profil Mahasiswa (About)
        </Link>
      </nav> */}
    </div>
  )
}
