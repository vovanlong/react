## Javascript & ES6

### Roadmap
 - Hoisting
 - Biến
    - Biến
    - Hằng
    - Phân biệt `var` và `let`
 - Điều kiện và vòng lặp
    - IF - ELSE
    - FOR
    - WHILE DO
 - Hàm
    - Khai báo hàm.
    - Arrow function
    - Callback
 - Bất đồng bộ
    - Promise
    - async - await
 - OOP
    - Class
    - Inheritance
    
#### 1. Hoisting

Hoisting is JavaScript's default behavior of moving all declarations to the top of the current scope (to the top of the current script or the current function).

```js
console.log(variable); //a is not define
```

```js
var variable;
console.log(variable);//undefined
```
```js
console.log(variable);//undefined
var variable;
```

#### 2.Biến

 - Khai báo biến với `var`:

 	`var name = 'Your Name';`

 - Khai báo biến với let:

 	`let code = 100;`

 - Khai báo hằng:

 	`const url = 'https://google.com';`
 
 - Khác nhau giữa VAR và LET:
 
 ```js
    //Var
if (true) {
    var text = 'in if statement'
}
    
console.log(text) //in if statement
    
    //Let
if (true) {
    let text = 'in if statement'
}
console.log(text) //text is not defined
```

```js
    //Var
var text = 'Hello';
var text = 'World';
console.log(text); // World
    
    //Let
let text = 'Hello';
let text = 'World';
console.log(text); // Identifier 'text' has already been declared
```

```js
    //Var
for ( var count = 0; count < 3; count++ ){
    
}
console.log('Count ',count); //Count = 3

    //Let
for ( let count = 0; count < 3; count++ ){
    
}
console.log('Count ',count);//count is not defined
```

#### 3. Điều kiện và vòng lặp.

*IF ELSE*

```js
let active = false;
if(active){
    console.log('is true')
}
```

*FOR LOOP*

```js
for(let i = 0; i < 10; i++){
    console.log(i);
}
```

*WHILE LOOP*

```js
let i = 1;
while (i < 10){
    console.log(i);
    i++;
} 
```

#### 4. Function

*Khai báo hàm*
```js
function showName(name) {
  console.log(name);
}

showName('Mobile');
```

*Arrow function*

```js
const showName = (name) =>{
  console.log(name);  
};

showName('Android');
```
*Giá trị mặc định*

```js
const showName = (name='react-native') =>{
  console.log(name);  
};

showName(); //react-native
```

*Callback*

```js
const callback = () =>{
    //Do something
};

const createFunction=(callbackFunction)=>{
  if(callbackFunction) callbackFunction();  
};

createFunction(callback);
```

*Callback hell*

```js
setTimeout(function() {   
      console.log("one");   
      setTimeout(function() {   
         console.log("two");   
         setTimeout(function() {   
            console.log("three");   
         }, 1000);   
      }, 1000);   
   }, 1000);  
```

#### 5. Promise

*Promise*

```js
const getData = () =>{
  let promise = new Promise((resolve, reject)=>{
     //Do something
     if(success){
         resolve(data);
     } else{
         reject(error);
     }
  });
  return promise;
};

getData().then(data=>{
   //Do something 
}).catch(error=>{
    //Show error
});
```

*async - await*

```js
try{
    let data = await getData();
    //Do something
}catch (error){
    //Show error
}
```

#### 5. OOP

*Class*
```js
class User {
    constructor (name, age) {
        this.name = name;
        this.age = age;
    }
    setName (name) {
        this.name = name;
    }
    getName () {
        return this.name;
    }
    setAge (age) {
        this.age = age;
    }
    getAge () {
        return this.age;
    }
};

let empl = new User('Android', 22);
empl.getAge();
empl.getName();
```

*Class Inheritance*

```js
class Member extends User{
  constructor(name, age, gender){
      super(name,age);
      this.gender = gender;
  }
  
  getGender(){
      return this.gender;
  }
  static defaultMember () {
          return "This is a member";
      }
}

let member = new Member('react',20,'male');
member.getGender();

//Static function
Member.defaultMember();
```