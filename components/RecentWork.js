import Card from '@/components/Card'
import SectionContainer from '@/components/SectionContainer'
import projectsData from '@/data/projectsData'
import Link from './Link'
import Image from '@/components/Image'

import { SiTypescript, SiJavascript, SiReact, SiAngular } from 'react-icons/si'
import StackIcons from '@/components/StackIcons'
export default function RecentWorkImages({ numOfProjects }) {
  return (
    <div className="space-y-2 pt-6 pb-8 md:space-y-5">
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 xl:gap-x-12"
      >
        {projectsData.map(
          (project, index) =>
            index < numOfProjects && (
              <Link href={project.href} key={project.slug} aria-label={`Link to ${project.title}`}>
                <li className="relative">
                  <>
                    <div
                      className="aspect-w-10 aspect-h-7 group flex h-96 items-center justify-center overflow-hidden rounded-lg p-12 shadow-lg"
                      style={{ backgroundColor: project.colors.background }}
                    >
                      <div className="relative h-96 w-96">
                        <Image
                          src={project.imgSrc}
                          alt={project.title}
                          layout="fill"
                          objectFit="contain"
                          className="object-cover group-hover:opacity-75"
                          priority="lazy"
                        />
                      </div>

                      <button type="button" className="absolute inset-0 focus:outline-none">
                        <span className="sr-only">View details for {project.title}</span>
                      </button>
                    </div>
                    <div className="mt-6  px-2">
                      <p className="font-bold">{project.title}</p>
                      <p className="text-sm text-gray-600">{project.excerpt}</p>
                      {/* <div className="flex flex-row flex-wrap py-4">
                        <StackIcons stack={project.stack} />
                      </div> */}
                    </div>
                  </>
                </li>
              </Link>
            )
        )}
      </ul>
    </div>
  )
}
