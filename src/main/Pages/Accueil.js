import { React, useEffect, useState, Fragment } from 'react';
import { Link } from "react-router-dom";

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



function Accueil({ GetImageToApp }) {

    useEffect(() => {
        let AccueilContainer = document.querySelector(".App_container")
        let ThesliderImg = document.querySelectorAll(".slider")
        AccueilContainer.addEventListener('scroll', (event) => {
            let TheScrollTop = AccueilContainer.scrollTop;
            let TheScrollHeight = AccueilContainer.scrollHeight;
            let WindowInnerHeight = window.innerHeight;
            let TheScrollTopInP = (TheScrollTop / (TheScrollHeight - WindowInnerHeight)) * 100;
            ThesliderImg.forEach(element => {
                element.style.backgroundPositionY = `-${TheScrollTopInP * 10}%`;
            });
        })
    });

    const GetImageOnApp = (theimage, title, date) => {
        GetImageToApp(theimage, title, date);
        console.log(theimage, title, date);
        console.log('#Accueil');
    }


    return (
        <div id="Accueil">
            <AccueilSlider />
            <div className='archviz_presantation' >
                <div className='qui_somme_nous' >
                    Qui somme Nous
                </div>
                <p>
                    The Student Hub design
                    preserves the historic framework of the MIT
                    campus by recycling facades and maintaining
                    existing building footprints. Modern forms are inserted
                </p>
                <div className='network_container'>
                    <a href="https://www.instagram.com/pape_momar_ndiaye/" target="_blank">
                        <div className="network">
                            <ion-icon name="logo-instagram"></ion-icon>
                        </div>
                    </a>
                    <a href="https://www.linkedin.com/in/pape-momar-ndiaye-37b862199/" target="_blank">
                        <div className="network">
                            <ion-icon name="logo-linkedin"></ion-icon>
                        </div>
                    </a>

                    <a href="https://www.behance.net/papendiay" target="_blank">
                        <div className="network">
                            <ion-icon name="logo-behance"></ion-icon>
                        </div>
                    </a>

                </div>
            </div>
            <div className='AccueilBigProjectsSection'>
                <OneBigProject title={'MIT Student Hub1'} image={ImageProjectA1}
                    description={'The Student Hub design preserves the historic framework of the MIT campus by recycling facades and maintaining existing building footprints. Modern forms are inserted underground and sliced through the form revealing new connections to iconic campus sculptures and gateways.'}
                    color={'#93A490'} textcolor={'#222'} theKey={1} side={'right'} />
                <OneBigProject title={'MIT Student Hub'} image={ImageProjectC3}
                    description={'The Student Hub design preserves the historic framework of the MIT campus by recycling facades and maintaining existing building footprints. Modern forms are inserted underground and sliced through the form revealing new connections to iconic campus sculptures and gateways.'}
                    color={'#EAEAEA'} textcolor={'#222'} theKey={2} side={'left'} />
                <OneBigProject title={'MIT Student Hub3'} image={ImageProjectE4}
                    description={'The Student Hub design preserves the historic framework of the MIT campus by recycling facades and maintaining existing building footprints. Modern forms are inserted underground and sliced through the form revealing new connections to iconic campus sculptures and gateways.'}
                    color={'#F4EFE4'} textcolor={'#222'} theKey={3} side={'right'} />
                <OneBigProject title={'MIT Student Hub'} image={ImageProjectB1}
                    description={'The Student Hub design preserves the historic framework of the MIT campus by recycling facades and maintaining existing building footprints. Modern forms are inserted underground and sliced through the form revealing new connections to iconic campus sculptures and gateways.'}
                    color={'#182B38'} textcolor={'#f1f1f1'} theKey={4} side={'left'} />
            </div>
            <div className='galerie_presantation'>
                <div className='visualisation_maquette' >
                    Visualisation & Maquette
                </div>
            </div>
            <TheGallery GetImageOnAccueil={GetImageOnApp} />
            <TheFooter />
        </div >
    );
}

