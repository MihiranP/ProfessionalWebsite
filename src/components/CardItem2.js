import React from 'react'
import {Link} from 'react-router-dom'
import nutri from '../images/nutri.png'
import spy from '../images/Spy.png'


function CardItem2(props) {
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
                    </h5>
                    <ul>
                        <li>{props.li11}</li>
                        <li>{props.li12}</li>
                    </ul>
                    <h5 className="cards_item_text">
                        {props.text2}
                    </h5>

                    <h5 className="cards_item_text">
                        {props.text3}
                    </h5>

                    <ul>
                        <li>{props.li21}</li>
                        <li>{props.li22}</li>
                        <li><a href='https://devpost.com/software/nutriapp'>{props.li23}</a></li>
                    </ul><img src={nutri} className='nutri'></img>

                    <h5 className="cards_item_text">
                        {props.text4}
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

                    <ul>
                        <li>{props.li31}</li>
                        <li>{props.li32}</li>
                        <li><a href='https://devpost.com/software/nutriapp'>{props.li33}</a></li>
                    </ul><img src={spy} className='spy'></img>

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

export default CardItem2

