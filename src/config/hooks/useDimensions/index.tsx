import { useState, useEffect } from 'react';

export function useDimensions() {
    const hasWindow = typeof window !== 'undefined';

    function getWindowDimensions() {
        const width = hasWindow ? window.innerWidth : null;
        const height = hasWindow ? window.innerHeight : null;
        return {
            width,
            height,
        };
    }

    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
    const [isMobile, setIsMobile] = useState<boolean>(false);

    const handleResize = () => {
        setWindowDimensions(getWindowDimensions());
    }

    const CallSize = ():any => {
        if (hasWindow) {
            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }
    }

    useEffect(() => {
        CallSize();
    }, [hasWindow]);

     //Actions when loading the component
     useEffect(()=>{
        HandleMobile(windowDimensions.width);
    },[])

    useEffect(()=>{
        HandleMobile(windowDimensions.width);
    },[windowDimensions.width])

    const HandleMobile = (width) => {
        if(width){
            if(width<768){
                setIsMobile(true);
            }else{
                setIsMobile(false);
            }
        }
    }

    return {...windowDimensions,isMobile};
}