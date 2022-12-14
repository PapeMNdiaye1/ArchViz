import { React, useEffect, useState, Fragment } from 'react';
import { Link } from "react-router-dom";

import ImageProjectA1 from '../Style/Images/Project/Exterior-1.jpg';
import ImageProjectA2 from '../Style/Images/Project/Exterior-2.jpg';
// import ImageProjectA4 from '../Style/Images/Project/Exterior-4.jpg';
// import ImageProjectA5 from '../Style/Images/Project/Exterior-5.jpg';

import ImageProjectB1 from '../Style/Images/Project/Immeuble-1.jpg';
import ImageProjectB2 from '../Style/Images/Project/Immeuble-2.jpg';

import ImageProjectC1 from '../Style/Images/Project/Interior-1-1.jpg';
import ImageProjectC2 from '../Style/Images/Project/Interior-1-2.jpg';
import ImageProjectC3 from '../Style/Images/Project/Interior-1-3.jpg';
import ImageProjectC4 from '../Style/Images/Project/Interior-1-4.jpg';
import ImageProjectC5 from '../Style/Images/Project/Interior-1-5.jpg';
// import ImageProjectC6 from '../Style/Images/Project/Interior-1-6.jpg';
// import ImageProjectC7 from '../Style/Images/Project/Interior-1-7.jpg';

import ImageProjectD1 from '../Style/Images/Project/NFT-1.jpg';

import ImageProjectE1 from '../Style/Images/Project/Pharmacie-1.jpg';
import ImageProjectE2 from '../Style/Images/Project/Pharmacie-2.jpg';
import ImageProjectE3 from '../Style/Images/Project/Pharmacie-3.jpg';
import ImageProjectE4 from '../Style/Images/Project/Pharmacie-4.jpg';
// import ImageProjectE5 from '../Style/Images/Project/Pharmacie-5.jpg';
import ImageProjectE6 from '../Style/Images/Project/Pharmacie-6.jpg';
// import ImageProjectE7 from '../Style/Images/Project/Pharmacie-7.jpg';
// import ImageProjectE9 from '../Style/Images/Project/Pharmacie-9.jpg';

// import ImageProjectF1 from '../Style/Images/Project/Hangar-1.jpg';
import ImageProjectF2 from '../Style/Images/Project/Hangar-2.jpg';
import ImageProjectF3 from '../Style/Images/Project/Hangar-3.jpg';

import ImageProjectG2 from '../Style/Images/Project/MSAD_2.jpg';
// import ImageProjectG3 from '../Style/Images/Project/MSAD_3.jpg';

import ImageProjectH1 from '../Style/Images/Project/Villa_A-1.jpg';
import ImageProjectH2 from '../Style/Images/Project/Villa_A-2.jpg';
import ImageProjectH3 from '../Style/Images/Project/Villa_A-3.jpg';

// import ImageProjectI1 from '../Style/Images/Project/Villa_B-1.jpg';
import ImageProjectI2 from '../Style/Images/Project/Villa_B-2.jpg';
import ImageProjectI3 from '../Style/Images/Project/Villa_B-3.jpg';
import ImageProjectI4 from '../Style/Images/Project/Villa_B-4.jpg';

import ImageProjectJ1 from '../Style/Images/Project/Pharmacie_B-1.jpg';
// import ImageProjectJ2 from '../Style/Images/Project/Pharmacie_B-2.jpg';
// import ImageProjectJ3 from '../Style/Images/Project/Pharmacie_B-3.jpg';
// import ImageProjectJ4 from '../Style/Images/Project/Pharmacie_B-4.jpg';
// import ImageProjectJ5 from '../Style/Images/Project/Pharmacie_B-5.jpg';

// import ImageProjectK1 from '../Style/Images/Project/Pharmacie_C-1.jpg';
import ImageProjectK2 from '../Style/Images/Project/Pharmacie_C-2.jpg';
import ImageProjectK3 from '../Style/Images/Project/Pharmacie_C-3.jpg';
// import ImageProjectK4 from '../Style/Images/Project/Pharmacie_C-4.jpg';
import ImageProjectK5 from '../Style/Images/Project/Pharmacie_C-5.jpg';



