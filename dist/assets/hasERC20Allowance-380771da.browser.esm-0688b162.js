import{o as c,aP as d}from"./index-992c5bf9.js";async function w(a,e,n){const r=a.getProvider(),t=new c(r,e,d,{}),s=await a.getSignerAddress(),o=a.readContract.address;return(await t.readContract.allowance(s,o)).gte(n)}export{w as h};
