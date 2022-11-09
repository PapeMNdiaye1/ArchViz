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

import ImageProjectG1 from '../Style/Images/Project/MSAD_1.jpg';
import ImageProjectG2 from '../Style/Images/Project/MSAD_2.jpg';
import ImageProjectG3 from '../Style/Images/Project/MSAD_3.jpg';



function Accueil({ GetImageToApp }) {

    useEffect(() => {

        let AccueilContainer = document.querySelector(".App_container")
        let ThesliderImg = document.querySelectorAll(".slider")
        AccueilContainer.scrollTop = 0;

        AccueilContainer.addEventListener('scroll', (event) => {
            let TheScrollTop = AccueilContainer.scrollTop;
            let TheScrollHeight = AccueilContainer.scrollHeight;
            let WindowInnerHeight = window.innerHeight;
            let TheScrollTopInP = (TheScrollTop / (TheScrollHeight - WindowInnerHeight)) * 100;
            ThesliderImg.forEach(element => {
                element.style.backgroundPositionY = `-${TheScrollTopInP * 10}%`;
            });
        })
        return () => {
            // setTheChangeInGalerie(false);
            // console.log('ww');
        }
    }, []);



    const GetImageOnApp = (theimage, title, date, link) => {
        GetImageToApp(theimage, title, date, link);
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
                    <a href="https://www.instagram.com/arch_viz_sn/" target="_blank">
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
                            <ion-icon name="logo-facebook"></ion-icon>
                        </div>
                    </a>

                </div>
            </div>
            <div className='AccueilBigProjectsSection'>
                <OneBigProject title={'Design de Maison Moderne'} image={ImageProjectA1}
                    description={'The Student Hub design preserves the historic framework of the MIT campus by recycling facades and maintaining existing building footprints. Modern forms are inserted underground and sliced through the form revealing new connections to iconic campus sculptures and gateways.'}
                    color={'#93A490'} textcolor={'#222'} theKey={1} side={'right'} link={'/SmallHouse1'} />
                <OneBigProject title={'Interior Design'} image={ImageProjectC3}
                    description={'The Student Hub design preserves the historic framework of the MIT campus by recycling facades and maintaining existing building footprints. Modern forms are inserted underground and sliced through the form revealing new connections to iconic campus sculptures and gateways.'}
                    color={'#EAEAEA'} textcolor={'#222'} theKey={2} side={'left'} link={'/Pharmacie1'} />
                <OneBigProject title={'Pharmacie Design'} image={ImageProjectE4}
                    description={'The Student Hub design preserves the historic framework of the MIT campus by recycling facades and maintaining existing building footprints. Modern forms are inserted underground and sliced through the form revealing new connections to iconic campus sculptures and gateways.'}
                    color={'#F4EFE4'} textcolor={'#222'} theKey={3} side={'right'} link={'/Interior1'} />
                <OneBigProject title={"Visualisation Exterieur d'Immeuble"} image={ImageProjectB1}
                    description={'The Student Hub design preserves the historic framework of the MIT campus by recycling facades and maintaining existing building footprints. Modern forms are inserted underground and sliced through the form revealing new connections to iconic campus sculptures and gateways.'}
                    color={'#182B38'} textcolor={'#f1f1f1'} theKey={4} side={'left'} link={'/Immeuble1'} />
            </div>
            <div className='galerie_presantation'>
                <div className='visualisation_maquette' >
                    Visualisation & Maquette
                </div>
            </div>
            <TheGallery GetImageOnAccueil={GetImageOnApp} />
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
            sliderBtnContainer.innerHTML = '';
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
            <Slider giveSliderKey={CreateSliderBtn} theKey={1} date={' Juin 09 , 2022'} title={<p>Visualisations <dr />Rendus Images<br />et Videos</p>} />
            <Slider giveSliderKey={CreateSliderBtn} theKey={2} date={' Juin 03 , 2022'} title={<p>Creation de <dr /> Maquet</p>} />
            <Slider giveSliderKey={CreateSliderBtn} theKey={3} date={' Juin 03 , 2022'} title={<p>Realiter <dr /> Virtuel 3D Web <dr /> experience</p>} />
            <Slider giveSliderKey={CreateSliderBtn} theKey={4} date={' Juin 03 , 2022'} title={<p>Visualisations <dr /> Architectural</p>} />
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

function OneBigProject({ color, title, description, side, textcolor, theKey, image, link }) {
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
                        <Link

                            style={{
                                color: textcolor,
                            }} className='title' to={link}>
                            {title}
                            <div
                                style={{
                                    backgroundColor: textcolor,
                                }}
                                className='bar'>
                            </div>
                        </Link>
                        <div

                            className='description'>
                            {description}
                        </div>
                    </div>
                    <Link
                        to={link}
                        className='image_container'
                        style={{
                            backgroundImage: `url('${image}')`,
                        }}
                    >
                    </Link>
                </div>
            ) : (
                <div className="One_Project_In_Home left">
                    <div
                        style={{
                            color: textcolor,
                        }}
                        className='info_container' >
                        <Link
                            style={{
                                color: textcolor,
                            }}
                            className='title' to={link}>
                            {title}
                            <div
                                style={{
                                    backgroundColor: textcolor,
                                }}
                                className='bar'>
                            </div>
                        </Link>
                        <div
                            className='description'>
                            {description}
                        </div>
                    </div>
                    <Link
                        to={link}
                        className='image_container'
                        style={{
                            backgroundImage: `url('${image}')`,
                        }}
                    >
                    </Link>
                </div>
            )
            }
        </Fragment >

    );
}

