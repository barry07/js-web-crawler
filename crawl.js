// create stub functions

function normalizeURL(urlString) {
    //create url object
    const urlObj = new URL(urlString)
    const hostPath = `${urlObj.hostname}${urlObj.pathname}`
    if (hostPath.length > 0 && hostPath.slice(-1) === '/'){
        return hostPath.slice(0, -1)
    }

    return hostPath
}

function getURLSFromHTML(htmlBody, baseURL) {
    const urls =[]
    return urls
}

module.exports = {
    normalizeURL,
    getURLSFromHTML
}