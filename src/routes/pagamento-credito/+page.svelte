<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Página de Pagamento</title>
  <style>
    /* Estilos para a página de pagamento */
    .container {
      max-width: 500px;
      margin: 0 auto;
      padding: 20px;
    }

    .form-group {
      margin-bottom: 20px;
    }

    .form-group label {
      display: block;
      font-weight: bold;
    }

    .form-group input[type="text"],
    .form-group input[type="email"],
    .form-group input[type="number"] {
      width: 100%;
      padding: 8px;
      border: 1px solid #ccc;
      border-radius: 4px;
    }

    .form-group input[type="submit"] {
      padding: 10px 20px;
      background-color: #4CAF50;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
  </style>
  <script>
    window.addEventListener('DOMContentLoaded', (event) => {
      // Obtém o formulário
      const form = document.querySelector('form');

      // Adiciona um ouvinte de evento para o envio do formulário
      form.addEventListener('submit', (event) => {
        event.preventDefault(); // Impede o envio padrão do formulário

        // Verifica se as informações de pagamento estão corretas
        const cardholderName = document.getElementById('cardholder-name').value;
        const cardNumber = document.getElementById('card-number').value;
        const expirationDate = document.getElementById('expiration-date').value;
        const cvv = document.getElementById('cvv').value;

        // Aqui, você pode adicionar lógica adicional para validar os campos de pagamento

        // Redireciona para a página "/servico-agendado"
        window.location.href = '/servico-agendado';
      });
    });
  </script>
</head>

<body>
  <div class="container">
    <h1>Página de Pagamento</h1>

    <form>
      <div class="form-group">
        <label for="cardholder-name">Nome do Titular do Cartão:</label>
        <input type="text" id="cardholder-name" name="cardholder-name" required>
      </div>

      <div class="form-group">
        <label for="card-number">Número do Cartão de Crédito:</label>
        <input type="text" id="card-number" name="card-number" required>
      </div>

      <div class="form-group">
        <label for="expiration-date">Data de Expiração:</label>
        <input type="text" id="expiration-date" name="expiration-date" required>
      </div>

      <div class="form-group">
        <label for="cvv">CVV:</label>
        <input type="number" id="cvv" name="cvv" required>
      </div>

      <div class="form-group">
        <label for="total-amount">Valor Total:</label>
        <input type="text" id="total-amount" name="total-amount" value="0.00" readonly>
      </div>

      <div class="form-group">
        <input type="submit" value="Pagar">
      </div>
    </form>
  </div>
</body>

</html>
