import React, { useState } from 'react';
import video from './tiger.mp4'
import Modal from './Modal';

function Hero() {

    let [ modalState, setModalState ] = useState(false)


    function onCloseHandler() {
        setModalState(false)
    }

    function onOpenHandler() {
        setModalState(true)
    }


    return(
        <React.Fragment>
        <div className="container col-xxl-8 px-4 py-5">
            <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div className="col-10 col-sm-8 col-lg-6">
              {/*  <img src="./bootstrap-themes.png" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" /> 
              <video poster="tiger.png" width="700" height="500" controls="" autoplay="" loop="" muted="">
                <source src="tiger.mp4" type="video/mp4" />
             </video> */}

                <video controls autoPlay loop muted width="600">
                    <source src={video} type="video/mp4" />
                </video>

            </div>
            <div className="col-lg-6" style={{"textAlign":"center"}}>
                <h1 className="display-5 fw-bold lh-1 mb-3"style={{"color":"#ffc107","textAlign":"center", "padding":"5px", "marginBottom":"15px","color":"#ffc107", "lineHeight":"normal"}}>A small donation ensures their future</h1>
                <p className="lead">Get your free information pack today to find out more about leaving a lasting legacy to animals in need.</p>
                <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                <button type="button" 
                onClick={onOpenHandler}
                className="btn btn-primary btn-lg px-4 my-3">Donate Now</button>
                
                </div>
            </div>
            </div>
        </div>
        {modalState === true && <Modal onCloseHandler={onCloseHandler}/>}
        </React.Fragment>
    )
}

export default Hero;