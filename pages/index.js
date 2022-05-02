import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'

import SectionContainer from '@/components/SectionContainer'
import Hero from '@/components/Hero'
import RecentWorkImages from '@/components/RecentWork'

const MAX_DISPLAY = 5

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

export default function Home({ posts }) {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div className="">
        <Hero />
        <div className="border-t border-b">
          <SectionContainer>
            <div className="grid gap-12 py-24 lg:grid-cols-2">
              <div>
                <h2 className="mb-2 text-4xl font-bold">An Experienced Tech Leader</h2>
                <p className="text-gray-600">
                  With many years of experience under my belt, I've worked with many front end and
                  back end languages. I have managed both dev and design teams and have been a
                  leader helping grow small companies to large.
                </p>
              </div>
              <div className="grid md:grid-cols-3 lg:grid-cols-1">
                <div className="mb-10">
                  <h3 className="text-lg font-bold">Front-End</h3>
                  <p className="text-gray-600">
                    Currently coding with React, Next.js, and TypeScript. I love these modern JS
                    libaries but I have years of experience with CSS, HTML, and Angular.
                  </p>
                </div>
                <div className="mb-10">
                  <h3 className="text-lg font-bold">Back End</h3>
                  <p className="text-gray-600">
                    Experience with NodeJS, ExpressJS, PosgresSQL, MongoDB, and more. I enjoy
                    writing APIs from scratch and integrating them the front-end.
                  </p>
                </div>
                <div className="">
                  <h3 className="text-lg font-bold">UI Design</h3>
                  <p className="text-gray-600">
                    Designing in Figma or Sketch and then translating into code is one of favorite
                    parts of being a full stack developer.
                  </p>
                </div>
              </div>
            </div>
          </SectionContainer>
        </div>
        <SectionContainer>
          <div className="mt-24 text-center">
            <h2 className="my-4 text-4xl font-bold">Recent Work</h2>
            <p className="text-lg text-gray-600">Some samples of recent coding and design work.</p>
          </div>
          <div className="my-12">
            <RecentWorkImages numOfProjects={3} />
          </div>
        </SectionContainer>
        <div className="flex justify-center">
          <Link href="/projects" className="text-lg font-bold">
            <button
              type="button"
              className="inline-flex items-center rounded-md border-2 border-black bg-black px-8 py-3 text-sm font-medium leading-4 text-white hover:bg-white hover:text-black"
            >
              See More Projects
            </button>
          </Link>
        </div>
      </div>
      {/* {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6">
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="all posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )} */}
      {/* {siteMetadata.newsletter.provider !== '' && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )} */}
    </>
  )
}
