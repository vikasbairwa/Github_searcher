import React,{useEffect, useContext} from 'react'
import { useParams } from 'react-router-dom'
import GithubContext from '../context/github/GithubContext'
import {FaCodepen, FaStore, FaUserFriends, FaUsers} from 'react-icons/fa'
import Spinner from '../components/layout/Spinner'
import { Link } from 'react-router-dom'
import RepoList from '../components/repos/RepoList'
import {getUser, getUserRepos} from '../context/github/GithubActions'
function User() {
  const {user, loading, dispatch,repos} = useContext(GithubContext)

  const params = useParams();
  useEffect(() => {
    dispatch({type:'SET_LOADING'})
    const getUserData = async()=>{
      const userData = await getUser(params.login)
      dispatch({type:'GET_USER', payload: userData})

      const userRepoData = await getUserRepos(params.login)
      dispatch({type:'GET_REPOS', payload: userRepoData})
    }
    getUserData()
  }, [])

  const {
    name, 
    type,
    avatar_url,
    location,
    bio,
    blog,
    twitter_username,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable
  } = user

  if(loading){
    return <Spinner/>
  }

  return (
    <>
    <div className="w-full mx-auto font-[serif]">
      <div className="mb-4">
        <Link to='/' className='btn btn-ghost'>Back To Search</Link>

      </div>
      <div className="grid grid cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-1 mb-8 md:gap-5">
        <div className="custom-card-image mb-6 md:mb-0 md:card-compact">
          <div className="rounded-lg shadow-xl card image-full">
            <figure>
              <img src={avatar_url} alt="" />
            </figure>
            {/* <div className="card-body justify-end">
              <h2 className="card-title mb-0">
                {name}
              </h2>
              <p>{login}</p>
            </div> */}
          </div>
        </div>
        <div className="col-span-2 ">
          <div className="mb-6">
            <h1 className=" text-3xl card-title">
              {name}
              <div className="ml-2 mr-1 badge badge-success">
                {type}
              </div>
              {hireable &&(
                <div className="mx-1 badge badge-info">
                  Hirealble
                </div>
              )}
            </h1>
            <p className='md:w-auto sm:w-auto'>{bio}</p>
            <div className="mt-4 card-actions">
              <a href={html_url} target='blank' className='btn btn-outline' rel='noreferrer'>
                Visit Github Profile
                </a>
            </div>
          </div>
          <div className="w-full rounded-lg shadow-md hover:shadow-indigo-500/50 bg-zinc-800 stats">
            {location &&(
              <div className="stat">
                <div className="stat-title text-md">Location</div>
                <div className="text-lg stat-value">{location}</div>
              </div>
            )}
            {blog  &&(
              <div className="stat">
                <div className="stat-title text-md">Website</div>
                <div className="text-lg stat-value">
                  <a href={`https://${blog}`} target='_blank' rel='noreferrer'
                  >
                    {blog}
                    </a>
                </div>
              </div>
            )}
            {twitter_username  &&(
              <div className="stat">
                <div className="stat-title text-md">Twitter</div>
                <div className="text-lg stat-value">
                  <a href={`https://twitter.com/${twitter_username}`} target='_blank' rel='noreferrer'
                  >
                    {twitter_username}
                    </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="w-full  rounded-lg shadow-md bg-base-100 xl:py-5 xl:mb-6 xl:stats lg:py-5 lg:mb-6 lg:stats sm:py-1 md:mb-1 md:stats-vertical sm:py-1 sm:mb-1 sm:stats-vertical">
        <div className="stat">
          <div className="stat-figure text-secondary">
            <FaUsers className='text-3xl md:text-5xl '/>
          </div>
          <div className="stat-title pr-5 ">
            Followers
          </div>
          <div className="stat-value pr-5 text-3xl md:text-4xl ">
            {followers}
          </div>
        </div>
        <div className="stat">
          <div className="stat-figure text-secondary">
            <FaUserFriends className='text-3xl md:text-5xl '/>
          </div>
          <div className="stat-title pr-5 ">
            Following
          </div>
          <div className="stat-value pr-5 text-3xl md:text-4xl">
            {following}
          </div>
        </div>
        <div className="stat">
          <div className="stat-figure text-secondary">
            <FaCodepen className='text-3xl md:text-5xl '/>
          </div>
          <div className="stat-title pr-5 ">
            Public Repos
          </div>
          <div className="stat-value pr-5 text-3xl md:text-4xl ">
            {public_repos}
          </div>
        </div>
        <div className="stat">
          <div className="stat-figure text-secondary">
            <FaStore className='text-3xl md:text-5xl'/>
          </div>
          <div className="stat-title pr-5 ">
            Public Gists
          </div>
          <div className="stat-value pr-5 text-3xl md:text-4xl ">
            {public_gists}
          </div>
        </div>
      </div>
      <RepoList repos={repos}/>
    </div>
    </>
  )
}

export default User