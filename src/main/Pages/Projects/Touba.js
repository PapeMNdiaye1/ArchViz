import { React, useEffect, useState, Fragment } from 'react';




import ImageProjectC1 from '../../Style/Images/Project/NFT-1.jpg';
import ImageProjectC2 from '../../Style/Images/Project/NFT-2.jpg';
import ImageProjectC3 from '../../Style/Images/Project/NFT-3.jpg';





function Touba({ }) {
    const [TheImageContainer, setTheImageContainer] = useState(false);
    const [TheImageInTheContainer, setTheImageInTheContainer] = useState(ImageProjectC1);

    // useEffect = () => {
    //     let AccueilContainer = document.querySelector(".App_container")
    //     AccueilContainer.scrollTop = 0;
    // }

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

            <div className='Touba_1_container'>

                <div className='project_display'>
                    <h1 className='project_title'>
                        Maquette de la Grande Mosquée de Touba
                    </h1>
                    <h3 className='project_description'>
                        par Pape Momor Ndiaye | Juin 6, 2022 |
                    </h3>
                    <div className='TheImageContainer'>
                        <img onClick={displayImage} src={ImageProjectC1} width='100%' />
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores vitae dicta ut reprehenderit! Veniam explicabo aliquam vel, repellat aspernatur iste non itaque odit blanditiis quae autem facere neque minima id?
                    </p>
                    <h1 className='project_title'>
                        1. Setup the Model to Render With and Without Glass
                    </h1>
                    <div className='TheImageContainer'>
                        <img onClick={displayImage} src={ImageProjectC2} width='100%' />
                    </div>
                    <div className='TheImageContainer'>
                        <img onClick={displayImage} src={ImageProjectC3} width='100%' />
                    </div>
                    {/* <div className='TheImageContainer'>
                        <img onClick={displayImage} src={ImageProjectC4} width='100%' />
                    </div> */}
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
        </Fragment>
    );
}




export default Touba;