function AccueilSlider() {

    const onClickOnDot = (e) => {
        let AllSlider = document.querySelectorAll(".slider")
        let AllDot = document.querySelectorAll(".dot")
        let theSliderKey = e.target.getAttribute('theSlider')

        AllDot.forEach(element => {
            element.classList.remove('ativeDot')
        });
        e.target.classList.add('ativeDot')


        AllSlider.forEach(element => {
            element.style.opacity = '0'
        });
        AllSlider[theSliderKey - 1].style.opacity = '1'

        setTimeout(function () {
            AllSlider.forEach(element => {
                element.style.zIndex = '1'
            });
            AllSlider[theSliderKey - 1].style.zIndex = '4'
            console.log('ok');
        }, 1100);

    }

    useEffect(() => {
        let sliderBtnContainer = document.querySelector(".slider_btn_container")
        let AllDot = sliderBtnContainer.childNodes
        AllDot.forEach(element => {
            element.addEventListener("click", onClickOnDot);
        });
        AllDot[0].classList.add('ativeDot')
        let theCourentSlide = 0
        const interval = setInterval(function () {
            AllDot[theCourentSlide].click()
            theCourentSlide++
            if (theCourentSlide >= AllDot.length) {
                return theCourentSlide = 0
            }
            console.log(theCourentSlide);
        }, 15000);

        return () => {
            clearInterval(interval);
        }

    }, [])
    const CreateSliderBtn = (theSlider) => {
        let sliderBtnContainer = document.querySelector(".slider_btn_container")
        let OneDot = document.createElement("div")
        OneDot.classList.add('dot');
        OneDot.setAttribute("theSlider", theSlider);
        sliderBtnContainer.appendChild(OneDot)

    }

    return (
        <div className="Accueil_Slider">
            <Slider giveSliderKey={CreateSliderBtn} theKey={1} date={' Juin 09 , 2022'} title={<p>1Summerfest <dr />
                Pavilion <br /> Color <dr /> Studies</p>} />
            <Slider giveSliderKey={CreateSliderBtn} theKey={2} date={' Juin 03 , 2022'} title={<p>2Summerfest <dr />
                Pavilion Color <dr /> Studies</p>} />
            <Slider giveSliderKey={CreateSliderBtn} theKey={3} date={' Juin 03 , 2022'} title={<p>3Summerfest <dr />
                Pavilion Color <dr /> Studies</p>} />
            <Slider giveSliderKey={CreateSliderBtn} theKey={4} date={' Juin 03 , 2022'} title={<p>4Summerfest <dr />
                Pavilion Color <dr /> Studies</p>} />
            <div className='slider_btn_container'>

            </div>
        </div>
    );
}

//!###############################################################


function Slider({ giveSliderKey, title, date, theKey }) {

    useEffect(() => {
        giveSliderKey(theKey)
    });


    return (
        <div className='slider'>
            <div className='slider_title'>
                {title}
            </div>
            <div className='slider_date'>
                {date}
            </div>

        </div>
    );
}

//!###############################################################

function OneBigProject({ color, title, description, side, textcolor, theKey, image }) {
    const [TheSide, setTheSide] = useState('');

    useEffect(() => {
        setTheSide(side)
        let TheSidedProject = document.querySelectorAll('.One_Project_In_Home')
        TheSidedProject[theKey - 1].style.backgroundColor = color;
        TheSidedProject[theKey - 1].style.border = `.5em solid ${color}`;
    });

    return (
        <Fragment>
            {TheSide === "right" ? (
                <div className="One_Project_In_Home right">
                    <div
                        style={{
                            color: textcolor,
                        }}
                        className='info_container '>
                        <div

                            className='title'>
                            {title}
                            <div
                                style={{
                                    backgroundColor: textcolor,
                                }}
                                className='bar'>

                            </div>
                        </div>
                        <div

                            className='description'>
                            {description}
                        </div>
                    </div>
                    <div
                        className='image_container'
                        style={{
                            backgroundImage: `url('${image}')`,
                        }}
                    >
                    </div>
                </div>
            ) : (
                <div className="One_Project_In_Home left">
                    <div
                        style={{
                            color: textcolor,
                        }}
                        className='info_container' >
                        <div
                            className='title'>
                            {title}
                            <div
                                style={{
                                    backgroundColor: textcolor,
                                }}
                                className='bar'>

                            </div>
                        </div>
                        <div
                            className='description'>
                            {description}
                        </div>
                    </div>
                    <div
                        className='image_container'
                        style={{
                            backgroundImage: `url('${image}')`,
                        }}
                    >
                    </div>
                </div>
            )
            }
        </Fragment >

    );
}

//!###############################################################

