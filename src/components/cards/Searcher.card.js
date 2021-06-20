import React from 'react'
import { useDispatch } from 'react-redux'
import { setFilterStatus, updateQuery } from '../../slices/ArtistEvents.slice'

const Searcher = () => {
  let dispatch = useDispatch()

  let handleQuery = (e) => {
    let query = e.target.value
    if (query !== ""){
      dispatch(setFilterStatus(true))
      dispatch(updateQuery(e.target.value))
    } else {
      dispatch(setFilterStatus(false))
      dispatch(updateQuery(""))
    }
  }

  return (
    <>
      <input id="query" onChange={handleQuery}/>
    </>
  )
}

export default Searcher