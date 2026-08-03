import Image from "next/image";
import Hero from './components/hero/Hero'
import About from './components/about/About'
import MySkills from './components/mySkills/MySkills'
import CareerJourney from './components/careerJourney/CareerJoourney'
import ContactUs from './components/contactUs/ContactUs'
import MyExperience from './components/myExperience/MyExperience'
import MyProjects from './components/myProjects/MyProjects'

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <MySkills />
      <MyExperience />
      <MyProjects />
      <CareerJourney />
      <ContactUs />
    </div >
  );
}
