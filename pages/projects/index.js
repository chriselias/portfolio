import siteMetadata from '@/data/siteMetadata'
import projectsData from '@/data/projectsData'
import Card from '@/components/Card'
import { PageSEO } from '@/components/SEO'
import RecentWorkImages from '@/components/RecentWork'
import SectionContainer from '@/components/SectionContainer'

export default function Projects() {
  return (
    <SectionContainer>
      <PageSEO title={`Projects - ${siteMetadata.author}`} description={siteMetadata.description} />
      <div className="pt-16 pb-12">
        <h1 className="text-center text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          Some Projects I've Built
        </h1>
      </div>
      <div className="py-6">
        <div className="flex flex-wrap">
          <RecentWorkImages numOfProjects={12} />
        </div>
      </div>
    </SectionContainer>
  )
}
