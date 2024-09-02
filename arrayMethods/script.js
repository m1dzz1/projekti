let array1 = ["Stefan", "Milica", "Andrea"];
let array2 = ["2006", ["2004"], "2009"];
let obj = {
    ime: "Stefan",
    perzime: "Mizdrak",
    godine: 17
}
document.querySelector(".pre").textContent = array1 +" "+array2;
console.log(obj)

document.getElementById('array-methods').addEventListener('change', function() {
    const value = this.value;
    let result;

    switch (value) {
        case "length":
            result = array1.length;
            break;
        case 'toString':
            result = array1.toString();
            break;
        case 'join':
            result = array1.join(", ");
            break;
        case 'delete':
            delete obj.godine;
            console.log(obj);
            result="objekat se nalazi u konzoli"
            break;
        case 'concat':
            result = array1.concat(array2);
            break;
        case 'flat':
            result = array1.flat();
            break;
        case 'push':
            array1.push("Nov Element");
            result = array1;
            break;
        case 'unshift':
            array1.unshift("Novi Element");
            result = array1;
            break;
        case 'pop':
            result = array1.pop();
            break;
        case 'shift':
            result = array1.shift();
            break;
        case 'splice':
            array1.splice(1, 1, "Zamenjen Element");
            result = array1;
            break;
        case 'slice':
            result = array1.slice(1, 2);
            break;
        case 'some':
            result = array1.some(name => name.length > 5);
            break;
        case 'reduce':
            result = array1.reduce((accumulator, currentValue) => accumulator + " " + currentValue, "");
            break;
        case 'map':
            result = array1.map(name => name.toUpperCase());
            break;
        case 'reverse':
            result = array1.slice().reverse(); 
            break;
        case 'values':
            result = Array.from(array1.values());
            break;
        default:
            result = 'Izaberite metodu za prikaz rezultata.';
    }

    
    document.querySelector(".res").textContent = result;

});