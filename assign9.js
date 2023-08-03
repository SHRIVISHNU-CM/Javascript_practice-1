const arr = [1, 2, 999, 56, "Mithun", 1234, "PW"];
let i =0;
while(i<=arr.length){
    if(typeof arr[i] == "string"){
        console.log("found:" + " " + arr[i]);
        break;
    }

    i++;
}
