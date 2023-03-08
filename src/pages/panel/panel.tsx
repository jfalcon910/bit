import { useEffect, useState } from 'react';
import {Container} from 'react-bootstrap';
import { useNavigate } from 'react-router';
import { Wrapper } from '../../components/styles';
import { useCallApi } from '../../config/hooks/useCallApi';
import { HTTP_METHODS } from '../../config/hooks/useCallApi/constants';
import { AllCategory } from '../../config/service';
import { CategoryInterface } from '../../interface';
import Categories from '../../components/categories';
// <--REDUX--> //
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { setCategorySelected } from '../../store/slices/categories';
import { UserStoreInterface } from '../../store/slices/users/user.interface';
// <--REDUX--> //
import { SaveCookie } from '../../config/utils/Cookies';
import './style.scss';

const Panel = () => {
    const {GetData,LoadingData,LoaderElement} = useCallApi();
    const {userData}:UserStoreInterface = useAppSelector((state) => state.users);
    const {name:userName} = userData
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const [categoriesList, setCategoriesList] = useState<CategoryInterface[]>([]);
    
    //Actions when loading the component
    useEffect(()=>{
        GetInitialData();
    },[])

    //Call data from categories
    const GetInitialData = async() => {
        const response = await GetData(AllCategory,HTTP_METHODS.GET);
        const categories:CategoryInterface[] = response.data;
        setCategoriesList(categories);
    }

    //Handle the click event of the category
    const HandleClick = async(id:string,name:string) => {
        dispatch(setCategorySelected(name));
        SaveCookie(name,process.env.REACT_APP_PUBLIC_CATEGORY_COOKIE);
        navigate(`./${id}`);
    }

    return(
        <Container>
            <Wrapper>
                <h2 className='greeting'> Hola </h2>
                <h1 className='user-name'> {userName.split(' ')[0]} </h1>
                <Categories categories={categoriesList} handleClick={HandleClick} />
            </Wrapper>
            {LoadingData&& <LoaderElement />}
        </Container>
    )
}

export default Panel;