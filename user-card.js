import React from "react";
import './loader.css';
import "./user-style.css";
export default function UserCards({users,isLoading}) {
  return (
    <>
      {isLoading ? (
            <div className="loader">
            <div className="loadingspinner">
                <div id="square1"></div>
                <div id="square2"></div>
                <div id="square3"></div>
                <div id="square4"></div>
                <div id="square5"></div>
            </div>
          </div>
        ) : (
          <div className="container">
          {users.map(({id,first_name,last_name,email,avatar}) =>( 
            <div className="card">
                <div className="imgContainer">
                    <img src={avatar} alt="..." />
                </div>
                <div className="card-body">
                    <h2 className="card-title" key={id} >
                        {first_name} {last_name}
                    </h2> 
                    <p className="card-text">
                        {email}
                    </p>
                </div>
            </div>  
            ))}
            <div class="b-space"></div>
            </div>
         )}
    </>
  );
}