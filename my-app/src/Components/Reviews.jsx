//imports 
import React from "react";
import '../Styles/Reviews.css'
import { AiFillStar } from 'react-icons/ai';
//imports
function Reviews (){
    return(
        <div className="mainContainer__reviews">

            <div className="review-container">
                <div className="review-stars"><AiFillStar className="review-star"/><AiFillStar className="review-star"/><AiFillStar className="review-star"/><AiFillStar className="review-star"/><AiFillStar className="review-star"/></div>

                <p className="review-text">
                I couldn't be happier with the work Thick Brush Painting Co. did on my home. The team is professional, friendly and efficient. The quality of the work is exceptional and the colors and finishes are stunning. They were also respectful and considerate of my home and belongings. Communication was clear and open throughout the process. The pricing was also very reasonable and competitive. I highly recommend Thick Brush for anyone looking for a reliable and high-quality painting company. Thank you for helping me transform my home.<br></br> <br></br>María</p>
            </div>

        </div>
    );
}

export default Reviews;