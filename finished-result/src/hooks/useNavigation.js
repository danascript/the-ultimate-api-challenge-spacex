import { useState, useEffect, useCallback } from 'react';

const useNavigation = navRef => {
    const MOBILE_BREAKING_POINT = 992;
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobileView, setIsMobileView] = useState(false);

    const getScreenSize = () => {
        setIsMobileView(window.innerWidth < MOBILE_BREAKING_POINT ? true : false);
    };

    const handleScroll = useCallback(() => {
        setIsMenuOpen(false);
    }, []);

    const handleClickOutside = useCallback(
        e => {
            if (navRef.current && !navRef.current.contains(e.target)) {
                setIsMenuOpen(false);
            }
        },
        [navRef]
    );

    // Viewport
    useEffect(() => {
        getScreenSize();
        window.addEventListener('resize', getScreenSize);
        return () => window.removeEventListener('resize', getScreenSize);
    }, []);

    // Scroll
    useEffect(() => {
        if (isMenuOpen) window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isMenuOpen, handleScroll]);

    // Click Outside
    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [handleClickOutside]);

    return {
        isMobileView,
        isMenuOpen,
        setIsMenuOpen,
    };
};

export default useNavigation;
