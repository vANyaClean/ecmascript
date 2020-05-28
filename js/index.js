//alert('Hello!')
let greetings = 'World!';
//alert(greetings);
const message = 'Hello' + greetings;
alert(message);
const userage=parseFloat(prompt ('Enter your age'));
alert('Your age is :' + userage);

const nextage = add(userage,1);
alert(nextage);

if (userage >=18){
    alert('Hello')
}    
    else{
        alert('Not allowed')

    }
function add(a,b){
const result = a + b;
return result;
}
