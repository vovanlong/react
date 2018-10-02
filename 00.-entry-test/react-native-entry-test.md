# React Native Entry Test

<img src="./logo.png" width="100px"/>

- Học Viên: <Họ và tên>
- Ngày test: <dd-mm-yyyy>

## Để thực hiện bài test này, Học viên sẽ cần sử dụng Visual Studio Code hoặc Sublime Text và [Webtoolkitonline](https://www.webtoolkitonline.com/javascript-tester.html) để chạy code Javascript. Học viên sẽ download file "react-native-entry-test.md" từ Gitlab để bắt đầu làm bài

## GMAT

### 1. Một bữa ăn ở nhà hàng chưa tính tiền phục vụ hết 35.50 $. Nếu phí phục vụ lớn hơn 10% và nhỏ hơn 15% số tiền bữa ăn thì toàn bộ số tiền cho bữa ăn là bao nhiêu giữa các khoảng?
- [ ] $40 và $42
- [ ] $39 và $41
- [ ] $38 và $40
- [ ] $37 và $39
- [ ] $36 và $37

### 2. Năm 1979, khoảng 1/3 trong số 37.3 triệu hành khách du lịch bằng máy bay đến Mỹ hoặc từ Mỹ đi từ sân bay Kennedy. Nếu số lượng hành khách đi hoặc đến sân bay Miami bằng ½ số lượng hành khách đi hoặc đến sân bay Kennedy và gấp 4 lần lượng hành khách ở sân bay Logan thì có bao nhiêu triệu hành khách đi hoặc đến sân bay Logan trong năm đó?
- [ ] 18.6
- [ ] 9.3
- [ ] 6.2
- [ ] 3.1
- [ ] 1.6

### 3. Toàn bộ 40 TV loại X và 80 TV loại Y được mua cho một khách sạn. Nếu giá TV loại Y gấp hai lần giá TV loại X thì gia của TV loại Y chiếm bao nhiêu phần tram trong tổng giá trị hóa đơn?
- [ ] 0.25%
- [ ] 0.5%
- [ ] 0.625%
- [ ] 0.833%
- [ ] 1.0%

### 4. 30% của thành viên của một CLB bơi đã thi qua kỳ thi cứu sinh. Trong số những người không đỗ, 12 người đã tham gia khóa học chuẩn bị và 30 người không tham gia khóa học này. Hỏi có bao nhiêu người trong CLB bơi này?
- [ ] 60
- [ ] 80
- [ ] 100
- [ ] 120
- [ ] 140

### 5. Tổng số tiền trong hóa đơn bán kẹo trong ngày Valentine là 385 triệu dollars, bằng 7% tổng số kẹo bán ra trong năm. Hỏi số kẹo bán ra trong năm là bao nhiêu triệu dollars?
- [ ] 55
- [ ] 550
- [ ] 2695
- [ ] 5.500
- [ ] 26.950

## Coding Test

### 1. Cat and Mouse - Easy Version
You will be given a string (x) featuring a cat 'C' and a mouse 'm'. The rest of the string will be made up of '.'.

You need to find out if the cat can catch the mouse from it's current position. The cat can jump over three characters. So:

C.....m returns 'Escaped!' <-- more than three characters between

C...m returns 'Caught!' <-- as there are three characters between the two, the cat can jump.

Sample tests: 
```js
Test.describe("Example tests",_=>{
Test.assertEquals(catMouse('C....m'), "Escaped!");
Test.assertEquals(catMouse('C..m'), "Caught!");
Test.assertEquals(catMouse('C.....m'), "Escaped!");
});
```

Solution: 
```js
function catMouse(x){
    // Your code here
}
```

### 2. Another remove duplicates
In this Kata, you will remove the left-most duplicates from an int array an return the result.
For example:
```js
solve([3,4,4,3,6,3]) = [4,6,3]
```
-- remove the 3 in index 0 and index 3
-- remove the 4 in index 1

Solution: 
```js
function solve(arr){
    //..
}
```

### 3. Convert to Binary
Given a non-negative integer n, write a function toBinary/ToBinary which returns that number in a binary format.
```js
to_binary(1)  /* should return 1 */
to_binary(5)  /* should return 101 */
to_binary(11) /* should return 1011 */
```

Solution: 
```js
function toBinary(n){
  return n;
}
```

### Phương thức nộp bài làm

Sau khi kết thúc bài test, Học viên lưu lại bài làm của mình dưới dạng: HọTên-genbacoder-react-native-entry-test.MD và gửi đến địa chỉ: vinh.hoang@genbacoder.com