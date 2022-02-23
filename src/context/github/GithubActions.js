const URL = process.env.REACT_APP_URL
const TOKEN = process.env.REACT_APP_TOKEN

export const searchUsers = async(text)=>{
    const params = new URLSearchParams({
        q:text
    })
    const response = await fetch(`${URL}/search/users?${params}`, {headers: {Authorization:`token ${TOKEN}`}})
    const {items} = await response.json();
    return items
}

export const getUserRepos = async (login) => {
    const params = new URLSearchParams({
        sort: 'created',
        per_page: 10
    })
    const response = await fetch(`${URL}/users/${login}/repos?${params}`, { headers: { Authorization: `token ${TOKEN}` } })
    const data = await response.json();
    return data
}
export const getUser = async (login) => {
    const res = await fetch(`${URL}/users/${login}`, { headers: { Authorization: `token ${TOKEN}` } })

    if (res.status === 404) {
        window.location = '/notfound'
    } else {
        const data = await res.json();
        return data
    }
}