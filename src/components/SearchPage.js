import {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {fetchJobs} from '../reducers/jobsearchSlice'

import TableOfData from './TableOfData'

const SearchPage = () => {

  const [isFullTimeOnly, setFullTimeOnly] = useState(false);
  const [isLocation, setLocation] = useState('');
  const [searchTerms, setSearchTerms] = useState('');

  const dispatch = useDispatch();
  const pageNumber = useSelector(state => state.githubJobs.pageNumber)

  const paramsObj = {};

  const employmentTypeChange = () => {
    isFullTimeOnly ? setFullTimeOnly(false) : setFullTimeOnly(true);
  }

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  }

  const handleSearchTermsChange = (e) => {
    setSearchTerms(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isLocation) Object.assign(paramsObj, {location: isLocation})
    if (searchTerms) Object.assign(paramsObj, {description: searchTerms})
    if (isFullTimeOnly) Object.assign(paramsObj, {full_time: isFullTimeOnly})
    Object.assign(paramsObj, {page: 1})

    let resetPaginationNumber = 1;

    dispatch(fetchJobs(paramsObj, resetPaginationNumber));
  }

  return (
    <>
    <div className='inputGroupContainer'>
      <form onSubmit={handleSubmit}>
        <div className="fieldGroup">
          <label htmlFor="checkbox">Full Time Only:
            <input 
              onChange={employmentTypeChange} 
              type="checkbox" 
              id="checkbox" 
              name="checkbox"
              checked={isFullTimeOnly} />
          </label>
        </div>
        <div className="fieldGroup">
          <label htmlFor="location">Location: 
            <input 
              id="location" 
              type="text" 
              name="location"
              onChange={handleLocationChange} 
              value={isLocation} />
          </label>
        </div>
        <div className="fieldGroup">
          <label htmlFor="search">Search: 
            <input 
              id="search" 
              type="text" 
              name="search"
              value={searchTerms}
              onChange={handleSearchTermsChange} />
          </label>
        </div>
        <button type="submit">Go</button>
      </form>
    </div>
    <TableOfData params={paramsObj}/>
    </>
  )
}

export default SearchPage;