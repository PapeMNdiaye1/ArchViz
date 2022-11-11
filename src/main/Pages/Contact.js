import { React, useEffect, } from 'react';



function Contacts() {
    return (
        <div id="Contacts">
            {/* <div className='follow_us'>
                Suivez Nous Sur
            </div> */}
            <div className='Contact-container'>
                <OneSection link={'https://api.whatsapp.com/send?phone=221777278655&text=The message'}
                    title={<div className="network"><ion-icon name="logo-whatsapp"></ion-icon>WHATSAPP</div>}
                    title2={<div className="network">+221 777278655</div>}
                />
                <OneSection link={'https://www.instagram.com/arch_viz_sn/'}
                    title={<div className="network"><ion-icon name="logo-instagram"></ion-icon>INSTAGRAM</div>}
                    title2={<div className="network">@arch_viz_sn</div>}

                />
                <OneSection link={'https://www.linkedin.com/in/pape-momar-ndiaye-37b862199/'}
                    title={<div className="network"><ion-icon name="logo-linkedin"></ion-icon>LINKEDIN</div>}
                    title2={<div className="network">in/pape-momar-ndiaye</div>}

                />
                <OneSection link={'https://www.facebook.com/ARVHVIZ/'}
                    title={<div className="network"><ion-icon name="logo-facebook"></ion-icon>FACEBOOK</div>}
                    title2={<div className="network">ARCHVIZ</div>}
                />

                <OneSection link={'mailto:archviz.sn@gmail.com?subject=The message'}
                    title={<div className="network"><ion-icon name="mail-outline"></ion-icon>MAIL</div>}
                    title2={<div className="network">archviz.sn@gmail.com</div>}
                />
            </div>
        </div>
    );
}

//!###################################################
function OneSection({ title, link, title2 }) {

    const onClickOnTab = (e) => {
        e.target.childNodes[0].style.top = ''
        e.target.childNodes[0].childNodes[1].style.opacity = ''
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
        <a href={link} target="_blank"
            onClick={onClickOnTab}
            onMouseOver={onMouseOverTitle}
            onMouseOut={onMouseOutTitle}
            className='One-Contact' >
            <div className='One-slider-Section' >
                <div className='Top-Title'>
                    {title}
                </div>
                <div className='bottom-Title'>
                    {title2}
                </div>
            </div>
        </ a>
    );
}

export default Contacts;
