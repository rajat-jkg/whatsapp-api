function select(index){
    document.getElementById('Menu').style.display = "none";
    document.getElementById("-"+index).style.display = "block";
}
function generate1(){
    let number1 = document.getElementById('cc1').value + document.getElementById('phone1').value;
    let link1 = `http://api.whatsapp.com/send?phone=${number1}`;
    console.log(link1);
    document.getElementById('cc1').value = '';
    document.getElementById('phone1').value = '';
    butt1 = document.getElementById('send1');
    butt1.setAttribute('href',link1);
    document.getElementById('but1').style.display = "";
}

function generate2(){
    let number2 = document.getElementById('cc2').value+document.getElementById('phone2').value;
    let message2 = document.getElementById('message2').value;
    let link2 = `http://api.whatsapp.com/send?phone=${number2}text=${message2}`;
    console.log(link2);
    butt2 = document.getElementById('send2');
    butt2.setAttribute('href',link2);
    document.getElementById('cc2').value = '';
    document.getElementById('phone2').value = '';
    document.getElementById('message2').value = '';
    document.getElementById('but2').style.display = "";
}

function generate3(){
    let message3 = document.getElementById('message3').value;
    let link3 = `http://api.whatsapp.com/send?text=${message3}`;
    console.log(link3);
    butt3 = document.getElementById('send3');
    butt3.setAttribute('href',link3);
    document.getElementById('message3').value = '';
    document.getElementById('but3').style.display = "";
}