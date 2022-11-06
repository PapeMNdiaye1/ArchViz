import { React, useEffect, useState } from 'react';

import { OneBigProject } from './Accueil';



import ImageProjectA1 from '../Style/Images/Project/Exterior-1.jpg';

import ImageProjectB1 from '../Style/Images/Project/Immeuble-1.jpg';

import ImageProjectC3 from '../Style/Images/Project/Interior-1-3.jpg';

import ImageProjectD3 from '../Style/Images/Project/NFT-3.jpg';

import ImageProjectE4 from '../Style/Images/Project/Pharmacie-4.jpg';

import ImageProjectF2 from '../Style/Images/Project/Hangar-2.jpg';


function Traveaux() {
    return (
        <div id="Traveaux">
            <div className='Traveaux-Header'>
                <div className='visualization-projects'>
                    Visualization Projects
                </div>
                <div className='visualization-projects-description'>
                    Below are some of the projects I
                    have designed that create a context for my
                    illustrations. Each project is positioned in an unique environment so that I can experiment and explore different visualization strategies                </div>
            </div>
            <div className='AccueilBigProjectsSection'>
                <OneBigProject title={'MIT Student Hub'} image={ImageProjectC3}
                    description={'The Student Hub design preserves the historic framework of the MIT campus by recycling facades and maintaining existing building footprints. Modern forms are inserted underground and sliced through the form revealing new connections to iconic campus sculptures and gateways.'}
                    color={'#EAEAEA'} textcolor={'#222'} theKey={1} side={'left'} />
                <OneBigProject title={'MIT Student Hub1'} image={ImageProjectA1}
                    description={'The Student Hub design preserves the historic framework of the MIT campus by recycling facades and maintaining existing building footprints. Modern forms are inserted underground and sliced through the form revealing new connections to iconic campus sculptures and gateways.'}
                    color={'#93A490'} textcolor={'#222'} theKey={2} side={'right'} />
                <OneBigProject title={'MIT Student Hub'} image={ImageProjectD3}
                    description={'The Student Hub design preserves the historic framework of the MIT campus by recycling facades and maintaining existing building footprints. Modern forms are inserted underground and sliced through the form revealing new connections to iconic campus sculptures and gateways.'}
                    color={'#DB9B18'} textcolor={'#222'} theKey={3} side={'left'} />
                <OneBigProject title={'MIT Student Hub3'} image={ImageProjectE4}
                    description={'The Student Hub design preserves the historic framework of the MIT campus by recycling facades and maintaining existing building footprints. Modern forms are inserted underground and sliced through the form revealing new connections to iconic campus sculptures and gateways.'}
                    color={'#F4EFE4'} textcolor={'#222'} theKey={4} side={'right'} />
                <OneBigProject title={'MIT Student Hub'} image={ImageProjectB1}
                    description={'The Student Hub design preserves the historic framework of the MIT campus by recycling facades and maintaining existing building footprints. Modern forms are inserted underground and sliced through the form revealing new connections to iconic campus sculptures and gateways.'}
                    color={'#182B38'} textcolor={'#f1f1f1'} theKey={5} side={'left'} />
                <OneBigProject title={'MIT Student Hub3'} image={ImageProjectF2}
                    description={'The Student Hub design preserves the historic framework of the MIT campus by recycling facades and maintaining existing building footprints. Modern forms are inserted underground and sliced through the form revealing new connections to iconic campus sculptures and gateways.'}
                    color={'#F1F1F1'} textcolor={'#222'} theKey={6} side={'right'} />

            </div>
        </div>
    );
}

export default Traveaux;
