import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from 'axios'

export const AppContext = createContext()

const AppContextProvider = (props) => {

    const currencySymbol = '$'
    const backendUrl = import.meta.env.VITE_BACKEND_URL

    const [therapists, setTherapists] = useState([])
    const [token, setToken] = useState(localStorage.getItem('token') ? localStorage.getItem('token') : '')
    const [userData, setUserData] = useState(false)

    // Getting Therapists using API
    const getTherapistsData = async () => {

        try {

            const { data } = await axios.get(backendUrl + '/api/therapist/list')
            if (data.success) {
                setTherapists(data.therapists)
            } else {
                toast.error(data.message)
            }

        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }

    }

    // Getting User Profile using API
    const loadUserProfileData = async () => {

        try {

            const { data } = await axios.get(backendUrl + '/api/user/get-profile', { headers: { token } })

            if (data.success) {
                setUserData(data.userData)
            } else {
                toast.error(data.message)
                // clear invalid token so UI can show login properly
                localStorage.removeItem('token')
                setToken('')
                setUserData(false)
            }

        } catch (error) {
            console.log(error)
            toast.error(error.message)
            localStorage.removeItem('token')
            setToken('')
            setUserData(false)
        }

    }

    useEffect(() => {
        getTherapistsData()
    }, [])

    useEffect(() => {
        if (token) {
            loadUserProfileData()
        }
    }, [token])

    const value = {
        therapists, getTherapistsData,
        currencySymbol,
        backendUrl,
        token, setToken,
        userData, setUserData, loadUserProfileData
    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )

}

export default AppContextProvider