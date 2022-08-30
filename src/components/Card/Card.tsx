import React, { PropsWithChildren } from 'react';

import './Card.scss';

const EGCard:React.FC<PropsWithChildren> = ({ children }) => {

    return (
        <div className='eg-card'>{children}</div>
    )
}

export default EGCard;