//!###############################################################

function TheGallery({ GetImageOnAccueil }) {

    const onClickOnImage = (theimage, title, date, link) => {
        GetImageOnAccueil(theimage, title, date, link);
    }

    return (
        <Fragment>
            <div className="the_galerie_container">
                <OneGalerieElement giveImageId={onClickOnImage} link={'/Interior1'} image={ImageProjectC3} title={'Interior Design'} date={'Juin 09, 2022'} />
                <OneGalerieElement giveImageId={onClickOnImage} link={'/MSAD'} image={ImageProjectG2} title={'Manufacture des Arts Décoratifs de Thiés'} date={'Juin 09, 2022'} />
                <OneGalerieElement giveImageId={onClickOnImage} link={'/Pharmacie1'} image={ImageProjectE3} title={'Pharmacie Design'} date={'Juin 09, 2022'} />
                <OneGalerieElement giveImageId={onClickOnImage} link={'/SmallHouse1'} image={ImageProjectA1} title={'Design de Maison Moderne'} date={'Juin 09, 2022'} />
                <OneGalerieElement giveImageId={onClickOnImage} link={'/Pharmacie1'} image={ImageProjectE5} title={'Pharmacie Design'} date={'Juin 09, 2022'} />

                <OneGalerieElement giveImageId={onClickOnImage} link={'/Touba'} image={ImageProjectD1} title={'Maquette de la Grande Mosquée de Touba'} date={'Juin 09, 2022'} />
                <OneGalerieElement giveImageId={onClickOnImage} link={'/Pharmacie1'} image={ImageProjectE1} title={'Pharmacie Design'} date={'Juin 09, 2022'} />
                <OneGalerieElement giveImageId={onClickOnImage} link={'/Immeuble1'} image={ImageProjectB2} title={"Visualisation Exterieur d'Immeuble"} date={'Juin 09, 2022'} />
                <OneGalerieElement giveImageId={onClickOnImage} link={'/Interior1'} image={ImageProjectC4} title={'Interior Design'} date={'Juin 09, 2022'} />
                <OneGalerieElement giveImageId={onClickOnImage} link={'/Hangar1'} image={ImageProjectF1} title={'Maquette Hangar Photovoltaïque'} date={'Juin 09, 2022'} />

                <OneGalerieElement giveImageId={onClickOnImage} link={'/Pharmacie1'} image={ImageProjectE4} title={'Interior Design'} date={'Juin 09, 2022'} />
                <OneGalerieElement giveImageId={onClickOnImage} link={'/SmallHouse1'} image={ImageProjectA2} title={'Design de Maison Moderne'} date={'Juin 09, 2022'} />
                <OneGalerieElement giveImageId={onClickOnImage} link={'/Interior1'} image={ImageProjectC2} title={'Interior Design'} date={'Juin 09, 2022'} />
                <OneGalerieElement giveImageId={onClickOnImage} link={'/Interior1'} image={ImageProjectC7} title={'Interior Design'} date={'Juin 09, 2022'} />
                <OneGalerieElement giveImageId={onClickOnImage} link={'/Interior1'} image={ImageProjectC5} title={'Interior Design'} date={'Juin 09, 2022'} />

                <OneGalerieElement giveImageId={onClickOnImage} link={'/SmallHouse1'} image={ImageProjectA4} title={'Design de Maison Moderne'} date={'Juin 09, 2022'} />
                <OneGalerieElement giveImageId={onClickOnImage} link={'/Pharmacie1'} image={ImageProjectE7} title={'Pharmacie Design'} date={'Juin 09, 2022'} />
                <OneGalerieElement giveImageId={onClickOnImage} link={'/Pharmacie1'} image={ImageProjectE9} title={'Pharmacie Design'} date={'Juin 09, 2022'} />
                <OneGalerieElement giveImageId={onClickOnImage} link={'/Pharmacie1'} image={ImageProjectE2} title={'Pharmacie Design'} date={'Juin 09, 2022'} />
                <OneGalerieElement giveImageId={onClickOnImage} link={'/Hangar1'} image={ImageProjectF3} title={'Maquette Hangar Photovoltaïque'} date={'Juin 09, 2022'} />

                <OneGalerieElement giveImageId={onClickOnImage} link={'/Pharmacie1'} image={ImageProjectE6} title={'Pharmacie Design'} date={'Juin 09, 2022'} />
                <OneGalerieElement giveImageId={onClickOnImage} link={'/MSAD'} image={ImageProjectG3} title={'Manufacture des Arts Décoratifs de Thiés'} date={'Juin 09, 2022'} />
                <OneGalerieElement giveImageId={onClickOnImage} link={'/Interior1'} image={ImageProjectC6} title={'Interior Design'} date={'Juin 09, 2022'} />
                <OneGalerieElement giveImageId={onClickOnImage} link={'/Interior1'} image={ImageProjectC1} title={'Interior Design'} date={'Juin 09, 2022'} />
                <OneGalerieElement giveImageId={onClickOnImage} link={'/SmallHouse1'} image={ImageProjectA5} title={'Design de Maison Moderne'} date={'Juin 09, 2022'} />
            </div>
        </Fragment>
    );

}

