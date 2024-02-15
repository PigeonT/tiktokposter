import puppeteer from 'puppeteer';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import robot from 'robotjs';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import ncp from 'node-clipboardy';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const clipboard = (...args) => import('clipboardy').then(({default: fetch}) => fetch(...args));


(async () => {
  // Launch the browser and open a new blank page
  const browser = await puppeteer.launch({headless: false});
  // const context = browser.defaultBrowserContext();
  // await context.overridePermissions(['clipboard-read']);
  const page = await browser.newPage();


  // Navigate the page to a URL
  await page.goto('https://www.douyin.com/search/%E7%83%AD%E6%90%9C');

  // Set screen size
  await page.setViewport({width: 1080, height: 1024});

  // Type into search box
  // await page.type('.devsite-search-field', 'automate beyond recorder');
  //
  // Wait and click on first result
  const searchResultSelector = '#search-content-area > div > div.HHwqaG_P > div:nth-child(1) > ul > li:nth-child(1) > div > div > div.cs-view.block.cs-scroller.mt-16.-ml-8.-mr-8.tksVCFN7 > div > div > div:nth-child(1)';
  await page.waitForSelector(searchResultSelector);
  const searchResultSelector2 = '#lqFujt1a > div.L1TH4HdO.positionBox.hideChangeVideo.newMiniAvatar.newMiniFontSize.newMiniSpacing.newMiniIcon > div > div.ZfrXkYoG';
  await page.waitForSelector(searchResultSelector2);
  await page.click(searchResultSelector2);
  const searchResultSelector3 = '#lqFujt1a > div.L1TH4HdO.positionBox.hideChangeVideo.newMiniAvatar.newMiniFontSize.newMiniSpacing.newMiniIcon > div > div.ZfrXkYoG > div:nth-child(2) > div > div > div > button._FNKGf5B.W1wbuR_h';
  await page.waitForSelector(searchResultSelector3);
  await page.click(searchResultSelector3);

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  // await ncp.writeSync('🦄');
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  console.log(await ncp.readSync())
  const newpage = await browser.newPage();
  await newpage.goto('https://snaptik.app/');
  await newpage.setViewport({width: 1080, height: 1024});
  await newpage.type('#url', await ncp.readSync());
  await new Promise(resolve => setTimeout(resolve, 3000))


  const searchResultSelector4 = '#hero > div > form > button > i';
  await newpage.waitForSelector(searchResultSelector4);
  await newpage.click(searchResultSelector4);
  const searchResultSelector5 = '#download > div > div.video-links > a.button.download-file';
  await newpage.waitForSelector(searchResultSelector5);
  await newpage.click(searchResultSelector5);
  await new Promise(resolve => setTimeout(resolve, 50000))

  //
  // // Locate the full title with a unique string
  // const textSelector = await page.waitForSelector(
  //   'text/Customize and automate'
  // );
  // const fullTitle = await textSelector?.evaluate(el => el.textContent);

  // Print the full title
  // console.log('The title of this blog post is "%s".', fullTitle);

  // await browser.close();
})();
