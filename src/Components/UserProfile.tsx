

import useAuthFetch from '../hooks/useAuthFetch'

const UserProfile = () => {

    useAuthFetch({url : "http://localhost:8000/user"})

    return (
        <div>
            <h1>sasa</h1>
        </div>
    )

}

export default UserProfile