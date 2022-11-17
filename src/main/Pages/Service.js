import { React, useEffect, useState } from 'react';
import { Link } from "react-router-dom";


import ImageProjectA4 from '../Style/Images/Project/Exterior-4.jpg';
import ImageProjectB3 from '../Style/Images/Project/Immeuble-3.jpg';
import ImageProjectC1 from '../Style/Images/Project/Interior-1-1.jpg';
import ImageProjectC7 from '../Style/Images/Project/Interior-1-7.jpg';
import ImageProjectD1 from '../Style/Images/Project/NFT-1.jpg';
import ImageProjectE7 from '../Style/Images/Project/Pharmacie-7.jpg';
import ImageProjectF2 from '../Style/Images/Project/Hangar-2.jpg';
import ImageProjectG2 from '../Style/Images/Project/MSAD_2.jpg';


function Services() {

    useEffect(() => {
        let Page_slider = document.querySelector('.page_title_slider')
        Page_slider.style.top = `-300%`


        let AccueilContainer = document.querySelector(".App_container")
        AccueilContainer.scrollTop = 0;

        let hoverLoaderContainer = document.querySelector(".hover_loader_container")
        hoverLoaderContainer.style.display = 'flex';

        setTimeout(function () {
            hoverLoaderContainer.style.display = '';
        }, 1500);


        return () => {

        }
    }, []);

    return (
        <div id="Services">
            <OneService theServiceTitle={'Visualisations 3D "Rendus Images et Animations"'}
                theServiceDescription={
                    <p>
                        Nos services en conception Visualisations 3D comprennent la création d'images fixes et d'animations. Grâce à ceux-ci, nous aidons nos clients à transmettre leur vision et à façonner les environnement de demain.
                    </p>
                }
                TheGalerieElements={
                    <div className='project_container'>
                        <OneGalerieElement image={ImageProjectA4} title={'Design de Maison Moderne'} link={'/SmallHouse1'} date={'15 avril, 2022'} />
                        <OneGalerieElement image={ImageProjectB3} title={"Visualisation Extérieur d'Immeuble"} link={"/Immeuble1"} date={'27 Mai, 2022'} />
                        <OneGalerieElement image={ImageProjectE7} title={'Design pour les Commerces'} link={'/Pharmacie1'} date={'27 Mai, 2022'} />
                        <OneGalerieElement image={ImageProjectC7} title={'Interior Design'} link={'/Interior1'} date={'03 Juin, 2022'} />
                    </div>
                } color={'#F1F1F1'}
            />
            <OneService
                theServiceTitle={'Réalité Virtuel et Experience 3D Web'}
                theServiceDescription={
                    <p>
                        Nous avons une expérience éprouvée dans la VR et l'AR et pouvons vous aider à améliorer vos ventes  <br />
                        avec ces technologies en constante évolution.
                    </p>}
                TheGalerieElements={
                    <div className='project_container'>
                        <OneGalerieElement image={ImageProjectC1} title={'Interior Design'} link={'/Interior1'} date={'03 Juin, 2022'} />
                        <OneGalerieElement image={ImageProjectG2} title={'Manufacture des Arts Décoratifs de Thiés'} link={'/MSAD'} date={'03 Septembre, 2022'} />
                    </div>
                } color={'#F4EFE4'}
            />
            <OneService
                theServiceTitle={'Création de Maquettes'}
                theServiceDescription={
                    <p>
                        Le rendu et l'animation avec des temps de production de plus en plus rapides ont ouvert la porte à un monde de variations infinies dans la conception graphique adaptée à vos demandes uniques.
                    </p>}
                TheGalerieElements={
                    <div className='project_container'>
                        <OneGalerieElement image={ImageProjectD1} title={'Maquettete de la Grande Mosquée de Touba'} link={'/Touba'} date={'09 Mars, 2022'} />
                        <OneGalerieElement image={ImageProjectF2} title={'Maquettete "Hangar Photovoltaïque"'} link={'/Hangar1'} date={'29 Juin , 2021'} />
                    </div>
                } color={'#EBEBEB'}
            />
        </div>
    );
}



function OneService({ color, theServiceTitle, TheGalerieElements, theServiceDescription }) {
    return (
        <div
            style={{
                backgroundColor: color,
            }}
            className="one_service" >
            <h2 className='the_title'>
                {theServiceTitle}
            </h2>
            <p className='the_descrition'>
                {theServiceDescription}
            </p>
            {TheGalerieElements}
        </div >
    );
}


function OneGalerieElement({ giveImageId, title, theKey, image, date, link }) {

    return (
        <section className='one_galerie_element_container'>
            <div className='one_galerie_element'>
                <img src={image} width='100%' alt={title} />
                <div className='one_galerie_element_hover'>
                    <div className='iner_container' >
                        <Link className='titre' to={link}>
                            {title}
                        </Link>
                        <p className='date'>
                            {date}
                        </p>
                    </div>
                </div>
            </div>
            <Link className='one_galerie_link' to={link}>
                Voir le projet  <ion-icon name="arrow-forward-outline"></ion-icon>
            </Link>
        </section>
    );
}




export default Services;
