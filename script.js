const btnGenerate = document.querySelector('#generatePdf');

btnGenerate.addEventListener('click', () =>{
    //conteúdo do PDF
    const content = document.querySelector("#content");

    //configuração do conteúdo final do PDF
    const options = {
        margin:[20,20,20,20],
        filename: "arquivo.pdf",
        html2canvas: {scale: 3},    
        jsPDF:{format: "a4", orientation: "portrait"},
    }
    
    //gerar e baixar o pdf
    html2pdf().set(options).from(content).save();
});