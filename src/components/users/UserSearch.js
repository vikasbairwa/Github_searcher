import React,{useState, useContext} from 'react'
import GithubContext from '../../context/github/GithubContext'
import AlertContext from '../../context/alert/AlertContext'
import {searchUsers} from '../../context/github/GithubActions'
function UserSearch() {
    const [text, setText] = useState('')

    const {users, dispatch} = useContext(GithubContext)

    const {setAlert} = useContext(AlertContext)

    const handleChange=(e)=>{
        setText(e.target.value)
    }
    const handleSubmit=async (e)=>{
        e.preventDefault()

        if(text===''){
            setAlert('Please input something', 'error')
        } else{
            dispatch({type:'SET_LOADING'})
            const users = await searchUsers(text)
            dispatch({type: 'GET_USERS', payload: users})
            setText('')
        }
    }
    
  return (
    <div className=" font-[serif] grid grid-col-1 place-items-center  text-size-md">
        <div className='w-1/2'>
        <form onSubmit={handleSubmit}>
            <div className="form-control">
                <div className="relative">
                    <input type="text" className=" w-full shadow-lg   bg-neutral-content input input-bordered input-primary input-lg text-black" placeholder='Search' value={text} onChange={handleChange} />
                    <button className="absolute top-0 right-0 rounded-l-none width-36 btn btn-lg bg-zinc-800 text-cyan-100 " type='submit'>Go</button>
                </div>
            </div>
        </form>
        </div>
        <div>
            <button className="btn btn-ghost btn-md my-2 " onClick={()=>dispatch({type:'CLEAR'})}>Clear</button>
        </div>
    </div> 
  )
}

export default UserSearch