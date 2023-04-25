import React from  "react"
import { useState, useEffect } from "react"
import axios from "axios"
//components
import SingleUser from "./SingleUser"
const Userlist =() =>{
    const[users, setUsers] = useState([])

    const fetchUsers = async () =>{
        const response = await axios.get("https://randomuser.me/api/?results=5")
        setUsers(response.data.results)
    }
    

    useEffect( ()=> {
        fetchUsers()
    },[] )
    return (
        <div className="user-list">
            <ul>
                {users.map((user,idx) => (
<li>
    <SingleUser user={user} key={idx}></SingleUser>
</li>
))}
            </ul>
        </div>
    )
}

export default Userlist