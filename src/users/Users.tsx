import React from 'react'
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

let Users = (props: any) => {

    return <div>
        <Paginator currentPage={props.currentPage} onPageChanged={props.onPageChanged}
                   totalUsersCount={props.totalUsersCount} pageSize={props.pageSize}
                   portionSize={10}
        />
        <div>
            {
                props.users.map((u: any) => <User user={u}
                                                  key={u.id}
                                                  followingInProgress={props.followingInProgress}
                                                  unfollow={props.unfollow}
                                                  follow={props.follow}
                />
                )
            }
        </div>
    </div>
}
export default Users