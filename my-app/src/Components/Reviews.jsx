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

                <p className="review-text">I loved di servis mai friend, rili cuik and wel dan. If i wil recomendo, of corse i will recomendo again <br></br> <br></br>Maria la pedorra</p>
            </div>

        </div>
    );
}

export default Reviews;