import { React, useEffect, useState, Fragment } from 'react';

import { TheGallery, TheFooter } from './Accueil';

import { Link } from "react-router-dom";

function Gallery({ TheImageToGallery,
    TheTitleToGallery,
    TheDateToGallery,
    TheLinkToGallery
}) {

    const [TheImage, setTheImage] = useState('');
    const [TheTitle, setTheTitle] = useState('');
    const [TheDate, setTheDate] = useState('');
    const [TheLink, setTheLink] = useState('/');

    const [TheChangeInGalerie, setTheChangeInGalerie] = useState(false);
    const [TheImageContainer, setTheImageContainer] = useState(false);

    useEffect(() => {

        console.log(TheLinkToGallery);
        if (!TheChangeInGalerie) {
            setTheImage(TheImageToGallery);
            setTheTitle(TheTitleToGallery);
            setTheDate(TheDateToGallery);
            setTheLink(TheLinkToGallery);
            setTheChangeInGalerie(true);
        } else {
            setTheImage(TheImage);
            setTheTitle(TheTitle);
            setTheDate(TheDate);
            setTheLink(TheLink);
        }
        return () => {
            setTheChangeInGalerie(false);
        }
    }, []);


    const GetImageOnApp = (theimage, title, date, link) => {
        setTheImage(theimage);
        setTheTitle(title);
        setTheDate(date);
        setTheLink(link);
        console.log(link);
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
                    {/* <div className='the_title'> */}
                    <Link className='the_title' to={TheLink}>
                        {TheTitle}
                    </Link>
                    {/* </div> */}
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
