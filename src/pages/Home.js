import React from 'react';
import Place from "../Components/Place";
import "./Home.css";
const Home = () =>
{
    return(
        <>
            <h1>HERO</h1>
            <div id="places">
            <Place image="pictures/cele-kula.jpg" placeName="Ćele Kula" type="Monument" text="Lorem Ipsum"/>
            <Place image="pictures/gracanica.jpg" placeName="Gračanica" type="Monastery" text="Lorem Ipsum"/>
            <Place image="pictures/viminacium.jpg" placeName="Viminacium" type="Ruins" text="Lorem Ipsum"/>
            <Place image="pictures/zlatibor.jpg" placeName="Zlatibor" type="Mountain" text="Lorem Ipsum"/>
            </div>
        </>
    )

}


export default Home;