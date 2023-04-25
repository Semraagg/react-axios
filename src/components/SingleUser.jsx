import React from "react";


const SingleUser = ({user}) =>{
    return(
        <div className="single-user">
<img src={user.picture.large} alt='' />
<div className="user-info">
    <h3>{user.name.first}{user.name.last}</h3>
</div>
<p className="user-email">
<span> Email:</span>  {user.email}
</p>
<p className="user-loc">
    <span>Location:</span>
    {user.location.country} {user.location.city}</p>
        </div>
    )
}

export default SingleUser;