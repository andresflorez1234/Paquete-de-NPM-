function getTimestamp() {
    return Date.now();
}

function getLongTime(locale = 'es-ES') {
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        seconds: 'numeric',
        timeZoneName: 'short'
    }
    return new Date().toLocaleString(locale, options);
}


module.exports = {
    getTimestamp,
    getLongTime
}