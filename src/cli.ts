#!/usr/bin/env node
import axios from 'axios';

async function getUser() {
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
    const text: any = await getUser();
    console.log(text);
  } catch (e) {
  }
})();
