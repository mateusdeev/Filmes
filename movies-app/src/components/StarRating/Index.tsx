import { MdStar } from "react-icons/md";
import { MdStarBorder } from "react-icons/md";
import './index.scss'

import React from 'react'
export interface Props {
    rating: number
}

const StarRating = (props: Props) => {

    const numStars = Math.round(props.rating / 2)

    const fullStars = []
    const emptyStars = []

    for(let i = 0; i < 5; i++) {
        if(i < numStars) {
            fullStars.push(i)
        } else {
            emptyStars.push(i)
        }
    }

  return (
      <div className="movie-rate">
        {fullStars.map(index => 
            <MdStar key={index} />
            
        )}
         {emptyStars.map(index => 
            <MdStarBorder key={index} />
            
        )}
        
      </div>
  )
}

export default StarRating
