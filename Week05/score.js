const studentName = "張煥騏";
const chinese = 80;
const english = 75;
const programming = 90;

const average = (chinese + english + programming) / 3;

console.log(`姓名：${studentName}`);
console.log(`平均分數：${average}`);

if (average >= 60) {
  console.log("結果：及格");
} else {
  console.log("結果：不及格");
}