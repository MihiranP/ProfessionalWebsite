import React, { Component } from 'react';
import Banner from '../Banner';
import '../../App.js';
import Cards from "../Cards";
import CardItem from "../CardItem";
 
function Home() {
    return(
        <>
            <Banner banner='banner-container'/>
            <CardItem 
            text="Here you will find relavant information about me! Feel free to explore these pages and browse to your heart's conent." 
            header="Welcome to my Site!"/>
        </>
    );
}

export default Home
