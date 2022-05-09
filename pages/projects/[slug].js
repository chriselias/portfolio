import siteMetadata from '@/data/siteMetadata'
import projectsData from '@/data/projectsData'
import { PageSEO } from '@/components/SEO'
import SectionContainer from '@/components/SectionContainer'
import Image from '@/components/Image'
import StackIcons from '@/components/StackIcons'
import Link from '@/components/Link'
import { MdOutlineKeyboardBackspace } from 'react-icons/md'

export const getStaticPaths = async () => {
  const p = projectsData.map(({ slug }) => ({ params: { slug } }))
  return {
    paths: p,
    fallback: false, // false or 'blocking'
  }
}

export const getStaticProps = async ({ params }) => {
  return {
    props: {
      project: projectsData.filter((project) => project.slug === params.slug),
    },
  }
}

export default function Project({ project }) {
  const { title, description, imgSrc, href, stack, excerpt, colors, screenshots } = project[0]
  return (
    <>
      <PageSEO title={`Projects - ${siteMetadata.author}`} description={siteMetadata.description} />
      <div
        style={{ backgroundColor: colors.background, borderBottom: `10px solid ${colors.primary}` }}
      >
        <SectionContainer>
          <div className="grid py-12 dark:text-gray-900 lg:grid-cols-2">
            <div className="flex items-center">
              <div className="p-8 px-2 md:px-8">
                <Link href="/projects">
                  <button className="mb-8 flex items-center text-sm font-bold uppercase hover:text-blue-700">
                    <MdOutlineKeyboardBackspace className="mr-2" /> All Projects
                  </button>
                </Link>

                {/* <h1
                  style={{ color: colors.primary }}
                  className="mb-2 text-xl font-extrabold leading-9 tracking-tight dark:text-gray-100 sm:text-4xl sm:leading-10  md:leading-14"
                >
                  {title}
                </h1> */}
                <div className="relative mt-4 mb-8 h-12">
                  <Image src={imgSrc} alt={title} layout="fill" objectFit="contain" />
                </div>
                {/* <img src={imgSrc} alt="" className="mt-4 mb-8 max-w-xs" /> */}
                <p className="max-w-lg"> {description}</p>
              </div>
            </div>
            <div className="mt-8">
              <p className="mb-8 text-sm font-bold uppercase">Built With </p>
              <div className="mt-4 grid grid-cols-2 gap-6 ">
                {stack.map((stack) => (
                  <div className="flex" key={stack}>
                    <StackIcons stack={stack} color={colors.primary} />
                    {stack}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </SectionContainer>
      </div>
      {/* <div className="h-24" style={{ backgroundColor: colors.primary }}>
        <div className="ml-8 flex p-8">
          <StackIcons stack={stack} />
        </div>
      </div> */}
      <SectionContainer>
        <div className="grid gap-8 py-12 lg:grid-cols-3">
          {screenshots.map((screenshot) => (
            <Image
              src={screenshot.src}
              alt={screenshot.description}
              key={screenshot.src}
              width={507}
              height={370}
            />
          ))}
        </div>
      </SectionContainer>

      {/* <div>
          <div className="space-y-2 pt-6 pb-8 md:space-y-5">
            <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
              {title}
            </h1>
            <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
              Showcase your projects with a hero image (16 x 9)
            </p>
          </div>
          <div className="container py-12">
            <div className="flex flex-wrap">
              {description}
              <Image src={imgSrc} alt={title} width={500} height={306} />
            </div>
          </div>
        </div> */}
    </>
  )
}
