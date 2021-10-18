# let & Const

Before the ES6, the var keyword was used to initialize variable in Javascript. The scope of the var is function scope therefore it can be used inside the function where it was initialized. If it is initialized inside the Javascript file outside the any function, it is global and can be used anywhere in the file and that can be problem.

The let keyword was introduced in the ES6 and it's block scoped. Therefore it can be used only inside the block where it is initialized. In the following example, the variable b is intialized inside the if block therefore it can be used only there.

``` javascript

function myFunc() {
    let a = 5;

    if (a < 10) {
        let b = 8;
    }
}
```
<br/>
The const has the same block scope but it can be used to initialize constants like shown in the example below. It is recommended to use const always when you can, otherwise use let.

``` javascript

function myFunc() {
    const PI = 3.1415;

    ...
}
```
<br/>

If you try to change the value of the constant, you will get an error like shown in the image below. 
<br/>

![alt text](https://vw4.viope.com/content/f291e5c33c58690b4f4d7e169eb527e8c0039166/ConstError.PNG)