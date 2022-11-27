import { React, useEffect } from 'react';
import { OneBigProject } from './Accueil';

import ImageProjectA1 from '../Style/Images/Project/Exterior-1.jpg';
import ImageProjectB1 from '../Style/Images/Project/Immeuble-2.jpg';
import ImageProjectC3 from '../Style/Images/Project/Interior-1-3.jpg';
import ImageProjectD3 from '../Style/Images/Project/NFT-3.jpg';
import ImageProjectE4 from '../Style/Images/Project/Pharmacie-3.jpg';
import ImageProjectF2 from '../Style/Images/Project/Hangar-2.jpg';
import ImageProjectG1 from '../Style/Images/Project/MSAD_2.jpg';

function Traveaux() {

    useEffect(() => {

        let Page_slider = document.querySelector('.page_title_slider')
        Page_slider.style.top = `-100%`

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
                    Nous aidons les architectes  et les promoteurs immobiliers à impressionner les investisseurs et les acheteurs avec des visuels professionnels. <br />
                    Nos visualisations photo réalistes font profiter aux professionnels de l’immobilier d’une large visibilité dans la mesure où elle permet de visualiser un projet avant sa réalisation. Ainsi, elles suscitent l’intérêt des clients cibles et convainc les éventuels acheteurs. En d’autres termes, nous contribuons a de donner vie à vos projets ou produits.
                </p>
            </section>
            <section className='AccueilBigProjectsSection'>

                <OneBigProject title={'Maquette de la Grande Mosquée de Touba'} image={ImageProjectD3}
                    description={'Sur la base du matériel de briefing, nous créons des rendus ou croquis pour chaque image commandée.'}
                    color={'#DB9B18'} textcolor={'#222'} theKey={1} link={'/Touba'} side={'left'} />

                <OneBigProject title={'Expériences de réalité virtuelle'} image={ImageProjectG1}
                    description={"Expériences de réalité virtuelle réalisé pour la M.S.A.D de Thiés. Nous pouvons vous aider à améliorer vos ventes avec cette technologie en constante évolution."}
                    color={'#EAEAEA'} textcolor={'#222'} theKey={2} link={'/MSAD'} side={'right'} />

                <OneBigProject title={'Décoration Interieur'} image={ImageProjectC3}
                    description={'A l’aide des logiciels de dernière génération et de notre savoir-faire dans le domaine de l’architecture d’intérieur . Nous vous aidons dans l’aménagement de vos espaces. Du design moderne au traditionnelle, minimaliste etc...'}
                    color={'#F1F1F1'} textcolor={'#222'} theKey={3} link={'/Interior1'} side={'left'} />

                <OneBigProject title={'Design de Maison Moderne'} image={ImageProjectA1}
                    description={"Des designs Modernes, épurés, minimalistes etc… nous mettons en  œuvres différentes approches pour une optimisation de vos espaces extérieurs et intérieurs."}
                    color={'#93A490'} textcolor={'#222'} theKey={4} link={'/SmallHouse1'} side={'right'} />

                <OneBigProject title={'Design pour les Commerces'} image={ImageProjectE4}
                    description={'Nous avons une grande expérience dans l’agencement de point de vente, et l’aménagement de bureaux. Nous avons un grand savoir-faire quel que soit la typologie du point de vente, sa vocation, sa stratégie et son positionnement.'}
                    color={'#F4EFE4'} textcolor={'#222'} theKey={5} link={'/Pharmacie1'} side={'left'} />

                <OneBigProject title={'Visualisation de Façade d\'Immeuble'} image={ImageProjectB1}
                    description={"Nous avons une grande expérience dans l’agencement de bureaux. Quel que soit la typologie, sa vocation, sa stratégie et son positionnement."}
                    color={'#182B38'} textcolor={'#f1f1f1'} theKey={6} link={'/Immeuble1'} side={'right'} />

                <OneBigProject title={'La 3D dans le domaine des Industries'} image={ImageProjectF2}
                    description={"Le rendu et l'animation avec des temps de production de plus en plus rapides ont ouvert la porte à un monde de variations infinies dans la conception graphique adaptée à vos demandes uniques."}
                    color={'#F1F1F1'} textcolor={'#222'} theKey={7} link={'/Hangar1'} side={'left'} />

            </section>
        </div>
    );
}

export default Traveaux;
