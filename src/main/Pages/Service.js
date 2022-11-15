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
            <OneService theServiceTitle={'3D Visualisations Rendus Images et Videos'}
                theServiceDescription={
                    <p>
                        Les images fixes et les animation constituent la base de la plupart des projets de visualisation architecturale <br />
                        apparaissant sur de nombreux supports et plateformes. <br />Ils ouverent la porte à un monde de variations infinies dans la conception graphique
                        adaptée à vos demandes uniques.
                    </p>
                }
                TheGalerieElements={
                    <div className='project_container'>
                        <OneGalerieElement image={ImageProjectA4} title={'Design de Maison Moderne'} link={'/SmallHouse1'} date={'15 avril, 2022'} />
                        <OneGalerieElement image={ImageProjectB3} title={"Visualisation Extérieur d'Immeuble"} link={"/Immeuble1"} date={'27 Mai, 2022'} />
                        <OneGalerieElement image={ImageProjectE7} title={'Pharmacie'} link={'/Pharmacie1'} date={'27 Mai, 2022'} />
                        <OneGalerieElement image={ImageProjectC7} title={'Interior Design'} link={'/Interior1'} date={'03 Juin, 2022'} />
                    </div>
                } color={'#F4EFE4'}
            />
            <OneService
                theServiceTitle={'Réalité Virtuel et Experience 3D Web'}
                theServiceDescription={
                    <p>
                        Ayant produit des expériences de réalité virtuelle pour les promoteurs immobiliers  <br />
                        nous avons une expérience éprouvée d'exemples de qualité et pouvons vous aider à améliorer vos ventes  <br />
                        avec cette technologie en constante évolution.
                    </p>}
                TheGalerieElements={
                    <div className='project_container'>
                        <OneGalerieElement image={ImageProjectC1} title={'Interior Design'} link={'/Interior1'} date={'03 Juin, 2022'} />
                        <OneGalerieElement image={ImageProjectG2} title={'Manufacture des Arts Décoratifs de Thiés'} link={'/MSAD'} date={'03 Septembre, 2022'} />
                    </div>
                } color={'#F1F1F1'}
            />
            <OneService
                theServiceTitle={'Création de Maquettetes'}
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
            <div className='the_title'>
                {theServiceTitle}
            </div>
            <div className='the_descrition'>
                {theServiceDescription}
            </div>
            {TheGalerieElements}
        </div >
    );
}


function OneGalerieElement({ giveImageId, title, theKey, image, date, link }) {

    const clickOnImage = (e) => {
        let AccueilContainer = document.querySelector(".App_container")
        AccueilContainer.scrollTop = 0;
    }

    return (
        <div className='one_galerie_element_container'>
            <div className='one_galerie_element'>
                <img src={image} width='100%' />
                <div className='one_galerie_element_hover'>
                    <div className='iner_container' >
                        <p className='titre'>
                            {title}
                        </p>
                        <p className='date'>
                            {date}
                        </p>
                    </div>
                </div>
            </div>
            <Link className='one_galerie_link' to={link}>
                Voir le projet  <ion-icon name="arrow-forward-outline"></ion-icon>
            </Link>
        </div>
    );
}




export default Services;
