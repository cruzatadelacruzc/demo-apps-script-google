function doGet() {
        return HtmlService
                .createTemplateFromFile('src/resources/html/index')
                .evaluate()
                .setTitle('Html Apps Script');
}

/**
 * get HTML data
 * @param {string} fileName 
 * @returns Content
 */
function getHtmlData(fileName) {
        return HtmlService.
                createHtmlOutputFromFile(`src/resources/html/${fileName}`)
                .getContent();
}

/**
 * get Css data
 * @param {string} fileName 
 * @returns Content
 */
function getCssData(fileName) {
        return HtmlService.
                createHtmlOutputFromFile(`src/resources/css/${fileName}`)
                .getContent();
}

/**
 * get JavaScript data
 * @param {string} fileName 
 * @returns Content
 */
function getJsData(fileName) {
        return HtmlService.
                createHtmlOutputFromFile(`src/resources/js/${fileName}`)
                .getContent();
}