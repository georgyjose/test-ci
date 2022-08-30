import React from "react";
import clsx from "clsx";

import './OptionIndicator.scss'

interface OptionIndicatorProps {
    isWrong?: boolean;
}

const OptionIndicator: React.FC<OptionIndicatorProps> = ({
    isWrong = false,
}) => {
    return <div className={clsx('option-indicator', {
        'wrong': isWrong,
    })} > </div>
}

export default OptionIndicator;