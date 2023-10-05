// mapやfilter
const nameArr = ["附田", "康平"]

// const nameArr2 = nameArr.map((name)=>{
//   return name;
// })
// console.log(nameArr2);

// nameArr.map((name, index) => console.log(`${index + 1}番目${name}`));

// const numArr = [1,2,3,4,5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 0;
// });
// console.log(newNumArr);

// const newNameArr = nameArr.map((name) => {
//   if (name === "康平") {
//     return name
//   } else {
//     return `${name}さん`
//   }
// })
// console.log(newNameArr);

// 三項演算子
// const val1 = 1 > 0 ? `trueです` : `falseです`;
// console.log(val1);

// const num = 1300;
// console.log(num.toLocaleString());

// const formattedNum = typeof num === `number` ? num.toLocaleString() : `数値を入れてください`
// console.log(formattedNum);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? `100を超えています` : `許容範囲内です`;
// }
// console.log(checkSum(50,40));

// 論理演算子の本当の意味を知ろう
// const flag1 = true;
// const flag2 = false;

// if (flag1 && flag2) {
//   console.log("1か2はtrueになります");
// }

// if (flag1 || flag2) {
//   console.log("1か2はtrueになります");
// }

// || 左側がfalseなら右側を返す
// const num = null;
// const fee = num || "金額が未定義です"
// console.log(fee);

// && 左側がtrueなら右側を返す
// const num2 = 100;
// const fee2 = num2 && "なんか設定されました";
// console.log(fee2);

