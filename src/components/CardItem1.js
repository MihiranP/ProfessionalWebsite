import React from 'react'
import {Link} from 'react-router-dom'

function CardItem1(props) {
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
                    <h3>Email: mihiran.pandey@outlook.com</h3>
                    <a href={props.pdf}> <h3>{props.pdftext}</h3></a>
                    <a href='https://www.linkedin.com/in/mihiran-pandey'><h3>LinkedIn</h3></a>
                    <a href='https://github.com/MihiranP'><h3>GitHub</h3></a>
                     <div className="cards_item_info">
                    <h5 className="cards_item_text">
                        {props.text}
                    </h5>
                    <ul>
                        <li>{props.li11}</li>
                        <li>{props.li12}</li>
                        <li>{props.li13}</li>
                    </ul>
                    <h5 className="cards_item_text">
                        {props.text1}
                    </h5>
                    <ul>
                        <li>{props.li21}</li>
                        <li>{props.li22}</li>
                        <li>{props.li23}</li>
                        <li>{props.li24}</li>
                        <li>{props.li25}</li>


                    </ul>
                    <h5 className="cards_item_text">
                        {props.text2}
                    </h5>
                    <h5 className="cards_item_text">
                        {props.text3}
                    </h5>
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
                </div>
            </li>
                    </ul>
                </div>
            </div>

        </div>

    )
}

export default CardItem1

