import React from "react";
import EGSelectableButton from "./SelectableButton/SelectableButton";

const DownloadButton = () => {

    const handleDownloadEntri = () => {
        const win = window.open('https://entri.sng.link/Bcofz/eer3q/2up6', '_blank');
        if (win != null) {
            win.focus();
        }
    }

    return (
        <EGSelectableButton
            variant='blue'
            style={{ marginTop: 22 }}
            onClick={handleDownloadEntri}
        >
            <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'start' }}>
                Download Entri app from Playstore for a better learning experience!
                <img
                    style={{ margin: -6 }}
                    width={120}
                    alt='Get it on Google Play'
                    src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png'
                />
            </div>
        </EGSelectableButton>
    )
}

export default DownloadButton;