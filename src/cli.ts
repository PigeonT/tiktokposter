#!/usr/bin/env node
import axios from 'axios';
import cheerio from 'cheerio';
// import open from 'open';
import {exec} from "child_process";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const open = (...args) => import('open').then(({default: fetch}) => fetch(...args));


async function getTikTokHotSearchPage() {

  try {
    // return await axios.get('https://randomuser.me/api/?results=5');
    return await axios.get('https://www.douyin.com/search/%E7%83%AD%E6%90%9C');
  } catch (error) {
    console.error(error);
    throw error;
  }
}

(async () => {
  try {
    const topPageRes: any = await getTikTokHotSearchPage();
    const $ = cheerio.load(topPageRes.data);
    const top1Video = $('#search-content-area > div > div.HHwqaG_P > div:nth-child(1) > ul > li:nth-child(1) > div > div > div.cs-view.block.cs-scroller.mt-16.-ml-8.-mr-8.tksVCFN7 > div > div > div:nth-child(1)')
    console.log(top1Video)


    // eslint-disable-next-line no-inner-declarations,@typescript-eslint/ban-ts-comment
    // @ts-ignore
    // eslint-disable-next-line no-inner-declarations
    function openBrowser(url) {
      // Get the operating system
      const os = process.platform;

      // Choose the command based on the operating system
      let cmd;
      if (os === "win32") {
        // Windows
        cmd = `start ${url}`;
      } else if (os === "darwin") {
        // Mac OS
        cmd = `open ${url}`;
      } else if (os === "linux") {
        // Linux
        cmd = `xdg-open ${url}`;
      } else {
        // Unsupported OS
        throw new Error("Unsupported operating system");
      }

      // Execute the command
      exec(cmd, (error, stdout, stderr) => {
        if (error) {
          console.error(`Failed to open browser: ${error.message}`);
          return;
        }
        if (stderr) {
          console.error(`Error: ${stderr}`);
          return;
        }
        console.log(`Opened browser: ${stdout}`);
      });
    }

// Example usage
    openBrowser(top1Video)


    // await open('https://sindresorhus.com', {app: ['google chrome', '--incognito']});
  } catch (e) {
    //
  }
})();
