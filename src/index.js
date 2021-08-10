const hundreds = ['one hundred', 'two hundred', 'three hundred', 'four hundred', 'five hundred', 'six hundred', 'seven hundred', 'eight hundred', 'nine hundred'];
const oneToNine = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
const tenToTwenty = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
const twentyToNinety = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];


module.exports = function toReadable(number) {
    if (number < 10) {
        return oneToNine[number]
    }
    if (number >= 10 && number < 20) {
        const numberWordIndex = (number.toString().split(''))[1];
        return tenToTwenty[numberWordIndex]
    }
    if (number >= 20 && number < 100) {
        const splitNumberToArray = number.toString().split('');
        const secondNumIdx = +splitNumberToArray[1];
        switch (splitNumberToArray[0]) {
            case '2':
                return (twentyToNinety[0] + ' ' + (splitNumberToArray[1] !== '0' ? oneToNine[secondNumIdx] : '')).trim();
                break;
            case '3':
                return (twentyToNinety[1] + ' ' + (splitNumberToArray[1] !== '0' ? oneToNine[secondNumIdx] : '')).trim();
                break;
            case '4':
                return (twentyToNinety[2] + ' ' + (splitNumberToArray[1] !== '0' ? oneToNine[secondNumIdx] : '')).trim();
                break;
            case '5':
                return (twentyToNinety[3] + ' ' + (splitNumberToArray[1] !== '0' ? oneToNine[secondNumIdx] : '')).trim();
                break
            case '6':
                return (twentyToNinety[4] + ' ' + (splitNumberToArray[1] !== '0' ? oneToNine[secondNumIdx] : '')).trim();
                break;
            case '7':
                return (twentyToNinety[5] + ' ' + (splitNumberToArray[1] !== '0' ? oneToNine[secondNumIdx] : '')).trim();
                break
            case '8':
                return (twentyToNinety[6] + ' ' + (splitNumberToArray[1] !== '0' ? oneToNine[secondNumIdx] : '')).trim();
                break;
            case '9':
                return (twentyToNinety[7] + ' ' + (splitNumberToArray[1] !== '0' ? oneToNine[secondNumIdx] : '')).trim();
                break;
            default:
                console.log('something went wrong')
        }
    }
    if (number >= 100 && number < 1000) {
        const splitNumberToArray = number.toString().split('')
        const secondNumIdx = +splitNumberToArray[1] - 2
        const thirdNumIdx = +splitNumberToArray[2];
        if ((number >= 100 && number < 120) || (number >= 200 && number < 220) || (number >= 300 && number < 320) || (number >= 400 && number < 420) || (number >= 500 && number < 520) || (number >= 600 && number < 620) || (number >= 700 && number < 720) || (number >= 800 && number < 820) || ((number >= 900 && number < 920))) {
            switch (splitNumberToArray[0]) {
                case '1':
                    console.log("tenToTwenty 100", splitNumberToArray[1])
                    return (hundreds[0] + ' ' + (splitNumberToArray[1] !== '0' ? tenToTwenty[thirdNumIdx] : (splitNumberToArray[2] !== '0' ? oneToNine[thirdNumIdx] : ''))).trim();
                    break;
                case '2':
                    console.log("tenToTwenty 200", splitNumberToArray[1])

                    return (hundreds[1] + ' ' + (splitNumberToArray[1] !== '0' ? tenToTwenty[thirdNumIdx] : (splitNumberToArray[2] !== '0' ? oneToNine[thirdNumIdx] : ''))).trim();
                    break;
                case '3':
                    return (hundreds[2] + ' ' + (splitNumberToArray[1] !== '0' ? tenToTwenty[thirdNumIdx] : (splitNumberToArray[2] !== '0' ? oneToNine[thirdNumIdx] : ''))).trim();
                    break;
                case '4':
                    return (hundreds[3] + ' ' + (splitNumberToArray[1] !== '0' ? tenToTwenty[thirdNumIdx] : (splitNumberToArray[2] !== '0' ? oneToNine[thirdNumIdx] : ''))).trim();
                    break
                case '5':
                    return (hundreds[4] + ' ' + (splitNumberToArray[1] !== '0' ? tenToTwenty[thirdNumIdx] : (splitNumberToArray[2] !== '0' ? oneToNine[thirdNumIdx] : ''))).trim();
                    break;
                case '6':
                    return (hundreds[5] + ' ' + (splitNumberToArray[1] !== '0' ? tenToTwenty[thirdNumIdx] : (splitNumberToArray[2] !== '0' ? oneToNine[thirdNumIdx] : ''))).trim();
                    break
                case '7':
                    return (hundreds[6] + ' ' + (splitNumberToArray[1] !== '0' ? tenToTwenty[thirdNumIdx] : (splitNumberToArray[2] !== '0' ? oneToNine[thirdNumIdx] : ''))).trim();
                    break;
                case '8':
                    return (hundreds[7] + ' ' + (splitNumberToArray[1] !== '0' ? tenToTwenty[thirdNumIdx] : (splitNumberToArray[2] !== '0' ? oneToNine[thirdNumIdx] : ''))).trim();
                    break;
                case '9':
                    return (hundreds[8] + ' ' + (splitNumberToArray[1] !== '0' ? tenToTwenty[thirdNumIdx] : (splitNumberToArray[2] !== '0' ? oneToNine[thirdNumIdx] : ''))).trim();
                    break;
                default:
                    console.log('something went wrong')
            }
        }
        if ((number >= 120 && number < 200) || (number >= 220 && number < 300) || (number >= 320 && number < 400) || (number >= 420 && number < 500) || (number >= 520 && number < 600) || (number >= 620 && number < 700) || (number >= 720 && number < 800) || (number >= 820 && number < 900) || ((number >= 920 && number < 1000))) {
            switch (splitNumberToArray[0]) {
                case '1':
                    console.log("twentyToNinety 120", twentyToNinety[secondNumIdx], (splitNumberToArray[2] !== '0' ? oneToNine[thirdNumIdx] : ''))
                    return (hundreds[0] + ' ' + twentyToNinety[secondNumIdx] + ' ' + (splitNumberToArray[2] !== '0' ? oneToNine[thirdNumIdx] : '')).trim();
                    break;
                case '2':
                    return (hundreds[1] + ' ' + twentyToNinety[secondNumIdx] + ' ' + (splitNumberToArray[2] !== '0' ? oneToNine[thirdNumIdx] : '')).trim();
                    break;
                case '3':
                    return (hundreds[2] + ' ' + twentyToNinety[secondNumIdx] + ' ' + (splitNumberToArray[2] !== '0' ? oneToNine[thirdNumIdx] : '')).trim();
                    break;
                case '4':
                    return (hundreds[3] + ' ' + twentyToNinety[secondNumIdx] + ' ' + (splitNumberToArray[2] !== '0' ? oneToNine[thirdNumIdx] : '')).trim();
                    break
                case '5':
                    return (hundreds[4] + ' ' + twentyToNinety[secondNumIdx] + ' ' + (splitNumberToArray[2] !== '0' ? oneToNine[thirdNumIdx] : '')).trim();
                    break;
                case '6':
                    return (hundreds[5] + ' ' + twentyToNinety[secondNumIdx] + ' ' + (splitNumberToArray[2] !== '0' ? oneToNine[thirdNumIdx] : '')).trim();
                    break
                case '7':
                    return (hundreds[6] + ' ' + twentyToNinety[secondNumIdx] + ' ' + (splitNumberToArray[2] !== '0' ? oneToNine[thirdNumIdx] : '')).trim();
                    break;
                case '8':
                    return (hundreds[7] + ' ' + twentyToNinety[secondNumIdx] + ' ' + (splitNumberToArray[2] !== '0' ? oneToNine[thirdNumIdx] : '')).trim();
                    break;
                case '9':
                    return (hundreds[8] + ' ' + twentyToNinety[secondNumIdx] + ' ' + (splitNumberToArray[2] !== '0' ? oneToNine[thirdNumIdx] : '')).trim();
                    break;
                default:
                    console.log('something went wrong')
            }
        }

    }
}
