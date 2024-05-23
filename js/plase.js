var l = document.getElementsByClassName('mesta1', 'mesta2');   
function Count_Mest (){
    let z_mest = 0;
        for(let i=0;i<l.length;i++){
            if(l[i].style.background=='red'){
                    z_mest++;
            }
        }
    return z_mest;
}
for(let i=0;i<l.length;i++){
l[i].onclick = function(){
    this.style.background='grey';
}
}
