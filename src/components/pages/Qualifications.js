import React, {useState} from 'react'
import CardItem from '../CardItem'
import CardItem1 from '../CardItem1'
import { Document, Page } from 'react-pdf';
import pdf from './Resume4.0.pdf';

function Qualifications() {
    return (
        <>

            <CardItem1 
            header="My Qualifications"
            subheader="Below you will find my skills and technical abilities along with my resume attached"
            pdf={pdf}
            pdftext="Click here for my resume"
            text="As far as my programming languages go these are languages that I am proficient in:"
            li11="C++"
            li12="Python"
            li13="Java"
            text1="These are some of my technical skills:"
            li21="Unix (Proficient)"
            li22="React/React Native (beginner)"
            li23="Excel (Proficient)"
            li24="Jupyter Notebook (Proficient)"
            li25="Microsoft Office Suite (Proficient)"
            text7="My technical areas of interest are data science/analysis, artificial intelligence, game development, and robotics.My appeal to these areas stemmed from a combination of personal experience and industry trends. For example, the data science market has been significantly growing since the start of modern big tech companies, since these businesses are extremely data driven. Additionally, there are heaps of data online, so being able to analyze these resources is a vital skill needed in both the industry as well as your personal life. Similarly, artificial intelligence is becoming more mainstream in the industry as applications of it are becoming more powerful. As for robotics and game development, those interests come from my personal experience. Since my early childhood, I have been playing video games, so my interest in it came from a place of personal fondness. Likewise, I developed an interest robotics by participating in my high school’s robotics team.  "
            text2 = "In terms of qualities that I have, I would describe myself as dependable, sociable, and tenacious with my work. "
            />
            

        </>
    );
}

export default Qualifications
