import React, {useEffect, useState} from "react";

type PropsType = {
    status: string
    updateStatus: (status: string) => void
    /*editMode: boolean*/

}



const ProfileStatusHooks = (props: PropsType ) => {

    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    useEffect( () => {
        setStatus(props.status)
        }, [props.status])

const activateEditMode = () => {
        setEditMode(true)
    }

    const deActivateEditMode = () => {
   setEditMode(false)
        props.updateStatus(status)

    }

   const onStatusChange = (e: any) => {
        setStatus(e.currentTarget.value)

    }

    return (
        <>
            {!editMode &&
                <div >
                    <span onDoubleClick={activateEditMode}>{props.status || "-----"} </span>
                </div>
            }
            {editMode &&
            <div>
                <input onChange={onStatusChange} onBlur={deActivateEditMode} autoFocus={true} value={status}/>
            </div>
            }
        </>
    )
}
export default ProfileStatusHooks