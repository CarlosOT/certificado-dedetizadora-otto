const btnGenerate = document.querySelector('#generatePdf');

btnGenerate.addEventListener('click', () =>{
    //conteúdo do PDF
    const content = document.querySelector("#content");

    //configuração do conteúdo final do PDF
    const options = {
        margin:[11,0,0,0],
        filename: "arquivo.pdf",
        html2canvas: {scale: 2},    
        jsPDF:{format: "letter", orientation: "portrait"},
    }
    
    //gerar e baixar o pdf
    html2pdf().set(options).from(content).save();
});