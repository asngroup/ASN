import axios from 'axios'
import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../Provider/AuthProvider'

const axiosSecure = axios.create({
	baseURL: 'http://localhost:4000',
})


const useAxiosSecure = () => {
	const navigation = useNavigate()

	const { logOut } = useContext(AuthContext)


	useEffect(() => {
		axiosSecure.interceptors.request.use(
			(config) => {
				const token = localStorage.getItem('access-token')

				config.headers.Authorization = `Bearer ${token}`
				return config
			},
			function (error) {
				return Promise.reject(error)
			},
		)

		axiosSecure.interceptors.response.use(
			(response) => {
				return response
			},
			async (error) => {
				const status = error.response.status ;
				if (status === 401 || status === 403) {
					await logOut()
					navigation('/login')
				}
				return Promise.reject(error)
			},
		)
	}, [logOut, navigation])

	return axiosSecure
}

export default useAxiosSecure;