function Accueil({ GetImageToApp }) {

    useEffect(() => {

        let AccueilContainer = document.querySelector(".App_container")
        AccueilContainer.scrollTop = 0;

        let Page_slider = document.querySelector('.page_title_slider')
        Page_slider.style.top = `-0%`

        let hoverLoaderContainer = document.querySelector(".hover_loader_container")
        hoverLoaderContainer.style.display = 'flex';

        setTimeout(function () {
            hoverLoaderContainer.style.display = '';
        }, 1500);



        let ThesliderImg = document.querySelectorAll(".slider")
        let thePageWidth = window.innerWidth

        if (thePageWidth >= 1000) {
            return AccueilContainer.addEventListener('scroll', (event) => {
                let TheScrollTop = AccueilContainer.scrollTop;
                let TheScrollHeight = AccueilContainer.scrollHeight;
                let WindowInnerHeight = window.innerHeight;
                let TheScrollTopInP = (TheScrollTop / (TheScrollHeight - WindowInnerHeight)) * 100;

                ThesliderImg.forEach(element => {
                    element.style.backgroundPositionY = `-${TheScrollTopInP * 10}%`;
                });
            })

        }

        return () => {
        }
    }, []);



    const GetImageOnApp = (theimage, title, date, link) => {
        GetImageToApp(theimage, title, date, link);
    }

    return (
        <div id="Accueil">
            <AccueilSlider />
            <section className='archviz_presantation' >
                <h2 className='qui_somme_nous' >
                    Qui sommes-nous ?
                </h2>
                <p>
                    ArchViz est un studio de visualisation architecturale, nous cr??ons des images et animations Photor??alismes pour architectes, designers, promoteurs immobiliers??etc...                              </p>
                <div className='network_container'>
                    <a href="https://www.instagram.com/arch_viz_sn/" target="_blank">
                        <div className="network">
                            <ion-icon name="logo-instagram"></ion-icon>
                        </div>
                    </a>
                    <a href="https://api.whatsapp.com/send?phone=221777278655&text=Message provenant de ArchViz.sn" target="_blank">
                        <div className="network">
                            <ion-icon name="logo-whatsapp"></ion-icon>
                        </div>
                    </a>
                    <a href="mailto:archviz.sn@gmail.com?subject=Message provenant de ArchViz.sn" target="_blank">
                        <div className="network">
                            <ion-icon name="mail-outline"></ion-icon>
                        </div>
                    </a>

                </div>
            </section>
            <section className='AccueilBigProjectsSection'>
                <OneBigProject title={'D??coration Int??rieur'} image={ImageProjectC3}
                    description={"?? l'aide des logiciels de derni??re g??n??ration et de notre savoir-faire dans le domaine de l???architecture d???int??rieur. Nous vous aidons dans l???am??nagement de vos espaces. Du design moderne au traditionnelle, minimaliste etc..."}
                    color={'#EAEAEA'} textcolor={'#222'} theKey={1} side={'right'} link={'/Interior1'} The_Experience={true} The_Experience_Link={'https://papemndiaye1.github.io/ArchViz_Interior_Design_1/'} />

                <OneBigProject title={'Design de Maison Moderne'} image={ImageProjectA1}
                    description={"Nous mettons en ??uvre diff??rentes approches pour une optimisation de vos espaces ext??rieurs et int??rieurs. Pour se faire nous utilisons diff??rents logiciels avec les derni??res innovations pour des rendus d???images ?? la fois r??alistes et immersives."}
                    color={'#93A490'} textcolor={'#222'} theKey={2} side={'left'} The_Experience={false} link={'/SmallHouse1'} />

                <OneBigProject title={'Design pour les Commerces'} image={ImageProjectE3}
                    description={'Nous avons une grande exp??rience dans l???agencement de point de vente, et l???am??nagement de bureaux. Quelle que soit la typologie du point de vente, sa vocation, sa strat??gie et son positionnement.'}
                    color={'#F4EFE4'} textcolor={'#222'} theKey={3} side={'right'} The_Experience={false} link={'/Pharmacie1'} />

                <OneBigProject title={'La 3D dans le domaine des Industries'} image={ImageProjectF2}
                    description={"Le rendu et l'animation avec des temps de production de plus en plus rapide ont ouvert la porte ?? un monde de variations infinies dans la conception graphique adapt??e ?? vos demandes uniques."}
                    color={'#F1F1F1'} textcolor={'#222'} theKey={4} The_Experience={false} link={'/Hangar1'} side={'left'} />

                <OneBigProject title={"Visualisation de Fa??ade d'Immeuble"} image={ImageProjectB1}
                    description={'Nous avons une grande exp??rience dans l???agencement de bureaux. Quel que soit la typologie, sa vocation, sa strat??gie et son positionnement.'}
                    color={'#EAEAEA'} textcolor={'#222'} theKey={5} side={'right'} The_Experience={false} link={'/Immeuble1'} />

            </section>
            <section className='galerie_presantation'>
                <Link className='nos_r??alisations' to={'./Traveaux'}>
                    Nos R??alisations   <ion-icon name="arrow-forward-outline"></ion-icon>
                </Link>
                <div className='galerie_container'>
                    Galerie
                </div>
            </section>
            <TheGallery GetImageOnAccueil={GetImageOnApp} />
        </div >
    );
}
//!###############################################################
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

        let windowWidth = window.innerWidth;
        if (windowWidth >= 1000) {
            console.log(windowWidth);
            setInterval(function () {
                AllDot[theCourentSlide].click()
                theCourentSlide++
                if (theCourentSlide >= AllDot.length) {
                    return theCourentSlide = 0
                }
            }, 6000);
        }

        return () => {
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
            <Slider giveSliderKey={CreateSliderBtn} theKey={1} date={'27 Mai, 2022'} title={<p>Visualisations 3D <dr />"Rendus Images <br />& Animations"</p>} />
            <Slider giveSliderKey={CreateSliderBtn} theKey={2} date={'09 Mars, 2022'} title={<p>Cr??ation De <dr />Maquettes </p>} />
            <Slider giveSliderKey={CreateSliderBtn} theKey={3} date={'03 Juin, 2022'} title={<p>R??alit?? <dr /> Virtuel & Experience <dr /> 3D Web</p>} />
            <Slider giveSliderKey={CreateSliderBtn} theKey={4} date={'27 Mai, 2022'} title={<p>Visualisations <dr /> Architecturals <dr />  Pour Commerces</p>} />
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
function TheGallery({ GetImageOnAccueil }) {

    const onClickOnImage = (theimage, title, date, link) => {
        GetImageOnAccueil(theimage, title, date, link);
    }

    return (
        <div className="the_galerie_container">

            <OneGalerieElement giveImageId={onClickOnImage} link={'/Interior1'} image={ImageProjectC3} title={'D??coration Interieur'} date={'03 Juin, 2022'} />
            <OneGalerieElement giveImageId={onClickOnImage} link={'/Pharmacie2'} image={ImageProjectJ1} title={'Design pour les Commerces'} date={'27 Mai, 2012'} />
            <OneGalerieElement giveImageId={onClickOnImage} link={'/VillaB'} image={ImageProjectI2} title={'Villa Fatou'} date={'06 Juin, 2014'} />
            <OneGalerieElement giveImageId={onClickOnImage} link={'/VillaB'} image={ImageProjectI4} title={'Villa Fatou'} date={'06 Juin, 2014'} />
            <OneGalerieElement giveImageId={onClickOnImage} link={'/Villa'} image={ImageProjectH2} title={'Immeuble Thi??s Grand Standing'} date={'15 Avril, 2022'} />

            <OneGalerieElement giveImageId={onClickOnImage} link={'/Touba'} image={ImageProjectD1} title={'Maquette de la Grande Mosqu??e de Touba'} date={'09 Mars, 2022'} />
            <OneGalerieElement giveImageId={onClickOnImage} link={'/Pharmacie1'} image={ImageProjectE1} title={'Pharmacie Design'} date={'27 Mai, 2022'} />
            <OneGalerieElement giveImageId={onClickOnImage} link={'/Pharmacie3'} image={ImageProjectK3} title={'Pharmacie Martin Luther King'} date={'07 Mai, 2013'} />
            <OneGalerieElement giveImageId={onClickOnImage} link={'/Pharmacie3'} image={ImageProjectK2} title={'Pharmacie Martin Luther King'} date={'07 Mai, 2013'} />
            <OneGalerieElement giveImageId={onClickOnImage} link={'/Interior1'} image={ImageProjectC4} title={'D??coration Interieur'} date={'03 Juin, 2022'} />

            <OneGalerieElement giveImageId={onClickOnImage} link={'/Pharmacie1'} image={ImageProjectE4} title={'D??coration Interieur'} date={'27 Mai, 2022'} />
            <OneGalerieElement giveImageId={onClickOnImage} link={'/Villa'} image={ImageProjectH3} title={'Immeuble Thi??s Grand Standing'} date={'06 Juin, 2012'} />
            <OneGalerieElement giveImageId={onClickOnImage} link={'/SmallHouse1'} image={ImageProjectA2} title={'Design de Maison Moderne'} date={'15 Avril, 2022'} />
            <OneGalerieElement giveImageId={onClickOnImage} link={'/Interior1'} image={ImageProjectC2} title={'D??coration Interieur'} date={'03 Juin, 2022'} />
            <OneGalerieElement giveImageId={onClickOnImage} link={'/Interior1'} image={ImageProjectC5} title={'D??coration Interieur'} date={'03 Juin, 2022'} />

            <OneGalerieElement giveImageId={onClickOnImage} link={'/MSAD'} image={ImageProjectG2} title={'Manufacture des Arts D??coratifs de Thi??s'} date={'03 Septembre, 2022'} />
            <OneGalerieElement giveImageId={onClickOnImage} link={'/Immeuble1'} image={ImageProjectB2} title={"Visualisation Exterieur d'Immeuble"} date={'23 Mars, 2022'} />
            <OneGalerieElement giveImageId={onClickOnImage} link={'/Pharmacie1'} image={ImageProjectE2} title={'Pharmacie Design'} date={'27 Mai, 2022'} />
            <OneGalerieElement giveImageId={onClickOnImage} link={'/SmallHouse1'} image={ImageProjectA1} title={'Design de Maison Moderne'} date={'15 avril, 2022'} />
            <OneGalerieElement giveImageId={onClickOnImage} link={'/Hangar1'} image={ImageProjectF3} title={'Maquette Hangar Photovolta??que'} date={'29 Juin, 2021'} />

            <OneGalerieElement giveImageId={onClickOnImage} link={'/Pharmacie1'} image={ImageProjectE6} title={'Pharmacie Design'} date={'27 Mai, 2022'} />
            <OneGalerieElement giveImageId={onClickOnImage} link={'/Pharmacie1'} image={ImageProjectE3} title={'Pharmacie Design'} date={'27 Mai, 2022'} />
            <OneGalerieElement giveImageId={onClickOnImage} link={'/VillaB'} image={ImageProjectI3} title={'Villa Fatou'} date={'06 Juin, 2014'} />
            <OneGalerieElement giveImageId={onClickOnImage} link={'/Interior1'} image={ImageProjectC1} title={'D??coration Interieur'} date={'03 Juin, 2022'} />
            <OneGalerieElement giveImageId={onClickOnImage} link={'/Pharmacie3'} image={ImageProjectK5} title={'Pharmacie Martin Luther King'} date={'07 Mai, 2013'} />

        </div>
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
            <img src={image} width='100%' alt={title} />
            <div className='one_galerie_element_hover'>
                <div className='iner_container' >

                    <Link onClick={clickOnImage} to={'/Galerie'}>
                        <div
                            className='Icon-to-click-on'>
                            <ion-icon name="expand-sharp"></ion-icon>
                        </div>
                    </Link >

                    <Link className='titre' to={link}>
                        {title}
                    </Link>
                    <p className='date'>
                        {date}
                    </p>
                </div>
            </div>
        </div>
    );
}
//!###############################################################
function OneBigProject({ color, title, description, side, textcolor, theKey, image, link, The_Experience, The_Experience_Link }) {
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
                <section className="One_Project_In_Home right">
                    <div
                        style={{
                            color: textcolor,
                        }}
                        className='info_container '>
                        <h3
                            style={{
                                color: textcolor,
                            }} className='title'>
                            {title}
                        </h3>
                        <p
                            className='description'>
                            <div
                                style={{
                                    backgroundColor: textcolor,
                                }}
                                className='bar'>
                            </div>
                            {description}
                            <Link className='the_link'
                                style={{
                                    color: textcolor,
                                    border: `.1em solid ${textcolor}`
                                }} to={link}>
                                Voir plus  <ion-icon name="arrow-forward-outline"></ion-icon>
                            </Link>
                            {The_Experience ? (
                                <a
                                    style={{
                                        color: textcolor,
                                        border: `.1em solid ${textcolor}`
                                    }}
                                    className='the_link' href={The_Experience_Link} target="_blank" >

                                    Experience VR/AR <ion-icon name="arrow-forward-outline"></ion-icon>
                                </a>
                            ) : (
                                <div></div>
                            )}
                        </p>
                    </div>
                    <div
                        role="img" alt={title}
                        className='image_container'
                        style={{
                            backgroundImage: `url('${image}')`,
                        }}
                    >
                    </div>
                </section>
            ) : (
                <section className="One_Project_In_Home left">
                    <div
                        style={{
                            color: textcolor,
                        }}
                        className='info_container' >
                        <h3
                            style={{
                                color: textcolor,
                            }}
                            className='title' >
                            {title}
                        </h3>
                        <p
                            className='description'>
                            <div
                                style={{
                                    backgroundColor: textcolor,
                                }}
                                className='bar'>
                            </div>
                            {description}
                            <Link className='the_link'
                                style={{
                                    color: textcolor,
                                    border: `.1em solid ${textcolor}`
                                }} to={link}>

                                Voir plus  <ion-icon name="arrow-forward-outline"></ion-icon>
                            </Link>
                            {The_Experience ? (
                                <a
                                    style={{
                                        color: textcolor,
                                        border: `.1em solid ${textcolor}`
                                    }}
                                    className='the_link' href={The_Experience_Link} target="_blank" >

                                    Experience VR/AR <ion-icon name="arrow-forward-outline"></ion-icon>
                                </a>
                            ) : (
                                <div></div>
                            )}
                        </p>
                    </div>
                    <div
                        role="img" alt={title}
                        className='image_container'
                        style={{
                            backgroundImage: `url('${image}')`,
                        }}
                    >
                    </div>
                </section>
            )
            }
        </Fragment >

    );
}

