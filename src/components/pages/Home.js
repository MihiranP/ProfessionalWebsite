import React, { Component } from 'react';
import Banner from '../Banner';
import '../../App.js';
import Cards from "../Cards";
import CardItem from "../CardItem";
import img2 from '../../images/IMG2.jpg'
import img1 from '../../images/IMG1.5.png'
 
function Home() {
    return(
        <>
            <Banner banner='banner-container'/>
            <CardItem 
            homep="Here you will find relavant information about me! Feel free to explore the pages I made, and browse to your heart's content." 
            header="Welcome to my Site!"
            image={img1}
            caption="Mihiran Pandey (not Michael Scott)"
            />
        </>
    );
}

export default Home
