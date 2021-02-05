import loadingGif from "../../assets/images/loading.gif";
import React from "react";


let Preloader = (props: any) => {
    return <div style={{backgroundColor: 'white'}}>
        <img src={loadingGif} />
    </div>
}

export default Preloader