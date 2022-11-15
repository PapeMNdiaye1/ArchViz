import React, { Fragment, Suspense, useState, useEffect, componentWillUnmount } from 'react'
// import { render } from 'react-dom';
import { Link } from "react-router-dom";


function TopBare({ onChangeTab }) {

    useEffect(() => {
        let allMenuSection = document.querySelectorAll('.One-Section')
        console.log(allMenuSection);

        for (let i = 0; i < allMenuSection.length; i++) {
            allMenuSection[allMenuSection.length - (i + 1)].style.transitionDelay = `${i * .1}s`;
        }
    });

    const callback = (title, link) => {
        onChangeTab(title, link)
    }

    const onClickOnMenu = (e) => {

        let Menu_slider = document.querySelector('#Top-bare-slider-container')
        let theMenu = document.querySelector('.Menu')
        let allMenuSection = document.querySelectorAll('.One-Section')

        if (theMenu.classList.length > 1) {
            theMenu.classList.remove('Menu_On');
            Menu_slider.style.top = ''
            Menu_slider.style.opacity = '';
            for (let i = 0; i < allMenuSection.length; i++) {
                allMenuSection[i].style.top = ``;
                allMenuSection[i].style.opacity = `0`;
            }

        } else {
            Menu_slider.style.top = '4em';
            Menu_slider.style.opacity = '.9';
            theMenu.classList.add('Menu_On');

            for (let i = 0; i < allMenuSection.length; i++) {
                allMenuSection[i].style.top = `1%`;
                allMenuSection[i].style.opacity = `1`;
            }
        }
    }


    return (
        <Fragment>
            <div id="Top-Bare">
                <Link className='logo-container' to={'/'}>
                </Link>
                <div className='Menu-container'>
                    <div onClick={onClickOnMenu} className='Menu'>
                    </div>
                </div>
            </div>
            <div id='Top-bare-slider-container'>
                <nav className='Menu-container'>
                    <OneSection parentCallback={callback} link={'/'} title={'ACCUEIL'} />
                    <OneSection parentCallback={callback} link={'/Traveaux'} title={'TRAVEAUX'} />
                    <OneSection parentCallback={callback} link={'/Gallery'} title={'GALLERIE'} />
                    <OneSection parentCallback={callback} link={'/Service'} title={'SERVICE'} />
                    <OneSection parentCallback={callback} link={'/Contact'} title={'CONTACT'} />
                </nav>
                <div className="network_container">
                    <a href="https://www.instagram.com/arch_viz_sn/" target="_blank">
                        <div className="network">
                            <ion-icon name="logo-instagram"></ion-icon>
                        </div>
                    </a>
                    <a href="https://api.whatsapp.com/send?phone=221777278655&text=Message provenant de ArchViz.sn" target="_blank">
                        <div className="network">
                            <ion-icon name="logo-whatsapp"></ion-icon>
                        </div>
                    </a>
                    <a href="mailto:archviz.sn@gmail.com?subject=Message provenant de ArchViz.sn" target="_blank">
                        <div className="network">
                            <ion-icon name="mail-outline"></ion-icon>
                        </div>
                    </a>
                </div>
            </div>
        </Fragment>
    );
}



//!###################################################
//!###################################################
//!###################################################
function OneSection({ title, parentCallback, link }) {

    const [TheLink, setTheLink] = useState('/');

    useEffect(() => {
        switch (title) {
            case "ACCUEIL":
                setTheLink('/')
                break;
            case "TRAVEAUX":
                setTheLink('/Traveaux')
                break;
            case "SERVICE":
                setTheLink('/Service')
                break;
            case "GALLERIE":
                setTheLink('/Gallery')
                break;
            case "CONTACT":
                setTheLink('/Contact')
                break;
            default:
                setTheLink('/')
        }
    });

    const onClickOnTab = (e) => {
        parentCallback(title, link)
        e.target.childNodes[0].style.top = ''
        e.target.childNodes[0].childNodes[1].style.opacity = ''
        let Menu_slider = document.querySelector('#Top-bare-slider-container')
        let theMenu = document.querySelector('.Menu')
        let allMenuSection = document.querySelectorAll('.One-Section')
        theMenu.classList.remove('Menu_On');
        Menu_slider.style.top = ''
        Menu_slider.style.opacity = '';
        for (let i = 0; i < allMenuSection.length; i++) {
            allMenuSection[i].style.top = ``;
            allMenuSection[i].style.opacity = `0`;
        }
        let AccueilContainer = document.querySelector(".App_container")
        AccueilContainer.scrollTop = 0;
    }
    const onMouseOverTitle = (e) => {
        e.target.childNodes[0].style.top = '-100%';
        e.target.childNodes[0].childNodes[1].style.opacity = '.7'
    }
    const onMouseOutTitle = (e) => {
        e.target.childNodes[0].style.top = ''
        e.target.childNodes[0].childNodes[1].style.opacity = ''
    }
    return (
        <Fragment>
            <Link to={TheLink} onClick={onClickOnTab}
                onMouseOver={onMouseOverTitle}
                onMouseOut={onMouseOutTitle}
                className='One-Section' >
                <div className='One-slider-Section' >
                    <div className='Top-Title'>
                        <div>
                            {title}
                        </div>
                    </div>
                    <div className='bottom-Title'>
                        <div>
                            {title}
                        </div>
                    </div>
                </div>
            </Link >
        </Fragment>
    );
}

export default TopBare;
