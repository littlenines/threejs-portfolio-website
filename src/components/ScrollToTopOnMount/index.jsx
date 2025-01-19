import { useEffect } from 'react'

const ScrollToTopOnMount = () => {
    useEffect(() => {
        window.scrollTo({top: 0, behavior: 'instant'});
    }, []);

    return null;
}

export default ScrollToTopOnMount