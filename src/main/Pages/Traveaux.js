import { React, useEffect, useState } from 'react';
import { OneBigProject, TheFooter } from './Accueil';

import ImageProjectA1 from '../Style/Images/Project/Exterior-1.jpg';
import ImageProjectB1 from '../Style/Images/Project/Immeuble-1.jpg';
import ImageProjectC3 from '../Style/Images/Project/Interior-1-3.jpg';
import ImageProjectD3 from '../Style/Images/Project/NFT-3.jpg';
import ImageProjectE4 from '../Style/Images/Project/Pharmacie-4.jpg';
import ImageProjectF2 from '../Style/Images/Project/Hangar-2.jpg';
import ImageProjectG1 from '../Style/Images/Project/MSAD_2.jpg';

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
                    illustrations. Each project is positioned in an unique environment so that I can experiment and explore different visualization strategies
                </div>
            </div>
            <div className='AccueilBigProjectsSection'>
                <OneBigProject title={'Immeuble'} image={ImageProjectG1}
                    description={'The Student Hub design preserves the historic framework of the MIT campus by recycling facades and maintaining existing building footprints. Modern forms are inserted underground and sliced through the form revealing new connections to iconic campus sculptures and gateways.'}
                    color={'#EAEAEA'} textcolor={'#222'} theKey={1} link={'/Immeuble1'} side={'right'} />
                <OneBigProject title={'Interior Desing'} image={ImageProjectC3}
                    description={'The Student Hub design preserves the historic framework of the MIT campus by recycling facades and maintaining existing building footprints. Modern forms are inserted underground and sliced through the form revealing new connections to iconic campus sculptures and gateways.'}
                    color={'#F1F1F1'} textcolor={'#222'} theKey={2} link={'/Interior1'} side={'left'} />
                <OneBigProject title={'Small House'} image={ImageProjectA1}
                    description={'The Student Hub design preserves the historic framework of the MIT campus by recycling facades and maintaining existing building footprints. Modern forms are inserted underground and sliced through the form revealing new connections to iconic campus sculptures and gateways.'}
                    color={'#93A490'} textcolor={'#222'} theKey={3} link={'/SmallHouse1'} side={'right'} />
                <OneBigProject title={'Touba'} image={ImageProjectD3}
                    description={'The Student Hub design preserves the historic framework of the MIT campus by recycling facades and maintaining existing building footprints. Modern forms are inserted underground and sliced through the form revealing new connections to iconic campus sculptures and gateways.'}
                    color={'#DB9B18'} textcolor={'#222'} theKey={4} link={'/Touba'} side={'left'} />
                <OneBigProject title={'Pharmacie'} image={ImageProjectE4}
                    description={'The Student Hub design preserves the historic framework of the MIT campus by recycling facades and maintaining existing building footprints. Modern forms are inserted underground and sliced through the form revealing new connections to iconic campus sculptures and gateways.'}
                    color={'#F4EFE4'} textcolor={'#222'} theKey={5} link={'/Pharmacie1'} side={'right'} />
                <OneBigProject title={'Immeuble'} image={ImageProjectB1}
                    description={'The Student Hub design preserves the historic framework of the MIT campus by recycling facades and maintaining existing building footprints. Modern forms are inserted underground and sliced through the form revealing new connections to iconic campus sculptures and gateways.'}
                    color={'#182B38'} textcolor={'#f1f1f1'} theKey={6} link={'/Immeuble1'} side={'left'} />
                <OneBigProject title={'Hangar'} image={ImageProjectF2}
                    description={'The Student Hub design preserves the historic framework of the MIT campus by recycling facades and maintaining existing building footprints. Modern forms are inserted underground and sliced through the form revealing new connections to iconic campus sculptures and gateways.'}
                    color={'#F1F1F1'} textcolor={'#222'} theKey={7} link={'/Hangar1'} side={'right'} />
            </div>
        </div>
    );
}

export default Traveaux;
