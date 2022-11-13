import { React, useEffect, useState, Fragment } from 'react';




import ImageProjectC1 from '../../Style/Images/Project/Immeuble-1.jpg';
import ImageProjectC2 from '../../Style/Images/Project/Immeuble-2.jpg';
import ImageProjectC3 from '../../Style/Images/Project/Immeuble-3.jpg';
// import ImageProjectC4 from '../../Style/Images/Project/Exterior-3.jpg';
// import ImageProjectC5 from '../../Style/Images/Project/Exterior-5.jpg';





function Immeuble1({ }) {
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

            <div className='Immeuble_1_container'>

                <div className='project_display'>
                    <h1 className='project_title'>
                        Design de Maison Moderne
                    </h1>
                    <h3 className='project_description'>
                        par Pape Momor Ndiaye | 23 Mars, 2022 |
                    </h3>
                    <p>
                        Design de façade d\'immeuble sur base de plan. Rendus images en réalisés avec blender, compositing sur photoshop.
                    </p>
                    <div className='TheImageContainer'>
                        <img onClick={displayImage} src={ImageProjectC1} width='100%' />
                    </div>
                    {/* <h1 className='project_title'>
                        1. Setup the Model to Render With and Without Glass
                    </h1> */}

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




export default Immeuble1;
