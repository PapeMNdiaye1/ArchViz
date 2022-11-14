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

            <div className='Pharmacie_1_container'>

                <div className='project_display'>
                    <h1 className='project_title'>
                        Pharmacie Design
                    </h1>
                    <h3 className='project_description'>
                        par Pape Momar Ndiaye | 27 Mai, 2022 |
                    </h3>
                    <p>
                        Design de pharmacie interieur et exterieur sur base de plan. Rendus images en réalisés avec blender, compositing sur photoshop.
                    </p>
                    <div className='TheImageContainer'>
                        <img onClick={displayImage} src={ImageProjectC5} width='100%' />
                    </div>
                    <div className='TheImageContainer'>
                        <img onClick={displayImage} src={ImageProjectC1} width='100%' />
                    </div>
                    <div className='TheImageContainer'>
                        <img onClick={displayImage} src={ImageProjectC2} width='100%' />
                    </div>
                    <div className='TheImageContainer'>
                        <img onClick={displayImage} src={ImageProjectC3} width='100%' />
                    </div>
                    <div className='TheImageContainer'>
                        <img onClick={displayImage} src={ImageProjectC4} width='100%' />
                    </div>
                    <div className='TheImageContainer'>
                        <img onClick={displayImage} src={ImageProjectC6} width='100%' />
                    </div>
                    <h1 className='project_title'>
                        Clay Renders
                    </h1>
                    <div className='TheImageContainer'>
                        <img onClick={displayImage} src={ImageProjectC7} width='100%' />
                    </div>
                    <div className='TheImageContainer'>
                        <img onClick={displayImage} src={ImageProjectC8} width='100%' />
                    </div>
                    <div className='TheImageContainer'>
                        <img onClick={displayImage} src={ImageProjectC9} width='100%' />
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
        </Fragment>
    );
}




export default Pharmacie1;
