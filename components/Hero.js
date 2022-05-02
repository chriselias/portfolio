import SectionContainer from '@/components/SectionContainer'
import Image from 'next/image'
import HeroImg from '../public/static/images/chris-elias-hero.png'
export default function Hero() {
  return (
    <SectionContainer>
      <div className="max-w-3xl py-24">
        {/* <span className="mb-4 flex">Hello </span> */}
        <h2 className="bg-gradient-to-r from-cyan-500 via-yellow-500 to-pink-500 bg-clip-text text-3xl font-extrabold  leading-9 tracking-tight text-transparent dark:text-gray-100  sm:text-4xl sm:leading-10 md:mb-4 md:text-8xl ">
          Chris Elias
        </h2>
        <h2 className="text-2xl font-extrabold leading-9 tracking-tight text-gray-900  dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          Full Stack Web Developer
        </h2>

        <p className="chris my-6 text-lg text-gray-600">
          Hi, I’m Chris Elias a full stack javascript web developer and UI designer.
          <br /> I love building modern javascript applications with React and TypeScript.
        </p>
      </div>
    </SectionContainer>
  )
}
