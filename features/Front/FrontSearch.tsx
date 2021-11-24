import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, Input } from '@superciety/pwa-core-library'
import { useRouter } from 'next/router'
import { SyntheticEvent, useState } from 'react'

export const FrontSearch = () => {
  const router = useRouter()

  const handleSearch = (event: SyntheticEvent) => {
    event.preventDefault()
    router.push(`/`)
  }

  return (
    <form onSubmit={handleSearch} className="w-full flex items-center">
      <Input placeholder="search for super ids, dapps, fellowships, quests, ..." value={''} onChange={val => {}} autoFocus />
      <Button color="blue" className="block ml-2 h-12" submit>
        <FontAwesomeIcon icon={faSearch} className="text-white" />
        <span className="sr-only">Search</span>
      </Button>
    </form>
  )
}
