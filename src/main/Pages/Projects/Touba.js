import { React, useEffect, useState, Fragment } from 'react';




import ImageProjectC1 from '../../Style/Images/Project/NFT-1.jpg';
import ImageProjectC2 from '../../Style/Images/Project/NFT-2.jpg';
import ImageProjectC3 from '../../Style/Images/Project/NFT-3.jpg';





function Touba({ }) {
    const [TheImageContainer, setTheImageContainer] = useState(false);
    const [TheImageInTheContainer, setTheImageInTheContainer] = useState(ImageProjectC1);

    useEffect(() => {
        let AccueilContainer = document.querySelector(".App_container")
        AccueilContainer.scrollTop = 0;

        let hoverLoaderContainer = document.querySelector(".hover_loader_container")
        hoverLoaderContainer.style.display = 'flex';

        setTimeout(function () {
            hoverLoaderContainer.style.display = '';
        }, 1500);


        return () => {

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

            <div className='Touba_1_container'>

                <div className='project_display'>
                    <h1 className='project_title'>
                        Maquettete de la Grande Mosquée de Touba
                    </h1>
                    <h3 className='project_description'>
                        par Pape Momar Ndiaye | 09 Mars, 2022 |
                    </h3>
                    <p>
                        Sur la base du matériel de briefing, nous créons des rendus ou croquis pour chaque image commandée.
                    </p>
                    <div className='TheImageContainer'>
                        <img onClick={displayImage} src={ImageProjectC1} width='100%' alt=' Maquettete de la Grande Mosquée de Touba - 1' />
                    </div>
                    <div className='the_video'>
                        <iframe width="100%" height="100%"
                            src="https://www.youtube.com/embed/uSlNYZqbRIQ"
                            title="Touba"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>

                        </iframe>
                    </div>
                    <div className='TheImageContainer'>
                        <img onClick={displayImage} src={ImageProjectC2} width='100%' alt=' Maquettete de la Grande Mosquée de Touba - 2' />
                    </div>
                    <div className='TheImageContainer'>
                        <img onClick={displayImage} src={ImageProjectC3} width='100%' alt=' Maquettete de la Grande Mosquée de Touba - 3' />
                    </div>
                </div>
            </div>
        </Fragment >
    );
}




export default Touba;
