import { React, useEffect, useState, Fragment } from 'react';

import { TheGallery, TheFooter } from './Accueil';

function Gallery({ TheImageToGallery,
    TheTitleToGallery,
    TheDateToGallery }) {

    const [TheImage, setTheImage] = useState('');
    const [TheTitle, setTheTitle] = useState('');
    const [TheDate, setTheDate] = useState('');
    const [TheChangeInGalerie, setTheChangeInGalerie] = useState(false);
    const [TheImageContainer, setTheImageContainer] = useState(false);

    useEffect(() => {
        console.log(TheImageToGallery,
            TheTitleToGallery,
            TheDateToGallery);
        if (!TheChangeInGalerie) {
            setTheImage(TheImageToGallery);
            setTheTitle(TheTitleToGallery);
            setTheDate(TheDateToGallery);
            setTheChangeInGalerie(true);
        } else {
            setTheImage(TheImage);
            setTheTitle(TheTitle);
            setTheDate(TheDate);
        }

        return () => {
            setTheChangeInGalerie(false);
        }
    }, []);


    const GetImageOnApp = (theimage, title, date) => {
        // console.log(theimage, title, date);
        setTheImage(theimage);
        setTheTitle(title);
        setTheDate(date);
    }

    const displayImage = () => {
        if (TheImageContainer) {
            setTheImageContainer(false);
        } else {
            setTheImageContainer(true);
        }
    }


    return (
        <Fragment>
            <div id="Gallery">
                {TheImageContainer &&
                    <div className='display_image_container'>
                        <div>
                            <div
                                onClick={displayImage}
                                className='close_image_container'>
                            </div>
                            <img src={TheImage} width='100%' />
                        </div>
                    </div>
                }
                <div className='the_galerie_presantation_container'>
                    <img onClick={displayImage} src={TheImage} width='80%' />
                    <div className='the_title'>
                        {TheTitle}
                    </div>
                    <div className='the_date'>
                        {TheDate}
                    </div>

                </div>
                <TheGallery GetImageOnAccueil={GetImageOnApp} />


                <TheFooter />

            </div>

        </Fragment>

    );
}




export default Gallery;
