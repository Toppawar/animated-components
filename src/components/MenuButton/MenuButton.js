import React, { useState } from 'react'

import { HamburguerContainer, HamburguerTopBar, HamburguerMiddleBar, HamburguerBottomBar } from './MenuButton.style'

const MenuButton = () => {
    const [isActive, setIsActive] = useState(false)
    return (
        <HamburguerContainer role="button" onClick={() => setIsActive(!isActive)} isActive={isActive}>
            <HamburguerTopBar isActive={isActive} />
            <HamburguerMiddleBar isActive={isActive} />
            <HamburguerBottomBar isActive={isActive} />
        </HamburguerContainer>
    );
};

export default MenuButton