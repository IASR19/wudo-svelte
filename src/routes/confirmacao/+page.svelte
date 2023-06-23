<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Pagamento</title>
  <style>
    /* Estilos CSS */

    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 20px;
    }

    h1 {
      margin-bottom: 20px;
    }

    .payment-method {
      display: flex;
      align-items: center;
      margin-bottom: 10px;
    }

    .payment-method label {
      margin-left: 10px;
    }

    .button {
      display: inline-block;
      padding: 10px 20px;
      font-size: 16px;
      font-weight: bold;
      text-align: center;
      text-decoration: none;
      border-radius: 4px;
      color: #fff;
      background-color: #007bff;
      border: none;
      cursor: pointer;
    }

    .button:hover {
      background-color: #0056b3;
    }
  </style>
</head>
<body>
  <h1>Pagamento</h1>

  <div class="payment-method">
    <input type="radio" name="paymentMethod" id="creditCard" value="creditCard" checked>
    <label for="creditCard">Cartão de Crédito</label>
  </div>

  <div class="payment-method">
    <input type="radio" name="paymentMethod" id="pix" value="pix">
    <label for="pix">Pix</label>
  </div>

  <button id="realizarPagamentoButton" class="button">Realizar Pagamento</button>

  <script>
    document.getElementById("realizarPagamentoButton").addEventListener("click", function() {
      const selectedPaymentMethod = document.querySelector('input[name="paymentMethod"]:checked').value;

      if (selectedPaymentMethod === "creditCard") {
        window.location.href = "/pagamento-credito";
      } else if (selectedPaymentMethod === "pix") {
        window.location.href = "/pagamento-pix";
      }
    });
  </script>
</body>
</html>
