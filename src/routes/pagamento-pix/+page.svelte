<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Pagamento Pix</title>
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

			.payment-details {
				margin-bottom: 20px;
			}

			.payment-code {
				font-size: 24px;
				font-weight: bold;
				background-color: #f4f4f4;
				padding: 10px;
				margin-bottom: 10px;
				border-radius: 4px;
				text-align: center;
			}

			.copy-button {
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
				transition: background-color 0.3s ease;
			}

			.copy-button:hover {
				background-color: #0056b3;
			}

			.finish-button {
				padding: 10px 20px;
				font-size: 16px;
				font-weight: bold;
				text-align: center;
				text-decoration: none;
				border-radius: 4px;
				color: #fff;
				background-color: #28a745;
				border: none;
				cursor: pointer;
				transition: background-color 0.3s ease;
				display: none;
			}

			.finish-button:hover {
				background-color: #218838;
			}
		</style>
	</head>
	<body>
		<h1>Pagamento Pix</h1>

		<div class="payment-details">
			<h2>Informações de Pagamento</h2>
			<p>Valor: R$100,00</p>
			<div class="payment-code">
				<span id="paymentCode">GERAR CÓDIGO</span>
			</div>
			<button id="copyButton" class="copy-button">Copiar Código Pix</button>
		</div>

		<a id="finishButton" class="finish-button" href="/servico-agendado">Finalizar Compra</a>

		<script>
			// Função para gerar código Pix aleatório (exemplo)
			function generatePixCode() {
				const codeLength = 10;
				const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
				let code = '';

				for (let i = 0; i < codeLength; i++) {
					const randomIndex = Math.floor(Math.random() * characters.length);
					code += characters[randomIndex];
				}

				return code;
			}

			// Gerar código Pix aleatório e exibir na página
			const paymentCodeElement = document.getElementById('paymentCode');
			paymentCodeElement.textContent = generatePixCode();

			// Copiar código Pix para a área de transferência
			const copyButton = document.getElementById('copyButton');
			copyButton.addEventListener('click', function () {
				const code = paymentCodeElement.textContent;
				navigator.clipboard
					.writeText(code)
					.then(() => {
						alert('Código Pix copiado para a área de transferência!');
						document.getElementById('finishButton').style.display = 'block';
					})
					.catch(() => {
						alert('Não foi possível copiar o código Pix.');
					});
			});
		</script>
	</body>
</html>
