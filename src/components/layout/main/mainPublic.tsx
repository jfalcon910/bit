import React from 'react';
import NavbarComponent from '../../navbar';

const Main = ({children}:any) => {
    return(
        <main>
            <NavbarComponent showMenu={false} />
            {children}
        </main>
    )
}

export default Main;