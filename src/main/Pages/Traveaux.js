import { React, } from 'react';
import { OneBigProject } from './Accueil';

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
                    Depuis 2020, nous aidons les architectes et les promoteurs immobiliers à impressionner les investisseurs et les acheteurs avec des visuels incroyables.                </div>
            </div>
            <div className='AccueilBigProjectsSection'>
                <OneBigProject title={'Manufacture des Arts Décoratifs de Thiés'} image={ImageProjectG1}
                    description={'The Student Hub design preserves the historic framework of the MIT campus by recycling facades and maintaining existing building footprints. Modern forms are inserted underground and sliced through the form revealing new connections to iconic campus sculptures and gateways.'}
                    color={'#EAEAEA'} textcolor={'#222'} theKey={1} link={'/MSAD'} side={'right'} />

                <OneBigProject title={'Interior Desing'} image={ImageProjectC3}
                    description={'Decors interieur moderne simpliste et lumine. Rendus images en réalisés avec blender , animation et rendus videos sur Unreal Engine 5, compositing sur photoshop.'}
                    color={'#F1F1F1'} textcolor={'#222'} theKey={2} link={'/Interior1'} side={'left'} />

                <OneBigProject title={'Small House'} image={ImageProjectA1}
                    description={'The Student Hub design preserves the historic framework of the MIT campus by recycling facades and maintaining existing building footprints. Modern forms are inserted underground and sliced through the form revealing new connections to iconic campus sculptures and gateways.'}
                    color={'#93A490'} textcolor={'#222'} theKey={3} link={'/SmallHouse1'} side={'right'} />
                <OneBigProject title={'Touba'} image={ImageProjectD3}
                    description={'The Student Hub design preserves the historic framework of the MIT campus by recycling facades and maintaining existing building footprints. Modern forms are inserted underground and sliced through the form revealing new connections to iconic campus sculptures and gateways.'}
                    color={'#DB9B18'} textcolor={'#222'} theKey={4} link={'/Touba'} side={'left'} />

                <OneBigProject title={'Pharmacie'} image={ImageProjectE4}
                    description={'Design de pharmacie interieur et exterieur sur base de plan. Rendus images en réalisés avec blender, compositing sur photoshop.'}
                    color={'#F4EFE4'} textcolor={'#222'} theKey={5} link={'/Pharmacie1'} side={'right'} />

                <OneBigProject title={'Visualisation de façade d\'immeuble'} image={ImageProjectB1}
                    description={'Design de façade d\'immeuble sur base de plan. Rendus images en réalisés avec blender, compositing sur photoshop.'}
                    color={'#182B38'} textcolor={'#f1f1f1'} theKey={6} link={'/Immeuble1'} side={'left'} />

                <OneBigProject title={'Maquette pour hangar photovoltaique'} image={ImageProjectF2}
                    description={'The Student Hub design preserves the historic framework of the MIT campus by recycling facades and maintaining existing building footprints. Modern forms are inserted underground and sliced through the form revealing new connections to iconic campus sculptures and gateways.'}
                    color={'#F1F1F1'} textcolor={'#222'} theKey={7} link={'/Hangar1'} side={'right'} />
            </div>
        </div>
    );
}

export default Traveaux;
