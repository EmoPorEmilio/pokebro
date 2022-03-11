import { useEffect, useState } from 'react';
import pikachuSadGif from '../../resources/pokemon-sad.gif' ;
import pikachuSadJPG from '../../resources/pokemon-sad.jpg' ;
import {YouLoseCard, YouLoseContainer} from './YouLose.styles';

export const YouLose = () => {
    const [pikachuSad, setPikachuSad] = useState(null);

    useEffect(() => {
        (Math.random() >= 0.5)? setPikachuSad(pikachuSadGif) : setPikachuSad(pikachuSadJPG);
    }, []);
    return  <YouLoseContainer>
                <YouLoseCard>
                    <img src={pikachuSad}/>
                </YouLoseCard>
            </YouLoseContainer>    
}