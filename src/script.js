
function click1(){
    var id=document.getElementById('pID').value;
    var name=document.getElementById('pName').value;
    var price=document.getElementById('pPrice').value;
    validate(id,name,price);
    add(id,name,price);

}

function validate(id,name,price){
    if(id=="" || name=="" || price==""){
        alert('All Feilds Are Required!!')
    }
}

function add(id,name,price){
    var ide=[];
    var product=[];
    var price=[];

        ide.push(document.getElementById('pID').value);
        product.push(document.getElementById('pName').value);
        price.push(document.getElementById('pPrice').value);

        for(var i=0;i<ide.length;i++){
            document.getElementById('table').innerHTML+="<tr><td>"+ide[i]+"</td> <td>"+product[i]+"</td> <td>" +price[i]+"</td></tr>";
        }
    

}
