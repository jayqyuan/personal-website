import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import NavBar, { NavBarProps } from '@/components/NavBar'

const inter = Inter({ subsets: ['latin'] })

const links = [
        {href: '#home-section', label: 'Home'},
        {href: '#about-me-section', label: 'About Me'},
        {href: '#skills-section', label: 'Skills'},
        {href: '#project-section', label: 'Projects'},
        {href: '#contact-section', label: 'Contact'},
]

export default function Home() {

  const navBarProps: NavBarProps ={
    links: links,
    keyType: 'uuid'
  }
  return (
    <>
      <Head>
        <title></title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <main>
        <NavBar {...navBarProps}/>
        <div id='home-section'className={styles.sections}>Home</div>
        <div id='about-me-section'className={styles.sections}>About Me</div>
        <div id='skills-section'className={styles.sections}>Skills</div>
        <div id='project-section'className={styles.sections}>My Projects</div>
        <div id='contact-section'className={styles.sections}>My Contact</div>
      </main>
    </>
  )
}
