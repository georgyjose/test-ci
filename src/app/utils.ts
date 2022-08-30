import { UAParser } from 'ua-parser-js'
import { format, intervalToDuration } from 'date-fns';
import GamePlayState from '../features/GamePlay/models';
import { toast } from 'react-toastify';

const webShareApiDeviceTypes = ['mobile', 'smarttv', 'wearable']
const parser = new UAParser()
const browser = parser.getBrowser()
const device = parser.getDevice()

export const timeToString = (totalSeconds: number) => {
    const seconds = totalSeconds % 60
    const totalMinutes = Math.trunc(totalSeconds / 60)
    if (!totalMinutes) return (seconds)
    const minutes = totalMinutes % 60
    const totalHours = Math.trunc(totalMinutes / 60)
    if (!totalHours) return `${minutes}:${seconds}`
    return `${totalHours}:${minutes}:${seconds}`
}

export const intersection = (
    array1: number[],
    array2: number[],
) => {
    if (array1.length > array2.length) {
        return array1.filter((n) => {
            return array2.indexOf(n) !== -1;
        })
    } else {
        return array2.filter((n) => {
            return array1.indexOf(n) !== -1;
        })
    }
}

export const getDataForSharing = (options: GamePlayState.Option[]) => {
    let dataToShare = ""
    options.forEach((option) => {
        if (option.isSelected) {
            if (option.isCorrect) {
                dataToShare = dataToShare.concat('🟩')
            } else {
                dataToShare = dataToShare.concat('🟥')
            }
        }
    })
    return dataToShare
}


export const shareAttemptData = (
    quizId: number,
    userAttemptData: GamePlayState.AttemptData[],
    timeTaken: number,
) => {

    const attemptShare = (shareData: any) => {
        return (
            // Deliberately exclude Firefox Mobile, because its Web Share API isn't working correctly
            browser.name?.toUpperCase().indexOf('FIREFOX') === -1 &&
            webShareApiDeviceTypes.indexOf(device.type ?? '') !== -1 &&
            navigator.canShare &&
            navigator.canShare(shareData) &&
            navigator.share
        )
    }

    const duration = intervalToDuration({ start: 0, end: timeTaken * 1000 })
    const formattedTime = `${duration.minutes}:${duration.seconds}`
    const formattedDate = format(new Date(), 'dd/MM/yyyy')

    let textToShare = `#Day${quizId} ${formattedDate}\n${formattedTime} \n`
    userAttemptData.forEach((userData) => {
        const line = getDataForSharing(userData.selectedOptions)
        if (line.length)
            textToShare = textToShare.concat(getDataForSharing(userData.selectedOptions) + '\n')
    })

    textToShare = textToShare.concat('\nhttps://playground.entri.app')

    const shareData = { text: textToShare }

    let shareSuccess = false

    try {
        if (attemptShare(shareData)) {
            navigator.share(shareData)
            shareSuccess = true
        }
    } catch (error) {
        shareSuccess = false
    }

    try {
        if (!shareSuccess) {
            if (navigator.clipboard) {
                navigator.clipboard
                    .writeText(textToShare)
                    .then(() => {
                        toast.info('Copied to clipboard!', {
                            position: "top-center",
                            autoClose: 1500,
                            hideProgressBar: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                        });
                    })
                    .catch(() => { })
            } else {
                console.log('no clipboard')
                // handleShareFailure()
            }
        }
    } catch (error) {
        console.log('error', error)
        // handleShareFailure()
    }
}

export function areEqual(
    array1: number[],
    array2: number[],
) {
    if (array1.length === array2.length) {
        return array1.every(element => {
            if (array2.includes(element)) {
                return true;
            }

            return false;
        });
    }

    return false;
}
