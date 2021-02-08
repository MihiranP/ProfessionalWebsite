import React from 'react'
import {Link} from 'react-router-dom'
import img_aud from '../images/img_aud.png';
import img_grass from '../images/IMG7.JPG'

function CardItem3(props) {
    return (
        <div className="cards">
            {/* <h1>Welcome to my Website!</h1> */}
            <div className="cards_container">
                <div className="cards_wrapper">
                    <ul className="cards_items">
                    <li className="card_item">
                <figure className='cards_item_wrap'>
                </figure>
                    <h1>{props.header}</h1>
                    <h3>{props.subheader}</h3>
                    <a href={props.pdf}> <h3>{props.pdftext}</h3></a> 
                     <div className="cards_item_info">
                         <h6 className="cards_item_text">
                             {props.homep}
                         </h6>
                    <h5 className="cards_item_text">
                        {props.text}
                    </h5>
                    <h5 className="cards_item_text">
                        {/* {props.text1} */}
                        <a href='https://www.youtube.com/channel/UC0e3QhIYukixgh5VVpKHH9Q'>Code Bullet<br></br> </a>
                        <a href='https://www.youtube.com/c/Brackeys/featured'> Brackeys <br></br> </a>
                        <a href='https://www.youtube.com/channel/UCIabPXjvT5BVTxRDPCBBOOQ'> Dani <br></br> </a>
                        <a href='https://www.youtube.com/user/shiffman'> The Coding Train <br></br> </a>
                        <a href='https://www.youtube.com/user/Cercopithecan'> Sebastian Lague <br></br> </a>
                    </h5>
                    <h5 className="cards_item_text">
                        {props.text2}
                    </h5>
                    <h5 className="cards_item_text">
                        {props.text3}
                    </h5>
                    {/* <img className="audible_image" src={img_aud}>
                    </img> */}
                    <h5 className="cards_item_text">
                        {props.text4}
                    </h5>
                    <h5 className="cards_item_text">
                        {props.text5}
                    </h5>
                    <h5 className="cards_item_text">
                        {props.text6}
                    </h5>

                    <img className="audible_image" src={img_grass}>
                    </img>

                    
                    <h5 className="cards_item_text">
                        {props.text7}
                    </h5>
                    <h5 className="cards_item_text">
                        {props.text8}
                    </h5>
                    <h5 className="cards_item_text">
                        {props.text9}
                    </h5>
                    <img className="cards_item_img" src={props.image}>
                    </img>
                    <figcaption className="figure-caption">
                        {props.caption}
                    </figcaption>

                </div>
            </li>
                    </ul>
                </div>
            </div>

        </div>

    )
}

export default CardItem3

