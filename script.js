const container1 =document.getElementById('container1');
const container2 =document.getElementById('container2');
const container3 =document.getElementById('container3');

const block1 = document.getElementById('block1');
const block2 = document.getElementById('block2');
const block3 = document.getElementById('block3');

block1.addEventListener('click',function(){
 
    container1.style.display = 'block';
    container2.style.display = 'none';
    container3.style.display = 'none';
    
})

block2.addEventListener('click',function(){
 
    container1.style.display = 'none';
    container2.style.display = 'block';
    container3.style.display = 'none';
    // window.location.reload(); 

})

block3.addEventListener('click',function(){
 
    container1.style.display = 'none';
    container2.style.display = 'none';
    container3.style.display = 'block';

})
    // window.location.reload(); 


