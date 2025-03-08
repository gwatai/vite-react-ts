type Auth = {
    url: string
}



const useAuthFetch = (url: Auth)  => {

    localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoiZm9vIiwiaWF0IjoxNzQxNDIxNjUzLCJleHAiOjE3NDE0MjUyNTN9.vn1cTgrDqwv5FvHGGioC9KyyVyeHJZDZktxi1K7SItg')

    return localStorage.getItem('token')
    

}


export default  useAuthFetch;

