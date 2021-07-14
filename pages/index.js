import Head from 'next/head'
import AboutMe from '../Components/AboutME/AboutMe';
import Banner from '../Components/Banner/Banner';
import ContactForm from '../Components/ContactForm/ContactForm';
import HomeLayout from '../Components/Layout/HomeLayout';
import Project from '../Components/Projects/Project';
import Skills from '../Components/Skills/Skills';

export default function Home() {
  return (
    <HomeLayout>
      <Head>
        <title>Tasnia Tamanna</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Banner />
      <AboutMe />
      <Skills />
      <ContactForm />
    </HomeLayout>
  )
}
