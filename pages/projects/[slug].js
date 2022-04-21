import siteMetadata from '@/data/siteMetadata'
import projectsData from '@/data/projectsData'
import Card from '@/components/Card'
import { PageSEO } from '@/components/SEO'
import { useRouter } from 'next/router'
import SectionContainer from '@/components/SectionContainer'
import Image from '@/components/Image'
import StackIcons from '@/components/StackIcons'

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
  const { title, description, imgSrc, href, stack, excerpt } = project[0]

  return (
    <>
      <PageSEO title={`Projects - ${siteMetadata.author}`} description={siteMetadata.description} />
      <div className=" bg-gray-50">
        <SectionContainer>
          <div className="grid lg:grid-cols-2">
            <div className="flex items-center">
              <div className="p-8 md:px-8">
                <h1 className="mb-5 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
                  {title}
                </h1>
                <p> {excerpt}</p>
              </div>
            </div>
            <div className="p-8">
              <Image src={imgSrc} alt={title} width={500} height={300} />
            </div>
          </div>
        </SectionContainer>
      </div>
      <div className="h-24 border-y bg-gray-100">
        <div className="ml-8 p-8">
          <StackIcons stack={stack} />
        </div>
      </div>
      <SectionContainer>
        <div className="grid lg:grid-cols-2">
          <div className="p-8">
            <h2 className="text-lg font-semibold">About {title}</h2>
            <p>{description}</p>
          </div>
          <div className="p-8">
            <Image className="rounded" src={imgSrc} alt={title} width={500} height={300} />
          </div>
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
