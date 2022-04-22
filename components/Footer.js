import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'

export default function Footer() {
  return (
    <footer className="mt-12 bg-black py-12">
      <div className="mt-8 flex flex-col items-center">
        <div className="mb-4 flex space-x-4">
          <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size="6" />
          <SocialIcon kind="github" href={siteMetadata.github} size="6" />
          <SocialIcon kind="facebook" href={siteMetadata.facebook} size="6" />
          <SocialIcon kind="youtube" href={siteMetadata.youtube} size="6" />
          <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size="6" />
          <SocialIcon kind="twitter" href={siteMetadata.twitter} size="6" />
        </div>
        <div className="mb-2 flex space-x-2 text-xs text-gray-500 dark:text-gray-400">
          <div>{`© ${new Date().getFullYear()}`} All rights reserved</div>
          <div>{` • `}</div>
          <Link href="/">Designed & Coded by {siteMetadata.title}</Link>
        </div>
      </div>
    </footer>
  )
}
