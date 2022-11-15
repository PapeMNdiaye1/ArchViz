import { React, useEffect } from 'react';
import { OneBigProject } from './Accueil';

import ImageProjectA1 from '../Style/Images/Project/Exterior-1.jpg';
import ImageProjectB1 from '../Style/Images/Project/Immeuble-1.jpg';
import ImageProjectC3 from '../Style/Images/Project/Interior-1-3.jpg';
import ImageProjectD3 from '../Style/Images/Project/NFT-3.jpg';
import ImageProjectE4 from '../Style/Images/Project/Pharmacie-4.jpg';
import ImageProjectF2 from '../Style/Images/Project/Hangar-2.jpg';
import ImageProjectG1 from '../Style/Images/Project/MSAD_2.jpg';

function Traveaux() {

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


    return (
        <div id="Traveaux">
            <section className='Traveaux-Header'>
                <h1 className='visualization-projects'>
                    Nos Réalisations
                </h1>
                <p className='visualization-projects-description'>
                    Nous aidons les architectes  et les promoteurs immobiliers à impressionner les investisseurs et les acheteurs avec des visuels professionnels.
                </p>
            </section>
            <section className='AccueilBigProjectsSection'>

                <OneBigProject title={'Maquettete de la Grande Mosquée de Touba'} image={ImageProjectD3}
                    description={'Sur la base du matériel de briefing, nous créons des rendus ou croquis pour chaque image commandée.'}
                    color={'#DB9B18'} textcolor={'#222'} theKey={1} link={'/Touba'} side={'left'} />

                <OneBigProject title={'Manufacture des Arts Décoratifs de Thiés'} image={ImageProjectG1}
                    description={"Expériences de réalité virtuelle réalisé pour la M.S.A.D de Thiés. Nous pouvons vous aider à améliorer vos ventes avec cette technologie en constante évolution."}
                    color={'#EAEAEA'} textcolor={'#222'} theKey={2} link={'/MSAD'} side={'right'} />

                <OneBigProject title={'Décoration Interieur'} image={ImageProjectC3}
                    description={'Décors interieur moderne simpliste et lumine. Rendus images en réalisés avec blender, animation et rendus videos sur Unreal Engine 5, compositing sur photoshop.'}
                    color={'#F1F1F1'} textcolor={'#222'} theKey={3} link={'/Interior1'} side={'left'} />

                <OneBigProject title={'Design de Maison Moderne'} image={ImageProjectA1}
                    description={"Design minimalist pour une optimisation de l'espace. Projet réalisé et rendu en avec blender, compositing sur photoshop."}
                    color={'#93A490'} textcolor={'#222'} theKey={4} link={'/SmallHouse1'} side={'right'} />

                <OneBigProject title={'Pharmacie'} image={ImageProjectE4}
                    description={'Design de pharmacie interieur et exterieur sur base de plan. Rendus images en réalisés avec blender, compositing sur photoshop.'}
                    color={'#F4EFE4'} textcolor={'#222'} theKey={5} link={'/Pharmacie1'} side={'left'} />

                <OneBigProject title={'Visualisation de façade d\'immeuble'} image={ImageProjectB1}
                    description={"Design de façade d'immeuble sur base de plan. Rendus images en réalisés avec blender, compositing sur photoshop."}
                    color={'#182B38'} textcolor={'#f1f1f1'} theKey={6} link={'/Immeuble1'} side={'right'} />

                <OneBigProject title={'Maquettete pour hangar photovoltaique'} image={ImageProjectF2}
                    description={"Le rendu et l'animation avec des temps de production de plus en plus rapides ont ouvert la porte à un monde de variations infinies dans la conception graphique adaptée à vos demandes uniques."}
                    color={'#F1F1F1'} textcolor={'#222'} theKey={7} link={'/Hangar1'} side={'left'} />
            </section>
        </div>
    );
}

export default Traveaux;
