import { React, useEffect } from 'react';
import { OneBigProject } from './Accueil';

import ImageProjectA1 from '../Style/Images/Project/Exterior-1.jpg';
import ImageProjectB1 from '../Style/Images/Project/Immeuble-2.jpg';
import ImageProjectC3 from '../Style/Images/Project/Interior-1-3.jpg';
import ImageProjectD3 from '../Style/Images/Project/NFT-3.jpg';
import ImageProjectE4 from '../Style/Images/Project/Pharmacie-3.jpg';
import ImageProjectF2 from '../Style/Images/Project/Hangar-2.jpg';
import ImageProjectG1 from '../Style/Images/Project/MSAD_2.jpg';


import ImageProjectH1 from '../Style/Images/Project/Villa_A-1.jpg';
import ImageProjectH2 from '../Style/Images/Project/Villa_A-2.jpg';
import ImageProjectH3 from '../Style/Images/Project/Villa_A-3.jpg';

import ImageProjectI1 from '../Style/Images/Project/Villa_B-1.jpg';
import ImageProjectI2 from '../Style/Images/Project/Villa_B-2.jpg';
import ImageProjectI3 from '../Style/Images/Project/Villa_B-3.jpg';
import ImageProjectI4 from '../Style/Images/Project/Villa_B-4.jpg';

import ImageProjectJ1 from '../Style/Images/Project/Pharmacie_B-1.jpg';
import ImageProjectJ2 from '../Style/Images/Project/Pharmacie_B-2.jpg';
import ImageProjectJ3 from '../Style/Images/Project/Pharmacie_B-3.jpg';
import ImageProjectJ4 from '../Style/Images/Project/Pharmacie_B-4.jpg';
import ImageProjectJ5 from '../Style/Images/Project/Pharmacie_B-5.jpg';

