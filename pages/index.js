import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import formatDate from '@/lib/utils/formatDate'

import NewsletterForm from '@/components/NewsletterForm'
import SectionContainer from '@/components/SectionContainer'
import Hero from '@/components/Hero'

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
        <div className="bg-gray-50">
          <SectionContainer>
            <div className="grid grid-cols-2 gap-8 py-8">
              <div>
                <h2 className="text-lg font-bold">Code and Design</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mattis, magna non
                  rhoncus lacinia, metus turpis dictum diam, a porttitor sapien diam venenatis
                  purus. Sed et nisi non tellus lacinia hendrerit a laoreet risus. Interdum et
                  malesuada fames ac ante ipsum primis in faucibus. Pellentesque pretium felis eu
                  massa dignissim, sit amet pretium urna viverra. Fusce elementum commodo magna
                  pulvinar pretium. Fusce porttitor eros a metus vehicula, luctus maximus felis
                  venenatis. Phasellus viverra vel enim interdum tempor. Praesent ornare interdum
                  congue. Cras ornare erat at vulputate sodales. Nullam accumsan dui sit amet leo
                  sodales placerat. Aliquam gravida euismod est, eget volutpat sem sollicitudin vel.
                  Nullam fringilla tellus sit amet vestibulum feugiat. Pellentesque maximus dolor at
                  quam congue iaculis. Nulla eu dignissim neque. Mauris ac commodo mauris. In in
                  elementum lectus.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold">Front End</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mattis, magna non
                  rhoncus lacinia, metus turpis dictum diam, a porttitor sapien diam venenatis
                  purus. Sed et nisi non tellus lacinia hendrerit a laoreet risus. Interdum et
                  malesuada fames ac ante ipsum primis in faucibus. Pellentesque pretium felis eu
                  massa dignissim, sit amet pretium urna viverra. Fusce elementum commodo magna
                  pulvinar pretium. Fusce porttitor eros a metus vehicula,
                </p>
                <h3 className="text-lg font-bold">Front End</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mattis, magna non
                  rhoncus lacinia, metus turpis dictum diam, a porttitor sapien diam venenatis
                  purus. Sed et nisi non tellus lacinia hendrerit a laoreet risus. Interdum et
                  malesuada fames ac ante ipsum primis in faucibus. Pellentesque pretium felis eu
                  massa dignissim, sit amet pretium urna viverra. Fusce elementum commodo magna
                  pulvinar pretium. Fusce porttitor eros a metus vehicula,
                </p>
                <h3 className="text-lg font-bold">Front End</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mattis, magna non
                  rhoncus lacinia, metus turpis dictum diam, a porttitor sapien diam venenatis
                  purus. Sed et nisi non tellus lacinia hendrerit a laoreet risus. Interdum et
                  malesuada fames ac ante ipsum primis in faucibus. Pellentesque pretium felis eu
                  massa dignissim, sit amet pretium urna viverra. Fusce elementum commodo magna
                  pulvinar pretium. Fusce porttitor eros a metus vehicula,
                </p>
              </div>
            </div>
          </SectionContainer>
        </div>
        <SectionContainer>
          <div className="grid grid-cols-2 gap-8">
            <h2 className="text-lg font-bold">Recent Work</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mattis, magna non rhoncus
              lacinia, metus turpis dictum diam, a porttitor sapien diam venenatis purus. Sed et
              nisi non tellus lacinia hendrerit a laoreet risus. Interdum et malesuada fames ac ante
              ipsum primis in faucibus. Pellentesque pretium felis eu massa dignissim, sit amet
              pretium urna viverra. Fusce elementum commodo magna pulvinar pretium. Fusce porttitor
              eros a metus vehicula,
            </p>
          </div>
        </SectionContainer>
        {/* <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((frontMatter) => {
            const { slug, date, title, summary, tags } = frontMatter
            return (
              <li key={slug} className="py-12">
                <article>
                  <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                    <dl>
                      <dt className="sr-only">Published on</dt>
                      <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                        <time dateTime={date}>{formatDate(date)}</time>
                      </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                        <div>
                          <h2 className="text-2xl font-bold leading-8 tracking-tight">
                            <Link
                              href={`/blog/${slug}`}
                              className="text-gray-900 dark:text-gray-100"
                            >
                              {title}
                            </Link>
                          </h2>
                          <div className="flex flex-wrap">
                            {tags.map((tag) => (
                              <Tag key={tag} text={tag} />
                            ))}
                          </div>
                        </div>
                        <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                          {summary}
                        </div>
                      </div>
                      <div className="text-base font-medium leading-6">
                        <Link
                          href={`/blog/${slug}`}
                          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                          aria-label={`Read "${title}"`}
                        >
                          Read more &rarr;
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul> */}
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6">
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="all posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )}
      {siteMetadata.newsletter.provider !== '' && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )}
    </>
  )
}
