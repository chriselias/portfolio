import React from 'react'
import { SiTypescript, SiJavascript, SiReact, SiAngular } from 'react-icons/si'
function renderIcons(name) {
  switch (name) {
    case 'React':
      return <SiReact key={name} className="mr-3 h-6 w-6 text-white" />
    case 'Angular':
      return <SiAngular key={name} className="mr-3 h-6 w-6 text-white" />
    case 'TypeScript':
      return <SiTypescript key={name} className="mr-3 h-6 w-6 text-white" />
    default:
      return null
  }
}

const StackIcons = ({ stack }) => {
  return <>{stack?.map((icon) => renderIcons(icon))}</>
}

export default StackIcons
