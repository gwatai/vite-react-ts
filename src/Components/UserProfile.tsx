type Auth = {
    url: string
}

import useAuthFetch from '../hooks/useAuthFetch'


const UserProfile = (url : Auth) => {

    console.log("use auth fetch", useAuthFetch)

    return (
        <div>
            <h1>sasa</h1>
        </div>
    )


    

}

export default UserProfile