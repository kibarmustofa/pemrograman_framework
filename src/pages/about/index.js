// src/pages/about.js
 import Link from 'next/link';

export default function About() {
  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Halaman About</h1> <br />
      <div>
        <p><strong>Nama:</strong> Kibar Mustofa</p>
        <p><strong>NIM:</strong> 2341720034</p>
        <p><strong>Program Studi:</strong> Teknologi Informasi</p>
      </div>
      
      <br />
      {/* Navigasi balik ke halaman utama */}
      <Link href="/" style={{padding: '10px 20px', 
          backgroundColor: '#0070f3', 
          color: 'white', 
          borderRadius: '5px', 
          textDecoration: 'none'}}>
        Kembali ke Beranda
      </Link>
    </div>
  );
}