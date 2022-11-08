import { React, useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { TheFooter } from './Accueil';


import ImageProjectA1 from '../Style/Images/Project/Exterior-1.jpg';
import ImageProjectA2 from '../Style/Images/Project/Exterior-2.jpg';
import ImageProjectA3 from '../Style/Images/Project/Exterior-3.jpg';
import ImageProjectA4 from '../Style/Images/Project/Exterior-4.jpg';
import ImageProjectA5 from '../Style/Images/Project/Exterior-5.jpg';

import ImageProjectB1 from '../Style/Images/Project/Immeuble-1.jpg';
import ImageProjectB2 from '../Style/Images/Project/Immeuble-2.jpg';
import ImageProjectB3 from '../Style/Images/Project/Immeuble-3.jpg';

import ImageProjectC1 from '../Style/Images/Project/Interior-1-1.jpg';
import ImageProjectC2 from '../Style/Images/Project/Interior-1-2.jpg';
import ImageProjectC3 from '../Style/Images/Project/Interior-1-3.jpg';
import ImageProjectC4 from '../Style/Images/Project/Interior-1-4.jpg';
import ImageProjectC5 from '../Style/Images/Project/Interior-1-5.jpg';
import ImageProjectC6 from '../Style/Images/Project/Interior-1-6.jpg';
import ImageProjectC7 from '../Style/Images/Project/Interior-1-7.jpg';

import ImageProjectD1 from '../Style/Images/Project/NFT-1.jpg';
import ImageProjectD2 from '../Style/Images/Project/NFT-2.jpg';
import ImageProjectD3 from '../Style/Images/Project/NFT-3.jpg';

import ImageProjectE1 from '../Style/Images/Project/Pharmacie-1.jpg';
import ImageProjectE2 from '../Style/Images/Project/Pharmacie-2.jpg';
import ImageProjectE3 from '../Style/Images/Project/Pharmacie-3.jpg';
import ImageProjectE4 from '../Style/Images/Project/Pharmacie-4.jpg';
import ImageProjectE5 from '../Style/Images/Project/Pharmacie-5.jpg';
import ImageProjectE6 from '../Style/Images/Project/Pharmacie-6.jpg';
import ImageProjectE7 from '../Style/Images/Project/Pharmacie-7.jpg';
import ImageProjectE8 from '../Style/Images/Project/Pharmacie-8.jpg';
import ImageProjectE9 from '../Style/Images/Project/Pharmacie-9.jpg';

import ImageProjectF1 from '../Style/Images/Project/Hangar-1.jpg';
import ImageProjectF2 from '../Style/Images/Project/Hangar-2.jpg';
import ImageProjectF3 from '../Style/Images/Project/Hangar-3.jpg';



function Services() {
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
                        <OneGalerieElement image={ImageProjectA4} title={'Interior Design'} link={'/Interior1'} date={'Juin 09, 2022'} />
                        <OneGalerieElement image={ImageProjectB3} title={'Interior Design'} link={'/Interior1'} date={'Juin 09, 2022'} />
                        <OneGalerieElement image={ImageProjectE7} title={'Interior Design'} link={'/Interior1'} date={'Juin 09, 2022'} />
                        <OneGalerieElement image={ImageProjectC7} title={'Interior Design'} link={'/Interior1'} date={'Juin 09, 2022'} />
                    </div>
                } color={'#F4EFE4'}
            />
            <OneService
                theServiceTitle={'Realiter Virtuel Realiter augmenter 3D Web experience'}
                theServiceDescription={
                    <p>

                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br /> Odit porro omnis aspernatur alias officia laudantium ab eum. Quos maiores incidunt deserunt molestiae explicabo eaque, ipsam vel.
                    </p>}
                TheGalerieElements={
                    <div className='project_container'>
                        <OneGalerieElement image={ImageProjectC1} title={'Interior Design'} link={'/Interior1'} date={'Juin 09, 2022'} />
                        <OneGalerieElement image={ImageProjectB3} title={'Interior Design'} link={'/Interior1'} date={'Juin 09, 2022'} />
                    </div>
                } color={'#F1F1F1'}
            />
            <OneService
                theServiceTitle={'Creation de Maquet '}
                theServiceDescription={
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br /> Odit porro omnis aspernatur alias officia laudantium ab eum. Quos maiores incidunt deserunt molestiae explicabo eaque, ipsam vel.
                    </p>}
                TheGalerieElements={
                    <div className='project_container'>
                        <OneGalerieElement image={ImageProjectD1} title={'Interior Design'} link={'/Interior1'} date={'Juin 09, 2022'} />
                        <OneGalerieElement image={ImageProjectF2} title={'Interior Design'} link={'/Interior1'} date={'Juin 09, 2022'} />
                    </div>
                } color={'#EBEBEB'}
            />
            {/* <TheFooter /> */}
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
