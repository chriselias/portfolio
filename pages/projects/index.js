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
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          Some Projects I've Built
        </h1>
        <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
          Great ideas aren’t industry specific. I work with clients of all scopes and sectors to
          create better experiences through design. Whether an adventurous startup or established
          global presence, the same level of detail and quality is delivered.{' '}
        </p>
      </div>
      <div className="py-12">
        <div className="flex flex-wrap">
          <RecentWorkImages numOfProjects={12} />
        </div>
      </div>
    </SectionContainer>
  )
}