import ImageProjectK1 from '../Style/Images/Project/Pharmacie_C-1.jpg';
import ImageProjectK2 from '../Style/Images/Project/Pharmacie_C-2.jpg';
import ImageProjectK3 from '../Style/Images/Project/Pharmacie_C-3.jpg';
import ImageProjectK4 from '../Style/Images/Project/Pharmacie_C-4.jpg';
import ImageProjectK5 from '../Style/Images/Project/Pharmacie_C-5.jpg';

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
                    Nos R??alisations
                </h1>
                <p className='visualization-projects-description'>
                    Nous aidons les architectes et les promoteurs immobiliers ?? impressionner les investisseurs et les acheteurs gr??ce ?? des visuels professionnels. <br />
                    Nos visualisations photor??alistes font profiter aux professionnels de l???immobilier d???une large visibilit?? dans la mesure o?? elle permet de visualiser un projet avant sa r??alisation.Ainsi, elles suscitent l???int??r??t des clients cibles et convainquent les ??ventuels acheteurs. En d???autres termes, nous contribuons a de donner vie ?? vos projets ou produits.
                </p>
            </section>
            <section className='AccueilBigProjectsSection'>
                <OneBigProject title={'Design pour les Commerces'} image={ImageProjectJ1}
                    description={"Nous avons une grande exp??rience dans l???agencement de point de vente, et l???am??nagement de bureaux. Quelle que soit la typologie du point de vente, sa vocation, sa strat??gie et son positionnement."}
                    color={'#8a6f54'} textcolor={'#f1f1f1'} theKey={1} link={'/Pharmacie2'} side={'left'} The_Experience={false} />

                <OneBigProject title={'Exp??riences de r??alit?? virtuelle'} image={ImageProjectG1}
                    description={"Exp??riences de r??alit?? virtuelle r??alis??es pour la M.S.A.D de Thi??s. Nous pouvons vous aider ?? am??liorer vos ventes avec cette technique en constante ??volution."}
                    color={'#EAEAEA'} textcolor={'#222'} theKey={2} link={'/MSAD'} side={'right'} The_Experience={true} The_Experience_Link={'https://papemndiaye1.github.io/MSAT-WebSite/'} />

                <OneBigProject title={'D??coration Interieur'} image={ImageProjectC3}
                    description={'?? l\'aide des logiciels de derni??re g??n??ration et de notre savoir-faire dans le domaine de l???architecture d???int??rieur. Nous vous aidons dans l???am??nagement de vos espaces. Du design moderne au traditionnelle, minimaliste etc...'}
                    color={'#F1F1F1'} textcolor={'#222'} theKey={3} link={'/Interior1'} side={'left'} The_Experience={true} The_Experience_Link={'https://papemndiaye1.github.io/ArchViz_Interior_Design_1/'} />

                <OneBigProject title={'Design de Maison Moderne'} image={ImageProjectA1}
                    description={"Des designs Modernes, ??pur??s, minimalistes etc.??? nous mettons en ??uvre diff??rentes approches pour une optimisation de vos espaces ext??rieurs et int??rieurs. Pour se faire nous utilisons diff??rents logiciels avec les derni??res innovations pour des rendus d???images ?? la fois r??alistes et immersives."}
                    color={'#93A490'} textcolor={'#222'} theKey={4} link={'/SmallHouse1'} side={'right'} The_Experience={false} />

                <OneBigProject title={'Design pour les Commerces'} image={ImageProjectE4}
                    description={'Nous avons une grande exp??rience dans l???agencement de point de vente, et l???am??nagement de bureaux. Quelle que soit la typologie du point de vente, sa vocation, sa strat??gie et son positionnement.'}
                    color={'#F4EFE4'} textcolor={'#222'} theKey={5} link={'/Pharmacie1'} side={'left'} The_Experience={false} />

                <OneBigProject title={'Visualisation de Fa??ade d\'Immeuble'} image={ImageProjectB1}
                    description={"Nous avons une grande exp??rience dans l???agencement de bureaux. Quelle que soit la typologie, sa vocation, sa strat??gie et son positionnement."}
                    color={'#EAEAEA'} textcolor={'#222'} theKey={6} link={'/Immeuble1'} side={'right'} The_Experience={false} />

                <OneBigProject title={'Pharmacie Martin Luther King'} image={ImageProjectK4}
                    description={"Nous avons une grande exp??rience dans l???agencement de point de vente, et l???am??nagement de bureaux. Quelle que soit la typologie du point de vente, sa vocation, sa strat??gie et son positionnement."}
                    color={'#93A490'} textcolor={'#222'} theKey={7} link={'/Pharmacie3'} side={'left'} The_Experience={false} />

                <OneBigProject title={'Immeuble Thi??s Grand Standing'} image={ImageProjectH1}
                    description={"Des designs Modernes, ??pur??s, minimalistes etc.??? nous mettons en ??uvre diff??rentes approches pour une optimisation de vos espaces ext??rieurs et int??rieurs. Pour se faire nous utilisons diff??rents logiciels avec les derni??res innovations pour des rendus d???images ?? la fois r??alistes et immersives."}
                    color={'#8a6f54'} textcolor={'#f1f1f1'} theKey={8} link={'/Villa'} side={'right'} The_Experience={false} />

                <OneBigProject title={'Villa Fatou'} image={ImageProjectI2}
                    description={"Des designs Modernes, ??pur??s, minimalistes etc.??? nous mettons en ??uvre diff??rentes approches pour une optimisation de vos espaces ext??rieurs et int??rieurs. Pour se faire nous utilisons diff??rents logiciels avec les derni??res innovations pour des rendus d???images ?? la fois r??alistes et immersives."}
                    color={'#F1F1F1'} textcolor={'#222'} theKey={9} link={'/VillaB'} side={'left'} The_Experience={false} />

                <OneBigProject title={'Maquette de la Grande Mosqu??e de Touba'} image={ImageProjectD3}
                    description={'Sur la base du mat??riel de briefing, nous cr??ons des rendus ou croquis pour chaque image command??e.'}
                    color={'#DB9B18'} textcolor={'#222'} theKey={10} link={'/Touba'} side={'right'} The_Experience={false} />

                <OneBigProject title={'La 3D dans le domaine des Industries'} image={ImageProjectF2}
                    description={"Le rendu et l'animation avec des temps de production de plus en plus rapide ont ouvert la porte ?? un monde de variations infinies dans la conception graphique adapt??e ?? vos demandes uniques."}
                    color={'#F1F1F1'} textcolor={'#222'} theKey={11} link={'/Hangar1'} side={'left'} The_Experience={false} />


            </section>
        </div>
    );
}

export default Traveaux;
