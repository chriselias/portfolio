import Link from '@/components/Link'
import SectionContainer from '@/components/SectionContainer'

export default function Contact() {
  return (
    <SectionContainer>
      {/* <div className="min-h-screen py-12">
        <h1 className="mb-2 text-4xl font-bold">Let's Talk</h1>
        <p className="mb-12 text-gray-600">
          If you have a project in mind or are simply interested in finding out more, get in touch
          and let’s get things moving.
        </p>
        <h2 className="mb-2 text-2xl font-bold">Phone</h2>
        <p>708-860-9914</p>

        <h2 className="mb-2 text-2xl font-bold">Email</h2>
        <p>chris@chriselias.com</p>

        <h2 className="mb-2 text-2xl font-bold">Resume</h2>
        <Link href="/resume.pdf">
          <button>Download Resume</button>
        </Link>
      </div> */}

      <div className="py-24 sm:py-32 ">
        <h2 className="text-4xl font-extrabold">Let's Talk</h2>
        <p className="mt-6 max-w-3xl text-lg text-gray-500">
          If you have a project in mind or are simply interested in finding out more, get in touch
          and let’s get things moving.
        </p>
        <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">Phone</h3>
            <p className="mt-2 text-base text-gray-600">
              <span className="block">708.860.9914</span>
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">Email</h3>
            <p className="mt-2 text-base text-gray-600">
              <span className="block">chris@chriselias.com</span>
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">Resume</h3>
            <Link href="/static/docs/Chris-Elias-Resume.pdf">
              <p className="mt-2 text-base font-medium text-indigo-600 hover:text-black">
                {' '}
                Download Resume
              </p>
            </Link>
          </div>
        </div>
      </div>
    </SectionContainer>
  )
}
