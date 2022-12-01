import { React, useEffect, useState, Fragment } from 'react';


import ImageProjectC1 from '../../Style/Images/Project/MSAD_1.jpg';
import ImageProjectC2 from '../../Style/Images/Project/MSAD_2.jpg';
import ImageProjectC3 from '../../Style/Images/Project/MSAD_3.jpg';



function MSAD({ }) {

    const [TheImageContainer, setTheImageContainer] = useState(false);
    const [TheImageInTheContainer, setTheImageInTheContainer] = useState(ImageProjectC1);

    useEffect(() => {

        let Page_slider = document.querySelector('.page_title_slider')
        Page_slider.style.opacity = `0`

        let AccueilContainer = document.querySelector(".App_container")
        AccueilContainer.scrollTop = 0;

        let hoverLoaderContainer = document.querySelector(".hover_loader_container")
        hoverLoaderContainer.style.display = 'flex';

        setTimeout(function () {
            hoverLoaderContainer.style.display = '';
        }, 1500);


        return () => {
            Page_slider.style.opacity = `1`

        }
    }, []);

    const displayImage = (e) => {
        if (TheImageContainer) {
            setTheImageContainer(false);
        } else {
            setTheImageInTheContainer(e.target.getAttribute("src"))
            setTheImageContainer(true);
        }
    }

    return (
        <Fragment>
            {TheImageContainer &&
                <div className='display_image_container'>
                    <div>
                        <div
                            onClick={displayImage}
                            className='close_image_container'>
                        </div>
                        <img src={TheImageInTheContainer} width='100%' />
                    </div>
                </div>
            }

            <div className='MSAD_container'>

                <div className='project_display'>
                    <h1 className='project_title'>
                        Manufacture des Arts Décoratifs de Thiés
                    </h1>
                    <h3 className='project_description'>
                        par Pape Momar Ndiaye | Juin 09, 2022 |
                    </h3>
                    <p>
                        Expériences de réalité virtuelle réalisées pour la M.S.A.D de Thiès. <br />Nous pouvons vous aider à améliorer vos ventes avec cette technique en constante évolution.
                    </p>

                    <a className='the_links' href='https://papemndiaye1.github.io/MSAT-WebSite/' target="_blank">
                        Experience VR/AR <ion-icon name="arrow-forward-outline"></ion-icon>
                    </a>
                    <div className='TheImageContainer'>
                        <img onClick={displayImage} src={ImageProjectC1} width='100%' />
                    </div>
                    <div className='TheImageContainer'>
                        <img onClick={displayImage} src={ImageProjectC2} width='100%' />
                    </div>
                    <div className='TheImageContainer'>
                        <img onClick={displayImage} src={ImageProjectC3} width='100%' />
                    </div>

                </div>
            </div>
        </Fragment >
    );

}

export default MSAD;
