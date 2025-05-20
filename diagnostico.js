function evaluarFormulario() {
    let respuestasCorrectas = 0;
    let totalPreguntas = 3;

    for (let i = 1; i <= totalPreguntas; i++) {
        let seleccion = document.querySelector(`input[name="q${i}"]:checked`);
        if (seleccion && seleccion.value === "correcto") {
            respuestasCorrectas++;
        }
    }

    let resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = `<p>Calificación: ${respuestasCorrectas}/${totalPreguntas}</p>`;

    generarGrafico(respuestasCorrectas, totalPreguntas);
}

function generarGrafico(correctas, total) {
    let ctx = document.getElementById('grafico').getContext('2d');

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ["Correctas", "Incorrectas"],
            datasets: [{
                label: "Resultados",
                data: [correctas, total - correctas],
                backgroundColor: ['#28a745', '#dc3545']
            }]
        }
    });
}

function generarPDF() {
    const { jsPDF } = window.jspdf;
    let doc = new jsPDF();

    doc.text("Diagnóstico de Programación Web", 10, 10);
    doc.text(document.getElementById("resultado").innerText, 10, 30);

    // Convertir el PDF a Blob para vista previa
    let pdfBlob = doc.output("blob");
    let pdfURL = URL.createObjectURL(pdfBlob);

    // Mostrar en iframe antes de descargar
    let contenedorPDF = document.getElementById("vistaPrevia");
    contenedorPDF.innerHTML = `<iframe src="${pdfURL}" width="100%" height="500px"></iframe>`;

    // Botón para descargar
    let btnDescargar = document.createElement("button");
    btnDescargar.innerText = "Descargar PDF";
    btnDescargar.onclick = () => {
        doc.save("diagnostico_resultado.pdf");
    };

    contenedorPDF.appendChild(btnDescargar);
}