//!###############################################################
function TheFooter({ }) {

    const onClickOnTab = () => {
        let AccueilContainer = document.querySelector(".App_container")
        AccueilContainer.scrollTop = 0;
    }

    return (
        <footer className='the_footer'>
            <div
                role="img" alt='ArchVizLogo'
                className='logo-container'>
            </div>
            <div className='titles'>Categories</div>
            <div className='titles'>Contacts</div>
            <div className='titles'>Reseaux</div>
            <div className='titles'>Createur</div>

            <a href="https://pape-momar-ndiaye-portfolio.netlify.app/" target="_blank"
                className='portfolio_link'>Voir le portfolio <ion-icon name="arrow-forward-outline"></ion-icon></a>

            <p className='archviz_description'>
                Nous aidons les architectes  et les promoteurs immobiliers ?? impressionner les investisseurs et les acheteurs avec des visuels professionnels.
            </p>

            <nav className='menu_elemant_container'>
                <Link className='menu_elemant' to={'/'} onClick={onClickOnTab}>
                    Accueil
                </Link>
                <Link className='menu_elemant' to={'/Traveaux'} onClick={onClickOnTab}>
                    Traveaux
                </Link>
                <Link className='menu_elemant' to={'/Service'} onClick={onClickOnTab}>
                    Services
                </Link>
                <Link className='menu_elemant' to={'/Galerie'} onClick={onClickOnTab}>
                    Galerie
                </Link>
                <div className='menu_elemant'></div>
            </nav>

            <div className='categories_elemant_container'>
                <div className='categories_elemant'><ion-icon name="ellipse"></ion-icon>Exterior Design</div>
                <div className='categories_elemant'><ion-icon name="ellipse"></ion-icon>Interior Design</div>
                <div className='categories_elemant'><ion-icon name="ellipse"></ion-icon>Creation de Maquette</div>
                <div className='categories_elemant'><ion-icon name="ellipse"></ion-icon>Visualisation</div>
                <div className='categories_elemant'><ion-icon name="ellipse"></ion-icon>Creation de Visite Web</div>
                <div className='categories_elemant'><ion-icon name="ellipse"></ion-icon>Experience de Realite Virtuel</div>
            </div>

            <div className='contact_elemant_container'>
                <div className='contact_elemant '>archviz.sn@gmail.com</div>
                <div className='contact_elemant '>Tel: 77 727 86 55</div>
            </div>

            <div className='network_container'>

                <a href="https://www.instagram.com/arch_viz_sn/" target="_blank">
                    <div className="network">
                        <ion-icon name="logo-instagram"></ion-icon>
                    </div>
                </a>

                <a href="mailto:archviz.sn@gmail.com?subject=Message provenant de ArchViz.sn" target="_blank">
                    <div className="network">
                        <ion-icon name="mail-outline"></ion-icon>
                    </div>
                </a>

                <a href="https://www.linkedin.com/company/archviz-sn/" target="_blank">
                    <div className="network">
                        <ion-icon name="logo-linkedin"></ion-icon>
                    </div>
                </a>

                <a href="https://www.facebook.com/ARVHVIZ/" target="_blank">
                    <div className="network">
                        <ion-icon name="logo-facebook"></ion-icon>
                    </div>
                </a>

                <a href="https://api.whatsapp.com/send?phone=221777278655&text=Message provenant de ArchViz.sn" target="_blank">
                    <div className="network">
                        <ion-icon name="logo-whatsapp"></ion-icon>
                    </div>
                </a>

            </div>

            <div className='the_line'>
            </div>

            <div className='country'>
                <ion-icon name="globe-outline"></ion-icon>  S??n??gal
            </div>
            <div className='rights'>
                ?? 2022 | Archviz. Tout droit r??serv??.
            </div>
        </footer>
    );
}




export { Accueil, TheGallery, OneBigProject, TheFooter };
