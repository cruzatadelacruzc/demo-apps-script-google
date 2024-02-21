function doGet() {
    return HtmlService.createTemplateFromFile('html/index').evaluate();
}