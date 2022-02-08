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

        hTML += "<tr><td>" + mainProduct[i].pid + "</td>\
         <td>" + mainProduct[i].pPrice + "</td> \
         <td>" + mainProduct[i].pName + "</td>\
          <td><a onclick=update("+mainProduct[i].pid+")>Edit || </a>\
          <a onclick=DeleteEle("+mainProduct[i].pid+")>Delete</a></td>\
          </tr>";
    }
    document.getElementById('table').innerHTML = hTML;
}

function update(pid){
    document.getElementById('btupdate').style.display='block';
    document.getElementById('btadd').style.display='none';
    for(var i=0;i<mainProduct.length;i++){

        if(mainProduct[i].pid==pid){
            var pid=mainProduct[i].pid;
            var pname=mainProduct[i].pName;    
            var pprice=mainProduct[i].pPrice;

            console.log(pid,pname,pprice);
            document.getElementById('pID').value=pid;
            document.getElementById('pName').value=pname;
            document.getElementById('pPrice').value=pprice;                   

            break;
        }
        

    }
}

function updateProduct(){
    idd=document.getElementById('pID').value;
    namee=document.getElementById('pName').value;
    pricee=document.getElementById('pPrice').value;
    for(var j=0;j<mainProduct.length;j++){
        if(mainProduct[j].pid==idd){
            mainProduct[j].pName=namee;
            mainProduct[j].pPrice=pricee;

            document.getElementById('pName').value=pricee;
            document.getElementById('pPrice').value=namee;
            console.log(mainProduct[j].pName,mainProduct[j].pPrice);

            display(mainProduct);
            break;

        }
    }
}

function DeleteEle(pid){
    for(var i=0;i<mainProduct.length;i++){
        if(mainProduct[i].pid==pid){
            mainProduct.splice(i,1);
            display(mainProduct);
            break;
        }
    }
}
// function display(ide,product,price){
//     for(var i=0;i<ide.length;i++){
//         var edit=ide[i];
//         var text=String("<u style='color:blue'>Edit:- </u>"+edit);
//         document.getElementById('table').innerHTML+="<tr><td>"+ide[i]+"</td> <td>"+product[i]+"</td> <td>" +price[i]+"</td> <td><a onclick='alert("+edit+")'>"+text+"</a></td></tr>";
//     } 
// }
