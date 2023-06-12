import axios from "axios";
import {getUsersThunkCreator} from "../redux/usersReducer";

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    header: {
        "API-KAY": ""
    }

})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            });
    },
    follow(userId) {
        return instance.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
    },
    unFollow(userId) {
        return instance.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
    },
    getProfile(currUserId) {
        return axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + currUserId);
    }
}


export const getUsers = (currentPage = 1, pageSize = 2) => {

    return instance.get(`users?page=${currentPage}$count=${pageSize}`,
        {
            withCredentials: true
        })
        .then(response => response.data)

}

export const getUsers2 = (currentPage = 1, pageSize = 2) => {

    return axios.get(`follow?page=${currentPage}$count=${pageSize}`,
        {
            withCredentials: true
        })
        .then(response => response.data)
}

