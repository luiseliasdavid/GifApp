import {useEffect,useState} from 'react'
import { getGifs } from '../helpers/getGifts'
import { useFetchGifs } from '../hooks/useFetchGifs';
import {GifItem} from './GifItem';
import PropTypes from 'prop-types'

export const GifGrid =({ category })=> {


  const {images, isLoading} = useFetchGifs(category)
  //console.log({isLoading})

  return (
    <>
      <h3> {category} </h3>
      {
        isLoading && <h5>Loading...</h5>
      }
      <div className='card-grid'>
      {
        images.map(images => (
            <GifItem 
            key={images.id}
            {...images}  
            />
        ))
      }
      </div>
    </>
  )
}

GifGrid.proptypes = {
  category: PropTypes.string.isRequired,
}
