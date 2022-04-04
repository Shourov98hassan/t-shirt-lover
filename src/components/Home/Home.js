import React from 'react';
import { useNavigate } from 'react-router-dom';
import Reviews from '../Reviews/Reviews';

import './Home.css'

const Home = ({datas}) => {

    // const datas = [
    //     { name: 'Shourov', title: 'Your products are so nice.', ratings: 4.5 },
    //     { name: 'Kamrul', title: 'Amazing collections.', ratings: 4.9 },
    //     { name: 'Hanssan', title: 'All products are good.', ratings: 4.7 },
    //     { name: 'Atikur', title: 'Nice collection bro!', ratings: 4.6 },
    //     { name: 'Sagor', title: 'Awesome tshirts', ratings: 4.5 },
    //     { name: 'Shamim', title: 'Simple but gorgeous', ratings: 4.5 },
    // ]

    const navigate = useNavigate();

    const handleReview = () => {
        const path = '/reviews/';
        navigate(path);
    }
    return (
        <div>

            <div className='home-container'>
                <div className="home-left">
                    <h1>Our tshirt collection is simple but</h1>
                    <h1><span className='header-title'>if you wear it,you looks fantastic!</span></h1>
                    <p>We always try to our best to pleased our honorable customers.our products quality is so good.<br />
                        we always try to gift the best products to our customer in reasonable prices.if customer happy,then we are happy!</p>
                    <button className='btn'>Our Collections</button>

                </div>

                <div className="home-right">
                    <img src="https://media.istockphoto.com/photos/plain-red-tee-shirt-isolated-on-white-background-picture-id471188329?k=20&m=471188329&s=612x612&w=0&h=NowWqlCvN1jm7JbqxeQPke0WJHd0LbPI2qFKWlr_F20=" alt="" />

                </div>



            </div>

            <div className='home-review'>
                <h1 className='customer-review'>Customer Reviews (3)</h1>
                {
                    datas.slice(0, 3).map(data => <Reviews data={data} /> )

                }



               
                <button onClick={handleReview} className='review-btn'>See All Reviews</button>

            </div>
        </div>
    );
};

export default Home;