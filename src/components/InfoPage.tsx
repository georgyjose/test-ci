import React from "react";

interface InfoPageProps {
    info: string;
}

const InfoPage: React.FC<InfoPageProps> = ({ info }) => {

    return (
        <span
            style={{
                textAlign: 'center',
                fontFamily: 'Bungee',
                fontSize: '4rem'
            }}
        >
            {info}
        </span>
    )
}

export default InfoPage;