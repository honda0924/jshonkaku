let dat=new Date(2017,4,15,11,40);
console.log(dat.toLocaleString());
dat.setMonth(dat.getMonth()+3);
console.log(dat.toLocaleString());
dat.setDate(dat.getDate()-20);
console.log(dat.toLocaleString());

dat=Date(2017,4,15,11,40);
console.log(dat.toLocaleString());
dat.setMonth(dat.getMonth()+1);
dat.setDate(0);
console.log(dat.toLocaleString());

let dat1=new Date(2017,4,15);
let dat2=new Date(2017,5,20);

let diff=(dat2.getTime()-dat1.getTime())/(1000*60*60*24);
console.log(diff+'日の差があります。');
