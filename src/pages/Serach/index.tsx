import React, { useEffect } from 'react'
import { useLocation, useParams } from 'react-router-dom'

function Search() {
  const location = useLocation()
  const { keyword } = useParams()

  useEffect(() => {
    console.log(keyword)
  }, [location])

  return <>Hello</>
}

export default Search
