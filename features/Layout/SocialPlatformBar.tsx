import React from 'react'
import { IconDefinition } from '@fortawesome/fontawesome-common-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export type SocialPlatformBarItem = {
  label: string
  icon: IconDefinition
  colorHex: string
  href: string
}

type Props = {
  items: SocialPlatformBarItem[]
  className?: string
}

const SocialPlatformBar = ({ items, className = '' }: Props) => (
  <ul className={`list-none flex space-x-2 ${className}`}>
    {items.map(item => (
      <li key={item.label}>
        <a
          href={item.href}
          className="flex justify-center items-center w-12 h-12 rounded-full opacity-50 hover:opacity-100 transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110"
          style={{ backgroundColor: item.colorHex }}
        >
          <span className="sr-only">{item.label}</span>
          <FontAwesomeIcon icon={item.icon} size="lg" className="text-white" />
        </a>
      </li>
    ))}
  </ul>
)

export default SocialPlatformBar
