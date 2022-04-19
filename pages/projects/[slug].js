import siteMetadata from '@/data/siteMetadata'
import projectsData from '@/data/projectsData'
import Card from '@/components/Card'
import { PageSEO } from '@/components/SEO'
import { useRouter } from 'next/router'
import SectionContainer from '@/components/SectionContainer'

export const getStaticPaths = async () => {
  const p = projectsData.map(({ slug }) => ({ params: { slug } }))
  console.log('p', p)
  return {
    paths: p,
    fallback: true, // false or 'blocking'
  }
}

export const getStaticProps = async ({ params }) => {
  console.log('params', params.slug)
  //const projects = projectsData.filter((project) => project.slug === 'the-time-machine')

  console.log(params)
  return {
    props: {
      project: projectsData.filter((project) => project.slug === params.slug),
    },
  }
}

export default function Project({ project }) {
  const { title, description, imgSrc, href } = project[0]

  console.log(project)
  return (
    <>
      <PageSEO title={`Projects - ${siteMetadata.author}`} description={siteMetadata.description} />
      <SectionContainer>
        <div className="divide-y divide-gray-200 dark:divide-gray-700">
          <div className="space-y-2 pt-6 pb-8 md:space-y-5">
            <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
              {title}
            </h1>
            <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
              Showcase your projects with a hero image (16 x 9)
            </p>
          </div>
          <div className="container py-12">
            <div className="-m-4 flex flex-wrap">
              {description}
              {/* {projects && projects.map((project) => <h2 key={project.title}>{project.title}</h2>)} */}
            </div>
          </div>
        </div>
      </SectionContainer>
    </>
  )
}
