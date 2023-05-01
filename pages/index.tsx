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
        <div id='home-section'>Home</div>
        <div id='about-me-section'>About Me</div>
        <div id='skills-section'>Skills</div>
        <div id='project-section'>My Projects</div>
        <div id='contact-section'>My Contact</div>
      </main>
    </>
  )
}
