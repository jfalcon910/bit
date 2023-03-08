import { useEffect, useState } from 'react';
import {Container,Button} from 'react-bootstrap';
import { useParams } from 'react-router';
import Elements from '../../components/elements';
import { Wrapper } from '../../components/styles';
import { useCallApi } from '../../config/hooks/useCallApi';
import { HTTP_METHODS } from '../../config/hooks/useCallApi/constants';
import { ElementsByCategory } from '../../config/service';
import { ElementInterface } from '../../interface';
import './player.scss';

const Player = () => {
    const {GetData,LoadingData,LoaderElement} = useCallApi();
    const params = useParams();
    const [elementList, setElementList] = useState<ElementInterface[]>([]);

    //Actions when loading the component
    useEffect(()=>{
        //const params = useParams();
        const {id}  = params;
        if(id !== undefined) GetInitialData(id);
    } ,[])

    //Call data from elements
    const GetInitialData = async(id:string) => {
        const response = await GetData(`${ElementsByCategory}/${id}`,HTTP_METHODS.GET);
        const elements:ElementInterface[] = response.data;
        setElementList(elements);
    }

    return(
        <Container>
            <Wrapper>
                <Elements elements={elementList} />
            </Wrapper>
            {LoadingData&& <LoaderElement />}
        </Container>
    )
}

export default Player;