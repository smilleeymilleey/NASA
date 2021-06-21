import React from 'react'
import "../src/Nasa.css"

function Nasa() {
    return (
        <div class="container">
        <div class="row">
            <div class="nasaTitle col-sm-5 col-md-6">Nasa Data Title </div>
            <div class="nasaDataOne col-sm-5 offset-sm-2 col-md-6 offset-md-0">API INFO HERE</div>
        </div>
        <div class="row">
            <div class="nasaDataTwo col-sm-6 col-md-5 col-lg-6">More Nasa Data Title</div>
            <div class="nasaDataThree col-sm-6 col-md-5 offset-md-2 col-lg-6 offset-lg-0">API INFO HERE</div>
        </div>
        </div>
    )
}

export default Nasa
