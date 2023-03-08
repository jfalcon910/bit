import { useEffect, useState } from 'react';
import { ElementInterface } from '../../interface';
// <--REDUX--> //
import { useAppSelector } from '../../store/hooks';
import { UserStoreInterface } from '../../store/slices/users/user.interface';
import { CategoryStoreInterface } from '../../store/slices/categories/category.interface';
// <--REDUX--> //
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import './elements.scss';
interface Props {
    elements: ElementInterface[],
}

export const Elements = ({elements}:Props) => {
    useEffect(()=>{
        setListElements(elements)
        setTrackIndex(elements.length-1);
        const host = window.location.protocol + "//" + window.location.host;
        setHost(host);
    },[elements])

    const [listElements, setListElements] = useState<ElementInterface[]>([]);
    const [trackIndex, setTrackIndex] = useState<number>(0);
    const [host, setHost] = useState<string>('');
    const {preferences}:UserStoreInterface = useAppSelector((state) => state.users);
    const defaultLang:string=preferences.lang;
    const {name:categoryName}:CategoryStoreInterface = useAppSelector((state) => state.categories);

    useEffect(()=>{
        handleClickNext();
    },[listElements])
    
    const handleClickPrevious = () => {
        setTrackIndex((currentTrack) =>
            currentTrack === 0 ? elements.length - 1 : currentTrack - 1
        );
    };

    const handleClickNext = () => {
        setTrackIndex((currentTrack) =>
            currentTrack < elements.length - 1 ? currentTrack + 1 : 0
        );
    };

    return(
        <div>
            <h1 className='_title'> {categoryName} </h1>
            {
                listElements.length > 0 &&
                <div className='_d_flex__center'>
                    <div className="_elements">
                        <figure className='_elements__figure'>
                            <img className='_elements__figure__img' src={`/assets/icons/${listElements[trackIndex].photo}`} alt={listElements[trackIndex].photo} />
                            <figcaption className='_elements__figure__text'> 
                                {
                                    defaultLang==='es' ? 
                                        `${listElements[trackIndex].englishName} - ${listElements[trackIndex].name}`
                                    :
                                        `${listElements[trackIndex].name} - ${listElements[trackIndex].englishName}`
                                }
                            </figcaption>
                        </figure>
                        <AudioPlayer
                            style={{ borderTopRightRadius: "1rem", borderTopLeftRadius: "1rem" }}
                            autoPlay={false}
                            autoPlayAfterSrcChange={false}
                            src={`${host}/assets/audio/${defaultLang==='es' ? listElements[trackIndex].englishAudio : listElements[trackIndex].audio}`}
                            onPlay={(e) => console.log("onPlay")}
                            showSkipControls={true}
                            showJumpControls={false}
                            onClickPrevious={handleClickPrevious}
                            onClickNext={handleClickNext}
                            onEnded={handleClickNext}
                        />
                    </div>
                </div>
            }
        </div>
        
    )
}

export default Elements;