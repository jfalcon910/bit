import React, { useContext } from 'react';
import {Container,Navbar,Nav,NavDropdown, Offcanvas} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './styles.scss';
import { lang } from './langs';
import { Langs,Menu } from './config';
import { Logout } from '../../config/utils/Auth';
// <--REDUX--> //
import { useAppSelector,useAppDispatch } from '../../store/hooks';
import { setUserPreferences } from '../../store/slices/users';
// <--REDUX--> //

interface Props{
  showMenu?:boolean,
}

const NavbarComponent =({showMenu}:Props)=>{
    const {preferences,isLoged} = useAppSelector((state) => state.users);
    const defaultLang:string=preferences.lang;
    const dispatch = useAppDispatch();

    const CloseSession = () => {
      Logout();
    }

    const SelectLang = (event:any) => {
      if(event==='CLOSE'){
        CloseSession();
        return;
      }
      dispatch(setUserPreferences({lang:event}));
    }

    return(
        <Navbar className='bits_navbar' expand="lg">
            <Container fluid>
                {showMenu&&<Link className='navbar-brand' to="/">{lang[defaultLang].title}</Link>}
                {/* <Navbar.Toggle aria-controls="navbarScroll" /> */}
                <Navbar.Collapse id="navbarScroll">
                  {showMenu&&<Nav
                      className="me-auto my-2 my-lg-0"
                      style={{ maxHeight: '100px' }}
                      navbarScroll
                  >
                      {
                         Menu.map((item:any,index)=>{
                          return(<Link key={`option-${index}`} className='nav-link' to={item.path} >{lang[defaultLang].menu[index].text}</Link>)
                        })
                      }
                  </Nav>}
                  <Navbar.Offcanvas
                    id={`offcanvasNavbar-expand-md`}
                    aria-labelledby={`offcanvasNavbarLabel-expand-md`}
                    placement="end"
                    className="offcanvas-default"
                  >
                    <Offcanvas.Header closeButton>
                      <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
                      {lang[defaultLang].title}
                      </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                      <Nav className="justify-content-end flex-grow-1 pe-3" onSelect={SelectLang}>
                        <NavDropdown
                          title={`${lang[defaultLang].lang.text} - ${defaultLang}`}
                          id={`offcanvasNavbarDropdown-expand-md`}
                        >
                          {
                            Langs.map((item,index)=>{
                              return(<NavDropdown.Item key={`lang-${index}`} eventKey={item.code} >{lang[defaultLang].lang.langs[index]}</NavDropdown.Item>)
                            })
                          }
                          {
                            isLoged &&
                            <>
                              <NavDropdown.Divider />
                              <NavDropdown.Item eventKey={'CLOSE'}>
                                {lang[defaultLang].close}
                              </NavDropdown.Item>
                            </>
                          }
                        </NavDropdown>
                      </Nav>
                    </Offcanvas.Body>
                  </Navbar.Offcanvas>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

NavbarComponent.defaultProps = {
  showMenu: true,
};

export default NavbarComponent;