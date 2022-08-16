// 1)compare two objects 

var obj1={name:"person 1",age:5};
var obj2={age:5,name:"person 1"};
// console.log(Object.keys(obj1));
var result='same';
    if(Object.keys(obj1).length===Object.keys(obj2).length){
        for(let key in obj1){
                // console.log(obj1.key);

            if(obj1[key]===obj2[key]){
                continue;
            }
            else{
                result="not same";
                break;
            }


        }

    }
    else{
        result="not same";
    }
    console.log("Objects are ",result,"!!!!");
    
// 2)display all the countries flag in console using the given api
// 3)display all the countries name

var xhr= new XMLHttpRequest();
xhr.open('GET','https://restcountries.com/v3.1/all');
xhr.send();
xhr.responseType="json";
xhr.onload=function displayResult(){
    const countries=xhr.response;
    // console.log(countries);
     countries.forEach(function(country){
        console.log(country.name.common);
         console.log(country.flags.png);
    })
};