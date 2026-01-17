import { test, expect } from '@playwright/test';

test ("this is first test",{tag:['@tc123'],},async({page})=>{
    console.log("this is running from jenkins ")
    console.log("Hello world")
    //console.log('BASE_URL =', process.env.BASE_URL);
    await page.waitForTimeout(2000)
    await page.goto('https://www.google.com', { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(2000)
    console.log(await page.title())

})

test ("this is secod test",{tag:['@tc124'],},async({page})=>{
    console.log("this is running from jenkins -2 ")
    console.log("Hello world -2")
    //console.log('BASE_URL =', process.env.BASE_URL);
    await page.waitForTimeout(2000)
    await page.goto('https://www.amazon.com', { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(2000)
    console.log(await page.title())

})

// test ("this is second test",{tag:['@tc124'],},async({page})=>{
//     console.log("this is running from jenkins -2")
//     console.log("Hello world -2")
//     //console.log('BASE_URL =', process.env.BASE_URL);
//     await page.waitForTimeout(2000)
//     await page.goto('https://www.amazon.in/', { waitUntil: 'domcontentloaded' });
//     await page.waitForTimeout(2000)
//     console.log(await page.title())

// })
