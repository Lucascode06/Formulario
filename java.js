document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Validação dos campos
    const fullName = document.getElementById('fullName').value;
    const dob = document.getElementById('dob').value;
    const age = document.getElementById('age').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;

    if (!fullName || !dob || !age || !phone || !email) {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return;
    }

    // Mensagem de sucesso
    document.getElementById('message').innerText = 'Cadastro realizado com sucesso!';
    document.getElementById('registrationForm').reset(); // Limpa o formulário
});
s