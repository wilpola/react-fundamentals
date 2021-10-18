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