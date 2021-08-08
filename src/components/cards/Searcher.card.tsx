import React from 'react'
import { useDispatch } from 'react-redux'
import { setFilterStatus, updateQuery } from '../../slices/ArtistEvents.slice'

const Searcher = () => {
  let dispatch = useDispatch()

  let handleQuery = (e: { target: { value: string } }) => {
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
    <div className="container-sm">
      <div className="row justify-content-center">
        <div className="card" style={{width: '30rem'}}>
          <div className="card-body">
            <input type="query" className="form-control" id="floatingInput" placeholder="The Best Band Ever" onChange={handleQuery}/>
            <label htmlFor="floatingInput">Search by artist name</label>
          </div>
          <br/>
        </div>
      </div>
    </div>
  )
}

export default Searcher