//!###############################################################
function OneGalerieElement({ giveImageId, title, theKey, image, date, link }) {

    const clickOnImage = (e) => {
        let AccueilContainer = document.querySelector(".App_container")
        AccueilContainer.scrollTop = 0;

        giveImageId(image, title, date, link)
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

    const onClickOnTab = () => {
        let AccueilContainer = document.querySelector(".App_container")
        AccueilContainer.scrollTop = 0;
    }


    return (
        <div className='the_footer'>
            <div className='logo-container'>
            </div>
            <div className='titles'>Categories</div>
            <div className='titles'>Contacts</div>
            <div className='titles'>Reseaux</div>
            <div className='archviz_description'>
                The Student Hub design
                preserves the historic framework of the MIT
            </div>
            <div className='menu_elemant_container'>
                <Link className='menu_elemant' to={'/'} onClick={onClickOnTab}>
                    Accueil
                </Link>
                <Link className='menu_elemant' to={'/Traveaux'} onClick={onClickOnTab}>
                    Traveaux
                </Link>
                <Link className='menu_elemant' to={'/Service'} onClick={onClickOnTab}>
                    Services
                </Link>
                <Link className='menu_elemant' to={'/Gallery'} onClick={onClickOnTab}>
                    Gallerie
                </Link>
                <div className='menu_elemant'></div>
            </div>
            <div className='categories_elemant_container'>
                <div className='categories_elemant'><ion-icon name="ellipse"></ion-icon>Exterior Design</div>
                <div className='categories_elemant'><ion-icon name="ellipse"></ion-icon>Interior Design</div>
                <div className='categories_elemant'><ion-icon name="ellipse"></ion-icon>Creation de Maquet</div>
                <div className='categories_elemant'><ion-icon name="ellipse"></ion-icon>Visualisation</div>
                <div className='categories_elemant'><ion-icon name="ellipse"></ion-icon>Creation de Visite Web</div>
                <div className='categories_elemant'><ion-icon name="ellipse"></ion-icon>Experience de Realite Virtuel</div>
            </div>

            <div className='contact_elemant_container'>
                <div className='contact_elemant '>Pmomar44@gmail.com</div>
                <div className='contact_elemant '>Tel: 77 727 86 55</div>
            </div>

            <div className='network_container'>
                <a href="https://www.instagram.com/arch_viz_sn/" target="_blank">
                    <div className="network">
                        <ion-icon name="logo-instagram"></ion-icon>
                    </div>
                </a>
                <a href="https://www.linkedin.com/in/pape-momar-ndiaye-37b862199/" target="_blank">
                    <div className="network">
                        <ion-icon name="logo-linkedin"></ion-icon>
                    </div>
                </a>

                <a href="https://www.facebook.com/ARVHVIZ/" target="_blank">
                    <div className="network">
                        <ion-icon name="logo-facebook"></ion-icon>
                    </div>
                </a>
            </div>

            <div className='the_line'>
            </div>

            <div className='country'>
                <ion-icon name="globe-outline"></ion-icon>  Sénégal
            </div>
            <div className='rights'>
                © 2022 | Archviz. Tout droit réservé.
            </div>
        </div>
    );

}




export { Accueil, TheGallery, OneBigProject, TheFooter };
