import React from 'react'
import {Link} from 'react-router-dom'

function CardItem(props) {
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
                        {props.text1}
                        <a href={props.link1}>{props.link1t}</a>
                    </h5>
                   
                    <h5 className="cards_item_text">
                        {props.text2}
                        <a href={props.link2}>{props.link2t}</a>
                    </h5>
                    <h5 className="cards_item_text">
                        {props.text3}
                    </h5>
                    <h5 className="cards_item_text">
                        {props.text4}
                        <a href={props.link3}>{props.link3t}</a>
                    </h5>
                    <h5 className="cards_item_text">
                        {props.text5}
                    </h5>
                    <h5 className="cards_item_text">
                        {props.text6}
                    </h5>
                    <h5 className="cards_item_text">
                        {props.text7}
                    </h5>
                    <h5 className="cards_item_text">
                        {props.text8}
                    </h5>
                    <h5 className="cards_item_text">
                        {props.text9}
                    </h5>
                    <img className="cards_item_img1" src={props.image}>
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

export default CardItem

