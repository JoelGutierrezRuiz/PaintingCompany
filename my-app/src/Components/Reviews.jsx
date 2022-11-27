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
                    They always call and say, 'How did everything go?' and make sure that it's right, that the project was done to our satisfaction. They are very loyal to us, so we're very loyal to them. <br></br> <br></br>María</p>
            </div>

        </div>
    );
}

export default Reviews;