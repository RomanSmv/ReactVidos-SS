




export const getUsersSelector = (state: any) => {
    return state.usersPage.users
}

export const getPagesSizeSelector = (state: any) => {
    return state.usersPage.pageSize
}
export const getTotalUsersCountSelector = (state: any) => {
    return state.usersPage.totalUsersCount
}
export const getCurrentPageSelector = (state: any) => {
    return state.usersPage.currentPage
}
export const getIsFetchingSelector = (state: any) => {
    return state.usersPage.isFetching
}
export const getFollowingInProgress = (state: any) => {
    return state.usersPage.followingInProgress
}