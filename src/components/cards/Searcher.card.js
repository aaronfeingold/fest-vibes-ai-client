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
      <div className="form-floating mb-3">
        <input type="query" className="form-control" id="floatingInput" placeholder="The Best Band Ever" onChange={handleQuery}/>
        <label htmlFor="floatingInput">Search by artist name</label>
      </div>
    </>
  )
}

export default Searcher