import { useState } from 'react';
import Swal from 'sweetalert2';
import axiosInstance  from '../api/axios.js';

type Auth = {
    url: string
}

const useAuthFetch = (url: Auth)  => {

    const {loading, setLoading} = useState<boolean>(false)
    // const {error, setError} = useState<string | null>(null)

    localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoiZm9vIiwiaWF0IjoxNzQxNDIxNjUzLCJleHAiOjE3NDE0MjUyNTN9.vn1cTgrDqwv5FvHGGioC9KyyVyeHJZDZktxi1K7SItg')

    const token = localStorage.getItem('token')

    Swal.fire({
        title: "Loading...",
        text: "Please wait",
        allowOutsideClick: false,
        showConfirmButton: false,
        willOpen: () => {
            Swal.showLoading()
        }
    })

    axiosInstance.get(url.url, {
        headers : {
            "Authorization" : `Bearer $token`,
            "Accept" : "application/json",
            "withCredentials" : true,
            "withXSRF" : true
        }
    }).then((res) => {
        Swal.close()
        console.log(res)
    }).catch((err) => {
        console.log(err)
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong! Please try again later."
        })
    })


    

}


export default  useAuthFetch;

