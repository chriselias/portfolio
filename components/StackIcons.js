import React from 'react'
import { SiTypescript, SiJavascript, SiReact, SiAngular } from 'react-icons/si'
function renderIcons(name) {
  switch (name) {
    case 'React':
      return <SiReact className="mr-3 h-6 w-6 text-gray-300" />
    case 'Angular':
      return <SiAngular className="mr-3 h-6 w-6 text-gray-300" />
    case 'TypeScript':
      return <SiTypescript className="mr-3 h-6 w-6 text-gray-300" />
    default:
      return null
  }
}

const StackIcons = ({ stack }) => {
  console.log(stack)
  return <>{stack?.map((icon) => renderIcons(icon))}</>
}

export default StackIcons
