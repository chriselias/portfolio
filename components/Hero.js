import SectionContainer from '@/components/SectionContainer'
import Image from 'next/image'
import HeroImg from '../public/static/images/hero.png'
export default function Hero() {
  return (
    <SectionContainer>
      <div className="grid grid-cols-2 items-center space-y-2 pt-6 pb-8 md:space-y-5">
        <div>
          {/* <span className="mb-4 flex">Hello </span> */}
          <h2 className="mb-4 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-7xl md:leading-14">
            Chris Elias
          </h2>
          <h2 className="bg-gradient-to-r from-cyan-500 via-yellow-500 to-yellow-500 bg-clip-text text-2xl font-extrabold leading-9 tracking-tight text-transparent dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Full Stack Web Developer
          </h2>
          <p className="my-12 text-lg">
            Hi, I’m Chris Elias a full stack javascript web developer and UI designer. I love
            building modern javascript applications with React and TypeScript.
          </p>
        </div>
        <div>
          <Image src={HeroImg} width="300px" height="300px" layout="responsive" />
        </div>
      </div>
    </SectionContainer>
  )
}
