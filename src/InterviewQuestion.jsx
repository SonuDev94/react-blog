function InterviewQuestion() {
    //All objects (arrays, plain objects, functions, etc.) are truthy.
    //But when compared with primitives using ==, they are converted to strings, and the comparison usually fails.
    //Always use === for predictable behavior and to avoid type coercion surprises.

    console.log([] == 0)
    if ([]) {     //Here we’re directly checking the truthiness of an empty array.
        //In JavaScript, all objects (including arrays) are truthy, even if empty.
        console.log("Value [] is true")
    }
    if ([] == true) {//Now we’re using loose equality (==), which involves type coercion — JavaScript tries to convert both sides to comparable types.
        //[] is an object → it’s converted to a primitive value using toString() [].toString() → ""
        //Now if("" == true) //When comparing a string and a boolean, JavaScript converts both to numbers: Number("") → 0 and Number(true) → 1
        //now 0 == 1 → false
        console.log("Value  == is true")
    }

    if ([] === true) { //This uses strict equality (===), which does not perform type coercion.
        // It only returns true if both type and value match exactly.
        console.log("Value === is true")
    }
    if ({}) {  //Object are always truyhy
        console.log("Object is truthy")
    }
    if ({} == true) {//{} → converted to a primitive value: {}.toString() → "[object Object]" then compare ("[object Object]" == true) now JavaScript converts both sides to numbers:Number("[object Object]") → NaN ,Number(true) → 1
        // and then NaN == 1 → false
        console.log("Object are equal true")
    }

    // Copy of array
    let arr = [1, 2, [3, 4, 5], 6]
    let copyArra = arr; //this is not copy. assing reference of array. so if we chnage value in copyarray then it will reflect on origin array
    copyArra.push(7)
    console.log("Original arra", arr)
    console.log("Refence Copy", copyArra)

    //Second Way
    let arr2 = [1, 2, [3, 4, 5], 6]
    let copyArraBySeperade = [...arr2]; //Using Spread Operator //tMakes a shallow copy (top-level elements are copied). and Nested objects/arrays are still shared by reference.. so if we change in nested array in copy aaray then it will change also in main array;
    // let copyArrabyCon=[].concat(arr2); //same as shalow copy
    //const copy = Array.from(arr); //same as shalow copy
    //const copy = arr.slice(); //same as shalow copy
    copyArraBySeperade.push(7) // this will not effect on main array. this will push only copy array
    copyArraBySeperade[2].push(8) // this will change also in main array bcz nested array have reference in copy array
    console.log("Shallow Copy", copyArraBySeperade)
    console.log("Original arr2", arr2)

    //Deep Copy
    const arr4 = [{a:1}, {b:2}];
    const copy = structuredClone(arr4); //Deep copy but Works in modern browsers / Node 17+
    copy[0].a = 99;
    console.log(arr4[0].a); // 1 ✅ original unchanged


    let arr3 = [1, 2, [3, 4, 5], 6,{a:1},{b:6}]
    let deepCopy = JSON.parse(JSON.stringify(arr3));//Deep Copy but Fails if array contains functions, Dates, undefined, or special objects.
    deepCopy.push(7)
    console.log("Deep Copy", deepCopy)
    console.log("Original arr3", arr3)


    let res = () => ({ a: 3 }); //return value like()=>3  
    console.log(res())

    function User(name) {
        this.name = name
    }
    // console.log(user())
    // User("Sonu")  //n non-strict mode → this refers to the global object (window in browsers or global in Node).// some thimes throw error-> in strict mode :Cannot set property 'name' of undefined
    let u = new User("Sonu");
    console.log(u.name)
}

export default InterviewQuestion;