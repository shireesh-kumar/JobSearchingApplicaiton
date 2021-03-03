import React from 'react'
import errorimage from './404image.png'
import './PageNotFound.css'
import HomeHeader from './../Header/HomeHeader';

export default function PageNotFound() {
    return (
        <div>
            <HomeHeader title="TopJobs" />
            <div id="notFoundContainer" className="mx-auto d-flex">
                <img id="notFoundImage" className="pt-5" src={errorimage} alt="404" />
            </div>
        </div>
    )
}