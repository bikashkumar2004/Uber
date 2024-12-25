import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export const CaptionLogout = () => {

    const token = localStorage.getItem('token')
    const navigate = useNavigate()

    axios.get(`${import.meta.env.VITE_API_URL}/caption/logout`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }).then((response) => {
        if (response.status === 200) {
            localStorage.removeItem('token')
            navigate('/caption-login')
        }
    })

    return (
        <div>Caption Logout</div>
    )
}

export default CaptionLogout
