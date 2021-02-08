import React from 'react';
import Banner from '../Banner';
import CardItem2 from '../CardItem2';

function Portfolio() {
    return (
        <>
            <Banner banner='banner-container2'/>
            <CardItem2 
            header="My Portfolio"
            subheader="Here you'll find the projects that I have worked on."
            text="1. This website!"
            li11="Created using Reactjs; components written in javascript, html, and css."
            li12="Deployed to provide a 'professional presence' on the internet and supply third parties with information about me"
            text3="2. NutriApp"
            li21="An app that scans nutrition labels and gives you details on the ingredients"
            li22="Made with React Native integrated with Google's vision api"
            li23="Devpost Page NutriApp"
            text6="3. SpyKit Discord bot"
            li31="A discord bot that allows you to 'Spy-Up' your server (link devpost)"
            li32="Allows you to encrypt and decrypt messages"
            li33="Devpost Page SpyKit"
            // text9="(link github)"
            />
       </>
    );
}

export default Portfolio
