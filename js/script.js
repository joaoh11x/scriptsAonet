function formatarTelefone(input) {
    let phoneNumber = input.value.replace(/\D/g, '');
    phoneNumber = phoneNumber.replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3');
    input.value = phoneNumber;
}

function formatarDocumento(input) {
    let documento = input.value.replace(/\D/g, '');
    const tipoDocumento = document.getElementById('tipoDocumento').value;

    if (tipoDocumento === 'cpf') {
        documento = documento.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/, '$1.$2.$3-$4');
    } else if (tipoDocumento === 'cnpj') {
        documento = documento.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/, '$1.$2.$3/$4-$5');
    }

    input.value = documento;
}

function alterarMascaraDocumento() {
    const cpfCnpjInput = document.getElementById('cpfCnpj');
    cpfCnpjInput.value = '';
    formatarDocumento(cpfCnpjInput);
}

function copiarParaAreaTransferencia() {
    const tipoProblema = document.getElementById('tipoProblema').value;
    const nomeCliente = document.getElementById('nomeCliente').value;
    const cpfCnpj = document.getElementById('cpfCnpj').value;
    const telefoneCliente = document.getElementById('telefoneCliente').value;
    const problemaOcorrido = document.getElementById('problemaOcorrido').value;
    const atendimentoRealizado = document.getElementById('atendimentoRealizado').value;
    const ordemServico = document.getElementById('ordemServico').checked ? 'Ordem de Serviço Aberta' : 'Resolvido Internamente';

    const informacoes = `Tipo de Problema: ${tipoProblema}\nNome do Cliente: ${nomeCliente}\nCPF/CNPJ: ${cpfCnpj}\nTelefone para Contato: ${telefoneCliente}\nProblema Ocorrido: ${problemaOcorrido}\nAtendimento Realizado: ${atendimentoRealizado}\n${ordemServico}`;

    navigator.clipboard.writeText(informacoes).then(function () {
        alert('Informações copiadas para a área de transferência!');
        limparCampos();
    }).catch(function (err) {
        console.error('Erro ao copiar: ', err);
        limparCampos();
    });

    
}

function limparCampos() {
    const campos = document.querySelectorAll('input, select, textarea');
    campos.forEach(function (campo) {
      campo.value = '';
    });
}