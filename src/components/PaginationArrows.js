import {useSelector, useDispatch} from 'react-redux';
import {incrementPage, decrementPage} from '../reducers/jobsearchSlice'

const PaginationArrows = (props) => {

  const pageNumber = useSelector(state => state.githubJobs.pageNumber);
  const dispatch = useDispatch();

  return (
    <div className='arrows'>
      {pageNumber > 1 ? <span onClick={() => dispatch(decrementPage(pageNumber, props.params))}>{'<'}</span> : <span></span>}
      <span>{pageNumber}</span>
      <span onClick={() => dispatch(incrementPage(pageNumber, props.params))}>{'>'}</span>
    </div>
  )
}

export default PaginationArrows;