function TheGallery({ GetImageOnAccueil }) {

    const onClickOnImage = (theimage, title, date) => {
        console.log(theimage, title, date);
        GetImageOnAccueil(theimage, title, date);
    }

    return (
        <Fragment>
            <div className="the_galerie_container">
                <OneGalerieElement giveImageId={onClickOnImage} image={ImageProjectC3} title={'Interior Design'} date={'Juin 09, 2022'} />
                <OneGalerieElement giveImageId={onClickOnImage} image={ImageProjectB3} title={'Color Studies2'} date={'Juin 09, 2022'} />
                <OneGalerieElement giveImageId={onClickOnImage} image={ImageProjectE4} title={'Interior Design'} date={'Juin 09, 2022'} />
                <OneGalerieElement giveImageId={onClickOnImage} image={ImageProjectA1} title={'Small House'} date={'Juin 09, 2022'} />
                <OneGalerieElement giveImageId={onClickOnImage} image={ImageProjectE5} title={'Color Studies2'} date={'Juin 09, 2022'} />

                <OneGalerieElement giveImageId={onClickOnImage} image={ImageProjectD1} title={'Collection "Morceaux du Sénégal"'} date={'Juin 09, 2022'} />
                <OneGalerieElement giveImageId={onClickOnImage} image={ImageProjectE1} title={'Color Studies2'} date={'Juin 09, 2022'} />
                <OneGalerieElement giveImageId={onClickOnImage} image={ImageProjectB2} title={'Color Studies2'} date={'Juin 09, 2022'} />
                <OneGalerieElement giveImageId={onClickOnImage} image={ImageProjectC4} title={'Interior Design'} date={'Juin 09, 2022'} />
                <OneGalerieElement giveImageId={onClickOnImage} image={ImageProjectF1} title={'Color Studies2'} date={'Juin 09, 2022'} />

                <OneGalerieElement giveImageId={onClickOnImage} image={ImageProjectA4} title={'Small House'} date={'Juin 09, 2022'} />
                <OneGalerieElement giveImageId={onClickOnImage} image={ImageProjectA2} title={'Small House'} date={'Juin 09, 2022'} />
                <OneGalerieElement giveImageId={onClickOnImage} image={ImageProjectC2} title={'Interior Design'} date={'Juin 09, 2022'} />
                <OneGalerieElement giveImageId={onClickOnImage} image={ImageProjectC7} title={'Interior Design'} date={'Juin 09, 2022'} />
                <OneGalerieElement giveImageId={onClickOnImage} image={ImageProjectC5} title={'Interior Design'} date={'Juin 09, 2022'} />

                <OneGalerieElement giveImageId={onClickOnImage} image={ImageProjectE7} title={'Pharmacie Design'} date={'Juin 09, 2022'} />
                <OneGalerieElement giveImageId={onClickOnImage} image={ImageProjectE9} title={'Pharmacie Design'} date={'Juin 09, 2022'} />
                <OneGalerieElement giveImageId={onClickOnImage} image={ImageProjectE2} title={'Pharmacie Design'} date={'Juin 09, 2022'} />
                <OneGalerieElement giveImageId={onClickOnImage} image={ImageProjectE3} title={'Pharmacie Design'} date={'Juin 09, 2022'} />
                <OneGalerieElement giveImageId={onClickOnImage} image={ImageProjectE6} title={'Pharmacie Design'} date={'Juin 09, 2022'} />

                <OneGalerieElement giveImageId={onClickOnImage} image={ImageProjectF3} title={'Color Studies2'} date={'Juin 09, 2022'} />
                <OneGalerieElement giveImageId={onClickOnImage} image={ImageProjectD2} title={'Collection "Morceaux du Sénégal"'} date={'Juin 09, 2022'} />
                <OneGalerieElement giveImageId={onClickOnImage} image={ImageProjectC6} title={'Color Studies2'} date={'Juin 09, 2022'} />
                <OneGalerieElement giveImageId={onClickOnImage} image={ImageProjectC1} title={'Color Studies2'} date={'Juin 09, 2022'} />
                <OneGalerieElement giveImageId={onClickOnImage} image={ImageProjectA5} title={'Small House'} date={'Juin 09, 2022'} />
            </div>
        </Fragment>
    );

}

//!###############################################################
function OneGalerieElement({ giveImageId, title, theKey, image, date }) {

    const clickOnImage = (e) => {
        let AccueilContainer = document.querySelector(".App_container")
        AccueilContainer.scrollTop = 0;

        giveImageId(image, title, date)
    }

    return (
        <div className='one_galerie_element'>
            <img src={image} width='100%' />
            <div className='one_galerie_element_hover'>
                <div className='iner_container' >
                    <Link onClick={clickOnImage} to={'/Gallery'}>
                        <div
                            className='Icon-to-click-on '>
                            <ion-icon name="add-circle">
                            </ion-icon>
                        </div>
                    </Link >
                    <p className='titre'>
                        {title}
                    </p>
                    <p className='date'>
                        {date}
                    </p>
                </div>
            </div>
        </div>
    );

}
//!###############################################################
function TheFooter({ }) {


    return (
        <div className='the_footer'>
            <div className='logo-container'>
            </div>
            <div className='titles'>Categories</div>
            <div className='titles'>Contacts</div>
            <div>3</div>
            <div className='archviz_description'>
                The Student Hub design
                preserves the historic framework of the MIT
            </div>
        </div>
    );

}




export { Accueil, TheGallery, OneBigProject };
