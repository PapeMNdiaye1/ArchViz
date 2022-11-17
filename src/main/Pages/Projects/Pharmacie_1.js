import { React, useEffect, useState, Fragment } from 'react';




import ImageProjectC1 from '../../Style/Images/Project/Pharmacie-1.jpg';
import ImageProjectC2 from '../../Style/Images/Project/Pharmacie-2.jpg';
import ImageProjectC3 from '../../Style/Images/Project/Pharmacie-3.jpg';
import ImageProjectC4 from '../../Style/Images/Project/Pharmacie-4.jpg';
import ImageProjectC5 from '../../Style/Images/Project/Pharmacie-5.jpg';
import ImageProjectC6 from '../../Style/Images/Project/Pharmacie-6.jpg';
import ImageProjectC7 from '../../Style/Images/Project/Pharmacie-7.jpg';
import ImageProjectC8 from '../../Style/Images/Project/Pharmacie-8.jpg';
import ImageProjectC9 from '../../Style/Images/Project/Pharmacie-9.jpg';





function Pharmacie1({ }) {
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

            <div className='Pharmacie_1_container'>

                <div className='project_display'>
                    <h1 className='project_title'>
                        Pharmacie Design
                    </h1>
                    <h3 className='project_description'>
                        par Pape Momar Ndiaye | 27 Mai, 2022 |
                    </h3>
                    <p>
                        Nous avons une grande expérience dans l’agencement de point de vente, et l’aménagement de bureaux. Nous avons un grand savoir-faire quel que soit la typologie du point de vente, sa vocation, sa stratégie et son positionnement.                    </p>
                    <div className='TheImageContainer'>
                        <img onClick={displayImage} src={ImageProjectC5} width='100%' alt='  Pharmacie Design - 1' />
                    </div>
                    <div className='TheImageContainer'>
                        <img onClick={displayImage} src={ImageProjectC1} width='100%' alt='  Pharmacie Design - 2' />
                    </div>
                    <div className='TheImageContainer'>
                        <img onClick={displayImage} src={ImageProjectC2} width='100%' alt='  Pharmacie Design - 3' />
                    </div>
                    <div className='TheImageContainer'>
                        <img onClick={displayImage} src={ImageProjectC3} width='100%' alt='  Pharmacie Design - 4' />
                    </div>
                    <div className='TheImageContainer'>
                        <img onClick={displayImage} src={ImageProjectC4} width='100%' alt='  Pharmacie Design - 5' />
                    </div>
                    <div className='TheImageContainer'>
                        <img onClick={displayImage} src={ImageProjectC6} width='100%' alt='  Pharmacie Design - 6' />
                    </div>
                    <h1 className='project_title'>
                        Clay Renders
                    </h1>
                    <div className='TheImageContainer'>
                        <img onClick={displayImage} src={ImageProjectC7} width='100%' alt='  Pharmacie Design - 7' />
                    </div>
                    <div className='TheImageContainer'>
                        <img onClick={displayImage} src={ImageProjectC8} width='100%' alt='  Pharmacie Design - 8' />
                    </div>
                    <div className='TheImageContainer'>
                        <img onClick={displayImage} src={ImageProjectC9} width='100%' alt='  Pharmacie Design - 9' />
                    </div>
                </div>
            </div>
        </Fragment>
    );
}




export default Pharmacie1;
