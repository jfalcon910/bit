import {Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Wrapper } from '../../../components/styles';
import { UserStoreInterface } from '../../../store/slices/users/user.interface';
import { useAppSelector } from '../../../store/hooks';
import { adminPages } from '../data';
import './panelAdmin.scss';

const PanelAdmin = () => {
    const {preferences}:UserStoreInterface = useAppSelector((state) => state.users);
    const defaultLang:string=preferences.lang;
    return(
        <Container>
            <Wrapper className="_paneladmin">
                <h1 className='_paneladmin__title'>Panel admin</h1>
                <div className="_paneladmin__links _d_flex__center">
                {
                    adminPages.map((item)=>{
                        return(
                            <Link className='_paneladmin__links__link' key={item.path} to={`../${item.path}`} >
                                {item[`${defaultLang}Name`]}
                            </Link>
                        )
                    })
                }
                </div>
            </Wrapper>
        </Container>
    )
}

export default PanelAdmin;