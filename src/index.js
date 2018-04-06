const puppeteer = require('puppeteer');

(async () => {
    const loginUrl = 'https://fapiao.yonyoucloud.com/cas/login?service=https%3A%2F%2Ffapiao.yonyoucloud.com%2Finvoiceclient-web%2Fcasnode src/index.js';
    const browser = await puppeteer.launch({
        headless: false,
    });// slowMo: 100, operation delay in ms
    const page = await browser.newPage();
    page.setViewport({
        width: 1920,
        height: 1080
    });
    await page.goto(loginUrl, {
        waitUntil: 'networkidle2'
    });

    await page.type('#yhtusername', '');
    await page.type('#yhtpassword', ''); 

    await page.click('.btn-submit');
    await page.waitForNavigation({waitUntil: 'networkidle2'});

    await page.screenshot({
        path: 'screenshot/home.png'
    });

    await browser.close();
})();