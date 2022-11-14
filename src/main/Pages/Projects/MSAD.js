import { React, useEffect, useState, Fragment } from 'react';


import ImageProjectC1 from '../../Style/Images/Project/MSAD_1.jpg';
import ImageProjectC2 from '../../Style/Images/Project/MSAD_2.jpg';
import ImageProjectC3 from '../../Style/Images/Project/MSAD_3.jpg';



function MSAD({ }) {

    const [TheImageContainer, setTheImageContainer] = useState(false);
    const [TheImageInTheContainer, setTheImageInTheContainer] = useState(ImageProjectC1);

    useEffect(() => {
        let AccueilContainer = document.querySelector(".App_container")
        AccueilContainer.scrollTop = 0;
        return () => {
            // setTheChangeInGalerie(false);
            // console.log('ww');
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
                        Expériences de réalité virtuelle réalisé pour la M.S.A.D de Thiés. <br /> Nous pouvons vous aider à améliorer vos ventes avec cette technologie en constante évolution.
                    </p>

                    <a className='the_links' href='https://papemndiaye1.github.io/MSAT-WebSite/' target="_blank">
                        Voir le site Web <ion-icon name="arrow-forward-outline"></ion-icon>
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

                {/* <div className='tools'>
                    <h1 className='theToolsTitle'>
                        Tools
                    </h1>
                    <div
                        style={{
                            backgroundImage: `url('${blender}')`,
                        }}
                        className='theToolsIcon1'>
                    </div>
                    <div
                        style={{
                            backgroundImage: `url('${unreal}')`,
                            backgroundSize: `85%`,
                        }}
                        className='theToolsIcon2'>
                    </div>
                    <div
                        style={{
                            backgroundImage: `url('${photoShop}')`,
                            backgroundSize: `80%`,
                        }}
                        className='theToolsIcon3'>
                    </div>
                </div> */}
            </div>
        </Fragment >
    );

}

export default MSAD;
