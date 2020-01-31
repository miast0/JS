// Bubble sort
var list = [1,4,5,3,2,1,4,7,8,9,99,6,1654,10];
var swapped = false;
var store = 0;

while(swapped == false){
    swapped = true;
    for (var i = 0; i < list.length - 1; i++) {
        if (list[i] > list[i+1]){
            store = list[i+1];
            list[i+1] = list[i];
            list[i] = store;
            swapped = false;
        }
    }
}

console.log(list)