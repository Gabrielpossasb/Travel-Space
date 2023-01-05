import type { NextApiRequest, NextApiResponse } from 'next'
import { api } from '../../services/api'

export default async function handler( req: NextApiRequest, res: NextApiResponse ) {
  const data = req.body.headers

  if ( data.state === 'data_hover') {
    console.log(data.maxDate)
    const responseHoverData = await api.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${data.maxDate}&api_key=${'sWUFe4oFnFghqeRnplMaKgWSn3sX1IXnSgPMXvU3'}`)
    
    return res.status(201).json({
      data: responseHoverData.data.photos
    })
  }

  if ( data.state === 'image_day') {
    const imageDay = await api.get(`https://api.nasa.gov/planetary/apod?api_key=${'sWUFe4oFnFghqeRnplMaKgWSn3sX1IXnSgPMXvU3'}`)

    return res.status(201).json({
      data: imageDay.data
    })
  }

  if ( data.state === 'mission_manifest') {
    const responseManifest = await api.get(`https://api.nasa.gov/mars-photos/api/v1/manifests/curiosity?&api_key=${'sWUFe4oFnFghqeRnplMaKgWSn3sX1IXnSgPMXvU3'}`)

    return res.status(201).json({
      data: responseManifest.data.photo_manifest
    })
  }

  if ( data.state === 'hovers') {
    const responseHovers = await api.get(`https://api.nasa.gov/mars-photos/api/v1/rovers?&api_key=${'sWUFe4oFnFghqeRnplMaKgWSn3sX1IXnSgPMXvU3'}`)

    return res.status(201).json({
      data: responseHovers.data.rovers
    })
  }
  
  if ( data.state === 'nearby') {
    const responseNearby = await api.get(`https://ssd-api.jpl.nasa.gov/sentry.api`)
    const responseNearbyFiltredYear = responseNearby.data.data.filter((val: { last_obs: string }) => {
      return val.last_obs.slice(0, 4) === '2022' || val.last_obs.slice(0, 4) === '2023'
   })

    return res.status(201).json({
      data: responseNearbyFiltredYear
    })
  }
  
  return res.status(202).json({
  })
   
}
