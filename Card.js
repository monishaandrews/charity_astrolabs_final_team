import { useState } from 'react';


function Card(props) {


    const [likeStatus, setLikeStatus] = useState(false);

    function likePost() {
        if (likeStatus === false) {
            setLikeStatus(true)
        } else {
            setLikeStatus(false)
        }
    }

    return (
        <div class="col-4" style={{"margin": "10px 0px"}}>
            <div class="card" style={{"width": "300px"}}>
                <img src={props.picture} width="300" alt="Profile"/>
                <div class="card-body">
                    <h5 class="card-title">{props.name}</h5>
                    <p class="card-text">{props.email}</p>

                    <button 
                    onClick={likePost} href="/" 
                    class={`btn ` + (likeStatus === true ? "btn-primary" : "btn-secondary") }>
                        { likeStatus === true ? "Unlike" : "Like" }
                    </button>

                </div>
            </div>
        </div>
    );
}

export default Card;