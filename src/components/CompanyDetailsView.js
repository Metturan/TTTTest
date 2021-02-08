import { useSelector } from 'react-redux';

const CompanyDetailsView = () => {

  const postDetails = useSelector(state => state.githubJobs.jobPost);

  if (postDetails.length !== 0) {
    return (
      <div className='detailsContainer'>
        <img className='detailsLogo' src={postDetails.company_logo} alt={postDetails.company}/>
        <h1><a href={postDetails.company_url}>{postDetails.company}</a></h1>
        <p>Location: {postDetails.location}</p>
        <p>Title: {postDetails.title}</p>
        <p>Type: {postDetails.type}</p>
        <p dangerouslySetInnerHTML={{__html: postDetails.description}}></p>
        <p>Created At: {postDetails.created_at}</p>
      </div>
    )
  } else {
    return <div>Loading..</div>
  }
}

export default CompanyDetailsView;