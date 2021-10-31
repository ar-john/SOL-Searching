const puppeteer = require('puppeteer');
const fs = require('fs');
const { title } = require('process');
const { privateDecrypt } = require('crypto');
const { timeStamp } = require('console');

let scrape = async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.setViewport({ width: 1920, height: 1080 });
    await page.goto('https://opensea.io/assets');
    page.waitForTimeout(1000).then(() => console.log('Waited a second!'));
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //enter in selector
    let test =  await page.$$eval('#__next > div:nth-child(1) > div > div > main > div > div > div.AssetSearchView--results > div.Blockreact__Block-sc-1xf18x6-0.dBFmez.AssetsSearchView--assets > div.fresnel-container.fresnel-greaterThanOrEqual-sm > div',
    divs => divs.map(div => div.innerText));

    let article =[];
    let element = await page.$('#__next > div:nth-child(1) > div > div > main > div > div > div.AssetSearchView--results > div.Blockreact__Block-sc-1xf18x6-0.dBFmez.AssetsSearchView--assets > div.fresnel-container.fresnel-greaterThanOrEqual-sm > div > div > div:nth-child(4) > div > article > a > div.Blockreact__Block-sc-1xf18x6-0.Flexreact__Flex-sc-1twd32i-0.SpaceBetweenreact__SpaceBetween-sc-jjxyhg-0.AssetCardFooterreact__StyledContainer-sc-nedjig-0.bFcjdD.jYqxGr.gJwgfT.cBTfDg > div > div.Blockreact__Block-sc-1xf18x6-0.kvfJjG > div.Blockreact__Block-sc-1xf18x6-0.Flexreact__Flex-sc-1twd32i-0.gctoET.jYqxGr > div.Blockreact__Block-sc-1xf18x6-0.jUWRIc > a > div');
    let value = await page.evaluate(el => el.textContent, element);

    for(i =0; i < 15; i++){
        article.push(
            {
                'test': test[i]
            }
        )
    }

    browser.close();
    return article;
    
    
    
   



    
    
    let result = await page.evaluate(() => {

        //let articleFirst = document.querySelectorAll('#__next > div:nth-child(1) > div > div > main > div > div > div.AssetSearchView--results > div.Blockreact__Block-sc-1xf18x6-0.dBFmez.AssetsSearchView--assets > div.fresnel-container.fresnel-greaterThanOrEqual-sm > div > div > div:nth-child(4) > div');

        //let oferts = articleFirst[0].querySelectorAll('#__next > div:nth-child(1) > div > div > main > div > div > div.AssetSearchView--results > div.Blockreact__Block-sc-1xf18x6-0.dBFmez.AssetsSearchView--assets > div.fresnel-container.fresnel-greaterThanOrEqual-sm > div > div > div:nth-child(4) > div > article > a > div.Blockreact__Block-sc-1xf18x6-0.Flexreact__Flex-sc-1twd32i-0.SpaceBetweenreact__SpaceBetween-sc-jjxyhg-0.AssetCardFooterreact__StyledContainer-sc-nedjig-0.bFcjdD.jYqxGr.gJwgfT.cBTfDg > div > div.Blockreact__Block-sc-1xf18x6-0.kvfJjG > div.Blockreact__Block-sc-1xf18x6-0.Flexreact__Flex-sc-1twd32i-0.gctoET.jYqxGr > div.Blockreact__Block-sc-1xf18x6-0.jUWRIc > a > div');


        /*
        let articles = []
        //let test = document.getElementsByClassName('Blockreact__Block-sc-1xf18x6-0 Flexreact__Flex-sc-1twd32i-0 SpaceBetweenreact__SpaceBetween-sc-jjxyhg-0 lcXrbo jYqxGr gJwgfT');
        //let creator = document.getElementsByClassName('Overflowreact__OverflowContainer-sc-10mm0lu-0 gjwKJf');
        //let titles = document.getElementsByClassName('AssetCardFooter--name');
        //let price = document.getElementsByClassName('Overflowreact__OverflowContainer-sc-10mm0lu-0 gjwKJf Price--amount');
        //let img = document.getElementsByClassName('Imagereact__DivContainer-sc-dy59cl-0 kMPTZo Image--fade Image--isImageLoaded Image--isImageLoaderVisible AssetMedia--img');

        if (test.length) {
            for (i = 0; i < 5; i++) {
                articles.push(
                    {
                        //'test': test[i]
                        //'creator': creator[i].textContent,
                        //'title': titles[i].textContent,
                        //'price': price[i].textContent,
                        //'img': img[i].textContent
                    })
            }
        }
        */
        return {
            //articles,
            //links
            oferts,
            articleFirst
        }
    });
    browser.close();
    return result;
    
};


scrape().then((value) => {
    console.log(value);
    //console.log(JSON.stringify(value))
    fs.writeFile('./output.json', JSON.stringify(value), err => err ? console.log(err): null);
});