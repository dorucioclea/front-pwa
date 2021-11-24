import React from 'react'
import { ScyIdentity } from '@superciety/pwa-core-library'

interface IProps {
  identity: ScyIdentity
}

const _FreeiamRankOverview = ({ identity }: IProps) => {
  if (!identity.rank) return null

  const ranks = [
    ['I', 'Sleeper', '#7F8FA6', 'sleeper.png'],
    ['II', 'Seeker', '#353B48', 'seeker.png'],
    ['III', 'Believer', '#FBC531', 'believer.png'],
    ['IV', 'Dreamer', '#F05F4D', 'dreamer.png'],
    ['V', 'Go-Getter', '#ED3258', 'go-getter.png'],
    ['VI', 'Transcendent', '', 'transcendent.png'],
  ]

  const isLastNumeral = (numeralIndex: number) => numeralIndex + 1 === ranks.length

  const getImageOpacityClassName = (rankName: string) => (identity.rank !== rankName ? 'opacity-25' : 'opacity-100')

  const isUserRank = (rankName: string) => identity.rank === rankName

  return (
    <div className="pb-12">
      <ul className="flex justify-between -mx-4 md:mx-0 md:px-2">
        {ranks.map((rank, index) => (
          <li key={'rankimage' + rank[1]} className="w-1/5 flex justify-center ">
            <img
              src={`/images/freeiam-ranks/${rank[3]}`}
              alt={`Rank Emblem: ${rank[1]}`}
              className={`w-12 h-12 md:w-20 md:h-20 ${getImageOpacityClassName(rank[1])}`}
            />
          </li>
        ))}
      </ul>
      <ul className="flex items-center mt-4 md:px-12 lg:px-20 ">
        {ranks.map((rank, index) => (
          <li key={rank[1]} className={`relative ${!isLastNumeral(index) ? 'w-1/5' : ''}`}>
            {!isLastNumeral(index) && (
              <div className="absolute inset-0 flex items-center">
                <div className="h-2 w-full" style={{ background: rank[2] }}></div>
              </div>
            )}
            <span className="relative w-8 h-8 flex items-center justify-center text-white font-bold font-head bg-gray-800 rounded-full">
              {rank[0]}
              <span
                className={`absolute bottom-0 left-0 flex justify-center items-center text-gray-500 font-text h-8 w-12 sm:w-20 md:w-32 -mb-10 md:-mb-8 text-xs sm:text-base text-center ${
                  isUserRank(rank[1]) ? 'text-indigo-500 font-bold' : ''
                }`}
                style={{ transform: 'translateX(-38%)' }}
              >
                {rank[1]}
              </span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default _FreeiamRankOverview
