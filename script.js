const container1 =document.getElementById('container1');
const container2 =document.getElementById('container2');
const container3 =document.getElementById('container3');
const detailCredit = document.getElementById('detait-mon-credit');
const infosPersonnelles= document.getElementById('infos-personnelles');

const block1 = document.getElementById('block1');
const block2 = document.getElementById('block2');
const block3 = document.getElementById('block3');
const buttonForm1 = document.getElementById('button-form1');
const spanBouton1=document.getElementById('span-bouton1');
const spanBouton2=document.getElementById('span-bouton2'); 

block1.addEventListener('click',()=>{


 
    container1.style.display = 'block';
    container2.style.display = 'none';
    container3.style.display = 'none';
    detailCredit.style.display = 'none';
    infosPersonnelles.style.display = 'none';
    block1.style.marginTop = '-10px';
    block3.style.marginTop = '0px';
    block1.style.color = '#292D5A';
    block1.style.backgroundColor = '#FDDF35';


    block2.style.marginTop = '0px';
    block2.style.backgroundColor = '#9B9B9B';
    block2.style.color = 'white';
    block3.style.backgroundColor = '#9B9B9B';
    block3.style.color = 'white';



    
})


block2.addEventListener('click',()=>{
 
    container1.style.display = 'none';
    container2.style.display = 'block';
    container3.style.display = 'none';
    detailCredit.style.display = 'flex';
    infosPersonnelles.style.display = 'none';

    block2.style.marginTop = '-10px';
    block1.style.marginTop = '0px';
    block3.style.marginTop = '0px';
    block2.style.backgroundColor = '#FDDF35';
    block2.style.color = '#292D5A';

    block3.style.backgroundColor = '#9B9B9B';
    block3.style.color = 'white';

    block1.style.backgroundColor = '#02AFBC';
    block1.style.color = 'white';

})

block3.addEventListener('click',()=>{
 
    container1.style.display = 'none';
    container2.style.display = 'none';
    container3.style.display = 'block';
    detailCredit.style.display = 'flex';
    infosPersonnelles.style.display = 'flex';

    block3.style.marginTop = '-10px';
    block2.style.marginTop = '0px';
    block1.style.marginTop = '0px';
    block2.style.backgroundColor = '#02AFBC';
    block1.style.backgroundColor = '#02AFBC';
    block2.style.color = 'white';
    block1.style.color = 'white';
    block3.style.color = '#292D5A';

    block3.style.backgroundColor = '#FDDF35';

    block1.style.backgroundColor = '#02AFBC';
    block1.style.color = 'white';


})


spanBouton1.addEventListener('click', (e)=>{
    e.preventDefault();
    console.log('Bouton cliqué');

    container1.style.display = 'none';
    container2.style.display = 'block';
    container3.style.display = 'none';
    detailCredit.style.display = 'flex';
    infosPersonnelles.style.display = 'none';

    block2.style.marginTop = '-10px';
    block1.style.marginTop = '0px';
    block2.style.backgroundColor = '#FDDF35';
    block2.style.color = '#292D5A';

    block3.style.backgroundColor = '#9B9B9B';
    block3.style.color = 'white';

    block1.style.backgroundColor = '#02AFBC';
    block1.style.color = 'white';
});






spanBouton2.addEventListener('click', (e)=>{

    e.preventDefault();
       console.log('Bouton cliqué');
   
       container1.style.display = 'none';
       container2.style.display = 'none';
       container3.style.display = 'block';
       detailCredit.style.display = 'flex';
       infosPersonnelles.style.display = 'flex';
   
       block3.style.marginTop = '-10px';
       block2.style.marginTop = '0px';
       block1.style.marginTop = '0px';
       block2.style.backgroundColor = '#02AFBC';
       block1.style.backgroundColor = '#02AFBC';
       block2.style.color = 'white';
       block1.style.color = 'white';
       block3.style.color = '#292D5A';
   
       block3.style.backgroundColor = '#FDDF35';
   
       block1.style.backgroundColor = '#02AFBC';
       block1.style.color = 'white';
   
   });







function syncValue(inputId, rangeId) {
    var input = document.getElementById(inputId);
    var range = document.getElementById(rangeId);
    input.value = range.value;
}

function updateMensualite() {
    const montant = parseFloat(document.getElementById('amount').value);
    const duree = parseInt(document.getElementById('duree').value);
    const mensualite = calculateMensualite(montant, duree);
    document.getElementById('mensualite').value = Math.round(mensualite);
}

function updateMontant() {
    syncValue('amount', 'montantRange');
    updateMensualite(); 
}

function updateDuree() {
    syncValue('duree', 'dureeRange');
}

function calculateMensualite(montant, duree) {
    const tauxInteret = 0.05; 
    const mensualite = (montant * tauxInteret / 12) / (1 - Math.pow(1 + tauxInteret / 12, -duree));
    return mensualite;
}
