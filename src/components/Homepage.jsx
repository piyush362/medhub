import React from 'react'
import './homepage.css'

function Homepage() {
    return (
        <div >
            <nav>
                <img src='https://res.cloudinary.com/dkr75ykb4/image/upload/v1667656693/medhub/medhublogo_x6cna3.png' alt="medhublogo" />
                <h1>MedHub </h1>
            </nav>
            <div className='homepage-container'>
                <img src="https://res.cloudinary.com/dkr75ykb4/image/upload/v1667657020/medhub/hero_ichj4k.png" alt="heroimage" />
                <div className="text-container">
                    <h2>MedHub Welcomes You</h2>
                    <p>A Place to Assist your Medical Storage and help  you to take care the needs and requirement of your customers</p>
                    <button>Get Start</button>
                </div>
            </div>
        </div>
    )
}

export default Homepage