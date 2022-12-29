import { React, useEffect, useState, Fragment } from 'react';



import ImageProjectC1 from '../../Style/Images/Project/Villa_B-1.jpg';
import ImageProjectC2 from '../../Style/Images/Project/Villa_B-2.jpg';
import ImageProjectC3 from '../../Style/Images/Project/Villa_B-3.jpg';
import ImageProjectC4 from '../../Style/Images/Project/Villa_B-4.jpg';




function SmallHouse1({ }) {
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

            <div className='Villa_B_container'>

                <div className='project_display'>
                    <h1 className='project_title'>
                        Villa Fatou
                    </h1>
                    <h3 className='project_description'>
                        par Bokar Ndiaye | 06 Juin, 2014 |
                    </h3>
                    <p>
                        Des designs Modernes, épurés, minimalistes etc.… nous mettons en œuvre différentes approches pour une optimisation de vos espaces extérieurs et intérieurs. Pour se faire nous utilisons différents logiciels avec les dernières innovations pour des rendus d’images à la fois réalistes et immersives.                                          </p>
                    <div className='TheImageContainer'>
                        <img onClick={displayImage} src={ImageProjectC3} width='100%' />
                    </div>
                    <div className='TheImageContainer'>
                        <img onClick={displayImage} src={ImageProjectC1} width='100%' />
                    </div>
                    <div className='TheImageContainer'>
                        <img onClick={displayImage} src={ImageProjectC2} width='100%' />
                    </div>
                    <div className='TheImageContainer'>
                        <img onClick={displayImage} src={ImageProjectC4} width='100%' />
                    </div>
                </div>
            </div>
        </Fragment>
    );
}




export default SmallHouse1;
