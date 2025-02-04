const btnGenerate = document.getElementById('generatePdf');

function printScreen(){
    btnGenerate.style.display = 'none';
    window.print();    
    
}