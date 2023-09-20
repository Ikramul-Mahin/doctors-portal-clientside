import React from 'react';
import chair from '../../../assets/images/chair.png'
const Banner = () => {
    return (
        <div className="hero  text-black">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img alt='banner' src={chair} className="rounded-lg w-1/2 shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">Your New Smile Start Here</h1>
                    <p className="py-6">Thank you for visiting our dental website. We hope it provides valuable insights into the high-quality care we offer and serves as a valuable resource for all your dental inquiries. Your smile is our priority, and we look forward to welcoming you to our practice!</p>
                    <button className="btn bg-gradient-to-r from-primary border-none to-neutral text-white">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;