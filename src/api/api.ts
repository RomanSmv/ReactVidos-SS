import axios from "axios";
import {Action} from "redux";
import {ThunkAction} from "redux-thunk";
import {RootStateType} from "../redux/redux-store";
import {ProfileType} from "../redux/Profile-reduce";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "745e534b-8b78-47be-b3ba-d150cddfdec7"
    }
})

export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get<GetItemsType<Array<UserType>>>(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },

    follow(userId: number) {
        return instance.post<ApiResponseType>(`follow/${userId}`)
    },
    unfollow(userId: number) {
        return instance.delete<ApiResponseType>(`follow/${userId}`)
    },
    getProfile(userId: string) {
        return profileAPI.getProfile(userId)
    }
}

export const profileAPI = {

    getProfile(userId: string) {
        return instance.get<ProfileType>(`profile/` + userId)
    },
    getStatus(userId: string) {
        return instance.get('profile/status/' + userId)
    },
    updateStatus(status: string) {
        return instance.put('profile/status/', {status: status})
    }
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`,
            {withCredentials: true})
    },
    login(email:string, password:string, rememberMe = false) {
        return instance.post(`auth/login`, {email, password, rememberMe})
    },
    logout() {
        return instance.delete(`auth/login`)
    }

}



//types
export type ApiResponseType<D = {}> = {
    data: D
    messages: Array<string>
    resultCode: 0 | 1
}

export type GetItemsType<T> = {
    items: T
    totalCount: number
    error: string | null
}

//users
export type PhotosType = {
    small: string | null
    large: string | null
}
export type UserType = {
    id: number
    name: string
    status: string
    photos: PhotosType
    followed: boolean
}

//thunk typization
export type BaseThunkType<ActionType extends Action, Returns = Promise<void>> = ThunkAction<Returns, RootStateType, unknown, ActionType>

