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
        return () => {
            // setTheChangeInGalerie(false);
            // console.log('ww');
        }
    }, []);

    return (
        <div id="Services">
            <OneService theServiceTitle={'3D Visualisations Rendus Images et Videos'}
                theServiceDescription={
                    <p>
                        1Lorem ipsum dolor <br /> sit amet consectetur, adipisicing elit. <br /> Odit porro omnis aspernatur alias officia laudantium ab eum. Quos maiores incidunt deserunt molestiae explicabo eaque, ipsam vel.
                    </p>
                }
                TheGalerieElements={
                    <div className='project_container'>
                        <OneGalerieElement image={ImageProjectA4} title={'Design de Maison Moderne'} link={'/SmallHouse1'} date={'Juin 09, 2022'} />
                        <OneGalerieElement image={ImageProjectB3} title={"Visualisation Extérieur d'Immeuble"} link={"/Immeuble1"} date={'Juin 09, 2022'} />
                        <OneGalerieElement image={ImageProjectE7} title={'Pharmacie'} link={'/Pharmacie1'} date={'Juin 09, 2022'} />
                        <OneGalerieElement image={ImageProjectC7} title={'Interior Design'} link={'/Interior1'} date={'Juin 09, 2022'} />
                    </div>
                } color={'#F4EFE4'}
            />
            <OneService
                theServiceTitle={'Réalité Virtuel et Experience 3D Web'}
                theServiceDescription={
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br /> Odit porro omnis aspernatur alias officia laudantium ab eum. Quos maiores incidunt deserunt molestiae explicabo eaque, ipsam vel.
                    </p>}
                TheGalerieElements={
                    <div className='project_container'>
                        <OneGalerieElement image={ImageProjectC1} title={'Interior Design'} link={'/Interior1'} date={'Juin 09, 2022'} />
                        <OneGalerieElement image={ImageProjectG2} title={'Manufacture des Arts Décoratifs de Thiés'} link={'/MSAD'} date={'Juin 09, 2022'} />
                    </div>
                } color={'#F1F1F1'}
            />
            <OneService
                theServiceTitle={'Creation de Maquette'}
                theServiceDescription={
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br /> Odit porro omnis aspernatur alias officia laudantium ab eum. Quos maiores incidunt deserunt molestiae explicabo eaque, ipsam vel.
                    </p>}
                TheGalerieElements={
                    <div className='project_container'>
                        <OneGalerieElement image={ImageProjectD1} title={'Maquette de la Grande Mosquée de Touba'} link={'/Touba'} date={'Juin 09, 2022'} />
                        <OneGalerieElement image={ImageProjectF2} title={'Maquette "Hangar Photovoltaïque"'} link={'/Hangar1'} date={'Juin 09, 2022'} />
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
