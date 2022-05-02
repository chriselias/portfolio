import React from 'react'
import {
  SiTypescript,
  SiJavascript,
  SiReact,
  SiAngular,
  SiWordpress,
  SiExpress,
  SiTailwindcss,
  SiFigma,
  SiNodedotjs,
  SiNextdotjs,
  SiStyledcomponents,
  SiMongodb,
} from 'react-icons/si'
function renderIcons(name, color) {
  switch (name) {
    case 'React':
      return <SiReact style={{ color: color }} key={name} className="mr-3 h-6 w-6" />
    case 'Angular':
      return <SiAngular style={{ color: color }} key={name} className="mr-3 h-6 w-6" />
    case 'TypeScript':
      return <SiTypescript style={{ color: color }} key={name} className="mr-3 h-6 w-6" />
    case 'Javascript':
      return <SiJavascript style={{ color: color }} key={name} className="mr-3 h-6 w-6" />
    case 'Wordpress':
      return <SiWordpress style={{ color: color }} key={name} className="mr-3 h-6 w-6" />
    case 'Express':
      return <SiExpress style={{ color: color }} key={name} className="mr-3 h-6 w-6" />
    case 'TailwindCSS':
      return <SiTailwindcss style={{ color: color }} key={name} className="mr-3 h-6 w-6" />
    case 'Node.js':
      return <SiNodedotjs style={{ color: color }} key={name} className="mr-3 h-6 w-6" />
    case 'Figma':
      return <SiFigma style={{ color: color }} key={name} className="mr-3 h-6 w-6" />
    case 'Next.js':
      return <SiNextdotjs style={{ color: color }} key={name} className="mr-3 h-6 w-6" />
    case 'Styled Components':
      return <SiStyledcomponents style={{ color: color }} key={name} className="mr-3 h-6 w-6" />
    case 'MongoDB':
      return <SiMongodb style={{ color: color }} key={name} className="mr-3 h-6 w-6" />
    default:
      return null
  }
}

const StackIcons = ({ stack, color }) => {
  return <>{renderIcons(stack, color)}</>
}

export default StackIcons
