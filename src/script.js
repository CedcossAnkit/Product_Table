var b=0;
var mainProduct = [];// main array

function click1() {
    var id = document.getElementById('pID').value;
    var name = document.getElementById('pName').value;
    var price = document.getElementById('pPrice').value;
    
    validate(id, name, price);
}

function validate(id, name, price) {
    if (id == "" || name == "" || price == "") {
        alert('All Feilds Are Required!!');
    }
    else{
        add(id, name, price);

    }
}

function add(id, name, price) {
    
    var products = {
        pid: id,
        pName: name,
        pPrice: price
    }

    if(mainProduct.length==0){
        mainProduct.push(products);
        display(mainProduct);//display main array        
    }
    else {
        if (checkid(id)==false) {
            mainProduct.push(products);
            display(mainProduct);//display main array   
        }
        else if(checkid(id)==true){
            alert("ID Already Exist!");
        }
    }

}
function checkid(id) {

    for (var i = 0; i < mainProduct.length; i++) {
        if(mainProduct[i].pid==id){
             return true;
        }
        

    }
    return false;

}

function display(mainProduct) {
    var hTML;
    for (var i = 0; i < mainProduct.length; i++) {

        hTML += "<tr><td>" + mainProduct[i].pid + "</td> <td>" + mainProduct[i].pPrice + "</td> <td>" + mainProduct[i].pName + "</td> <td><a>edit</a></td></tr>";
    }
    document.getElementById('table').innerHTML = hTML;
}
// function display(ide,product,price){
//     for(var i=0;i<ide.length;i++){
//         var edit=ide[i];
//         var text=String("<u style='color:blue'>Edit:- </u>"+edit);
//         document.getElementById('table').innerHTML+="<tr><td>"+ide[i]+"</td> <td>"+product[i]+"</td> <td>" +price[i]+"</td> <td><a onclick='alert("+edit+")'>"+text+"</a></td></tr>";
//     } 
// }
