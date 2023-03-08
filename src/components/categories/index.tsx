import { useEffect, useRef, useState } from 'react';
import { CardWidth } from './constants';
import { CategoryInterface } from '../../interface';
// <--REDUX--> //
import { useAppSelector } from '../../store/hooks';
import { UserStoreInterface } from '../../store/slices/users/user.interface';
// <--REDUX--> //
import { useDimensions } from '../../config/hooks/useDimensions';
import './categories.scss';

interface Props {
    categories: CategoryInterface[],
    handleClick?: any,
}

const style:any = {
    width: '100%',
    // maxWidth: '320px',
    position: 'relative',
    overflow: 'auto',
    padding: '5px 5px 50px 5px',
}

const Categories = ({categories,handleClick}:Props) => {
    const {isMobile,width} = useDimensions();
    const refCtCategories = useRef(null);
    const {preferences}:UserStoreInterface = useAppSelector((state) => state.users);
    const defaultLang:string=preferences.lang;
    const [elementWidth,setElementWidth] = useState<number>(0);
    const [mobile,setMobile] = useState<boolean>(false);
    const [containerWidth,setContainerWidth] = useState<number>(0);

    useEffect(() => {
        const element:any = refCtCategories.current;
        setElementWidth(element.clientWidth)
        setContainerWidth(CardWidth*categories.length);
      }, [categories]);

    useEffect(()=>{
        const element:any = refCtCategories.current;
        setElementWidth(element.clientWidth)
        setContainerWidth(CardWidth*categories.length);
    },[width])

    useEffect(()=>{
        setMobile(isMobile)
    },[isMobile])

    const RenderList = () => {
        return(
            categories.map((category: CategoryInterface) => {
                return (
                    <div className="_categories" key={category.id} onClick={()=>{handleClick(category.id,defaultLang==='es' ? category.name : category.englishName)}}>
                        <figure className='_categories__figure'>
                            <img className='_categories__figure__img' src={`/assets/icons/categories/${category.photo}`} alt={category.photo} />
                            <figcaption className='_categories__figure__text'> {defaultLang==='es' ? category.name : category.englishName} </figcaption>
                        </figure>
                    </div>
                )
            })
        )
    }

    return(
        <div ref={refCtCategories} style={mobile ? style : {width:'100%'}}>
            <div className={mobile ? '_d_flex__between' : '_d_flex__center'} style={mobile ? {width:containerWidth} : {width:'initial'}}>
                {RenderList()}
            </div>
        </div>
    )
}
export default Categories;