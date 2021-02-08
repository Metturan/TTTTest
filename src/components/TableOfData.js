import {useSelector} from 'react-redux'
import {useHistory} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {getJobPost} from '../reducers/jobsearchSlice'

import PaginationArrows from './PaginationArrows'

const TableOfData = (props) => {

  const listOfJobs = useSelector(state => state.githubJobs.listOfJobs)

  const headerItems = ['Company Name', 'Role', 'Location', 'Type', 'Created At'];

  if (listOfJobs.length !== 0) {
    return (
      <>
      <table>
        <thead>
          <tr>
            {headerItems.map((item, i) => {
              return (
                <th key={item}>{item}</th>
              )
            })}
          </tr>
        </thead>
        <tbody>
          {listOfJobs.map((item, i) => {
            return (
              <tr key={i}><RowData id={item.id} item={item} /></tr>
            )
          })}
        </tbody>
      </table>
      <PaginationArrows params={props.params}/>
      </>
    )
  }
  return (
    null
  )
}

export default TableOfData;


const RowData = (props) => {

  const dispatch = useDispatch();
  const history = useHistory();

  const handleRedirect = () => {
    dispatch(getJobPost(props.id))
    history.push(`/job/${props.id}`)
  }

  return (
    <>
     <td style={{cursor:'pointer'}} onClick={handleRedirect} key={props.id + "td1" }>{props.item.company}</td>
     <td key={props.id + "td2" }>{props.item.title}</td>
     <td key={props.id + "td3" }>{props.item.location}</td>
     <td key={props.id + "td4" }>{props.item.type}</td>
     <td key={props.id + "td5" }>{props.item.created_at}</td>
    </>
  )
}