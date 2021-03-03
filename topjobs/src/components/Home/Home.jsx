import React from 'react'
import HomeHeader from './../Header/HomeHeader';

export default function Home() {
    return (
        <div>
            <HomeHeader title="TopJobs" />
            <div id="carouselExampleCaptions" className="carousel slide mx-auto h-50" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://content.admin.blueice.com/media/images/pages/32861/Promo-Hero-Classique-1920x500.jpg" className="d-block w-100" alt="Welcome to TopJobs" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Welcome to TopJobs!</h5>
                            <p>Where your dreams come true.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://eshopadventures.mycartzy.com/media/image.php?width=120&height=120&imgfile=catalog_data/6b00cb36-d584-6b62-4fc5-89f7c90de025.jpg" className="d-block w-100" alt="Looking for your dream job?" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Are you looking for your dream job?</h5>
                            <p>You're at the right place!</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://www.cleartosend.net/wp-content/uploads/2021/02/nasa-Q1p7bh3SHj8-unsplash-1920x500.jpg" className="d-block w-100" alt="Apply now" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Apply now!</h5>
                            <p>What are you waiting for?</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
