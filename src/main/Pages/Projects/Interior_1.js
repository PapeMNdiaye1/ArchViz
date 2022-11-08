import { React, useEffect, useState, Fragment } from 'react';

import { TheFooter } from '../Accueil';



import ImageProjectC1 from '../../Style/Images/Project/Interior-1-1.jpg';
import ImageProjectC2 from '../../Style/Images/Project/Interior-1-2.jpg';
import ImageProjectC3 from '../../Style/Images/Project/Interior-1-3.jpg';
import ImageProjectC4 from '../../Style/Images/Project/Interior-1-4.jpg';
import ImageProjectC5 from '../../Style/Images/Project/Interior-1-5.jpg';
import ImageProjectC6 from '../../Style/Images/Project/Interior-1-6.jpg';
import ImageProjectC7 from '../../Style/Images/Project/Interior-1-7.jpg';
import blender from '../../Style/Images/SVG/blender.png';
import unreal from '../../Style/Images/SVG/unreal.png';
import photoShop from '../../Style/Images/SVG/PhotoShop.png';



function Interior1({ }) {

    const [TheImageContainer, setTheImageContainer] = useState(false);
    const [TheImageInTheContainer, setTheImageInTheContainer] = useState(ImageProjectC6);

    useEffect = () => {
        let AccueilContainer = document.querySelector(".App_container")
        AccueilContainer.scrollTop = 0;
    }



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

            <div className='Interior_1_container'>

                <div className='Interior_1'>
                    <h1 className='project_title'>
                        Interior Decoration
                    </h1>
                    <h3 className='project_description'>
                        par Pape Momor Ndiaye | Juin 6, 2022 |
                    </h3>
                    <div className='TheImageContainer'>
                        <img onClick={displayImage} src={ImageProjectC3} width='100%' />
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores vitae dicta ut reprehenderit! Veniam explicabo aliquam vel, repellat aspernatur iste non itaque odit blanditiis quae autem facere neque minima id?
                    </p>
                    <h1 className='project_title'>
                        1. Setup the Model to Render With and Without Glass
                    </h1>
                    <div className='TheImageContainer'>
                        <img onClick={displayImage} src={ImageProjectC6} width='100%' />
                    </div>
                    <div className='TheImageContainer'>
                        <img onClick={displayImage} src={ImageProjectC2} width='100%' />
                    </div>
                    <div className='TheImageContainer'>
                        <img onClick={displayImage} src={ImageProjectC7} width='100%' />
                    </div>
                    <div className='TheImageContainer'>
                        <img onClick={displayImage} src={ImageProjectC1} width='100%' />
                    </div>
                    <div className='TheImageContainer'>
                        <img onClick={displayImage} src={ImageProjectC4} width='100%' />
                    </div>
                    {/* <div className='TheImageContainer'>
                    <img src={ImageProjectC5} width='100%' />
                </div> */}

                </div>
                <div className='tools'>
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
                </div>
            </div>
            < TheFooter />
        </Fragment >
    );
}




export default Interior1;
