let data=[2,3,4,5];
data.forEach(function(value,index,array){
  console.log(value*value);
});

let result=data.map(function(value,index,array){
  return value*value;
});

let judge=data.some(function(value,index,array){
  return value%3===0;
});
if (judge){
  console.log('3の倍数が見つかりました。');
}else{
  console.log('3の倍数は見つかりませんでした');
}
data = [4,9,16,25];
let fl = data.filter(function (value,index,array) {
  return value%2===1;
});

console.log(fl);

let ary=[5,25,10];
console.log(ary.sort());
console.log(ary.sort(function(x,y){
  return x-y;
}));

let classes = ['部長','課長','主任','担当'];
let members = [
  {name: '鈴木清子',clazz: '主任'},
  {name: '山口久雄',clazz: '部長'},
  {name: '井上太郎',clazz: '担当'},
  {name: '和田知美',clazz: '課長'},
  {name: '小森雄太',clazz: '担当'},
];
console.log(members.sort(function(x,y){
  return classes.indexOf(x.clazz)-classes.indexOf(y.clazz);
}))