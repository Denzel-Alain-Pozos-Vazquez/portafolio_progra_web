function pagar() {
    var horas = document.getElementById('horas').value;
    var tipoAuto = document.getElementById('auto').value;
    var tarifa;

    switch (tipoAuto) {
        case 'achico':
            tarifa = 20;
            break;
        case 'camioneta':
            tarifa = 30;
            break;
        case 'camion':
            tarifa = 40;
            break;
        default:
            tarifa = 0;
    }

    var total = horas * tarifa;
    document.getElementById('pagar').innerText = 'Total a pagar: $' + total;
}
