import { React, useEffect, useState, Fragment } from 'react';


import ImageProjectC1 from '../../Style/Images/Project/Immeuble-1.jpg';
import ImageProjectC2 from '../../Style/Images/Project/Immeuble-2.jpg';
import ImageProjectC3 from '../../Style/Images/Project/Immeuble-3.jpg';


function Immeuble1({ }) {
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

            <div className='Immeuble_1_container'>

                <div className='project_display'>
                    <h1 className='project_title'>
                        Design de Maison Moderne
                    </h1>
                    <h3 className='project_description'>
                        par Pape Momar Ndiaye | 23 Mars, 2022 |
                    </h3>
                    <p>
                        Design de façade d'immeuble sur base de plan. Rendus images en réalisés avec blender, compositing sur photoshop.
                    </p>
                    <div className='TheImageContainer'>
                        <img onClick={displayImage} src={ImageProjectC1} width='100%' alt='Design de Maison Moderne - 1' />
                    </div>

                    <div className='TheImageContainer'>
                        <img onClick={displayImage} src={ImageProjectC2} width='100%' alt='Design de Maison Moderne - 2' />
                    </div>

                    <div className='TheImageContainer'>
                        <img onClick={displayImage} src={ImageProjectC3} width='100%' alt='Design de Maison Moderne - 3' />
                    </div>
                </div>
            </div>
        </Fragment>
    );
}


export default Immeuble1;