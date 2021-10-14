import Link from 'next/link'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRouter } from 'next/dist/client/router'
import { useCallback } from 'react'

export type SideNavigationItem = {
  name: string
  href: string
  icon?: IconDefinition
  colorClassName?: string
}

type Props = {
  items: SideNavigationItem[]
  heading?: string
  className?: string
}

const SideNavigation = ({ items, heading, className }: Props) => {
  const router = useRouter()
  const isActive = useCallback((item: SideNavigationItem) => item.href === router.asPath, [router.asPath])

  const linkColorClassName = (item: SideNavigationItem) =>
    isActive(item) ? `bg-gray-100 ${item.colorClassName}` : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'

  const iconColorClassName = (item: SideNavigationItem) =>
    isActive(item) ? `text-gray-500 ${item.colorClassName}` : 'text-gray-400 group-hover:text-gray-500'

  return (
    <>
      {heading && <h2 className="font-text text-gray-500 text-lg pl-1 mb-2">{heading}</h2>}
      <nav className={`space-y-2 ${className || ''}`} aria-label="Sidebar">
        {items.map((item) => (
          <Link href={item.href}>
            <a
              key={item.name}
              className={`group flex items-center px-3 py-2 text-sm font-medium rounded-lg ${linkColorClassName(item)}`}
              aria-current={isActive(item) ? 'page' : undefined}
            >
              {item.icon && (
                <FontAwesomeIcon
                  icon={item.icon}
                  aria-hidden="true"
                  className={`flex-shrink-0 -ml-1 mr-3 h-6 w-6 ${iconColorClassName(item)}`}
                />
              )}
              <span className="truncate">{item.name}</span>
            </a>
          </Link>
        ))}
      </nav>
    </>
  )
}

export default SideNavigation
