<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Serviços Solicitados</title>
		<meta name="description" content="pos-servicos" />
		<style>
			body {
				font-family: Arial, sans-serif;
				margin: 0;
				padding: 0;
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				min-height: 100vh;
				background-color: #1a202c;
				color: #ffffff;
				text-align: center;
			}

			.title {
				font-size: 48px;
				font-weight: bold;
				margin-bottom: 50px;
				text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
			}

			.card-container {
				display: flex;
				flex-direction: column;
				align-items: center;
				margin-bottom: 20px;
			}

			.card {
				width: 400px;
				background-color: #374151;
				border-radius: 8px;
				padding: 20px;
				margin-bottom: 20px;
				position: relative;
				transition: transform 0.3s ease, opacity 0.3s ease;
			}

			.card img {
				width: 48px;
				height: 48px;
				object-fit: contain;
			}

			.card-body {
				margin-top: 10px;
			}

			.card-title {
				font-size: 24px;
				font-weight: bold;
				margin-bottom: 10px;
				color: #ffffff;
			}

			.card-description {
				font-size: 16px;
				color: #ffffff;
				margin-bottom: 10px;
			}

			.card-requester {
				font-size: 16px;
				color: #ffffff;
				margin-bottom: 10px;
			}

			.agendamento-label {
				font-size: 16px;
				color: #ffffff;
				margin-bottom: 10px;
				text-align: left;
			}

			.agendamento-value {
				font-size: 16px;
				color: #ffffff;
				margin-bottom: 10px;
				font-weight: bold;
			}

			.card-actions {
				display: flex;
				justify-content: space-between;
				margin-top: 20px;
			}

			.btn-accept,
			.btn-reject {
				padding: 10px 20px;
				font-size: 16px;
				font-weight: bold;
				text-decoration: none;
				border-radius: 4px;
				color: #ffffff;
				border: none;
				cursor: pointer;
				transition: background-color 0.3s ease;
			}

			.btn-accept:hover {
				background-color: #10b981;
			}

			.btn-reject:hover {
				background-color: #ef4444;
			}

			.card.removing {
				transform: translateX(-100%);
				opacity: 0;
			}

			.btn-back {
				padding: 10px 20px;
				font-size: 16px;
				font-weight: bold;
				text-decoration: none;
				border-radius: 4px;
				color: #ffffff;
				background-color: #3b82f6;
				border: none;
				cursor: pointer;
				transition: background-color 0.3s ease;
				margin-top: 20px;
			}

			.btn-back:hover {
				background-color: #2563eb;
			}
		</style>
	</head>
	<body>
		<div class="title">Serviços Solicitados</div>

		<div class="card-container">
			<div class="card">
				<img src="logo_512.png" alt="logo" />
				<div class="card-body">
					<h2 class="card-title">Corte</h2>
					<p class="card-description">R$10,00</p>
					<p class="card-requester">Solicitante: João</p>
					<label class="agendamento-label">Horário Solicitado:</label>
					<p class="agendamento-value">10:00 AM</p>
				</div>
				<div class="card-actions">
					<button class="btn-accept">Aceitar</button>
					<button class="btn-reject">Recusar</button>
				</div>
			</div>

			<div class="card">
				<img src="logo_512.png" alt="logo" />
				<div class="card-body">
					<h2 class="card-title">Barba</h2>
					<p class="card-description">R$20,00</p>
					<p class="card-requester">Solicitante: Maria</p>
					<label class="agendamento-label">Horário Solicitado:</label>
					<p class="agendamento-value">11:30 AM</p>
				</div>
				<div class="card-actions">
					<button class="btn-accept">Aceitar</button>
					<button class="btn-reject">Recusar</button>
				</div>
			</div>

			<div class="card">
				<img src="logo_512.png" alt="logo" />
				<div class="card-body">
					<h2 class="card-title">Limpeza de Pele</h2>
					<p class="card-description">R$40,00</p>
					<p class="card-requester">Solicitante: Pedro</p>
					<label class="agendamento-label">Horário Solicitado:</label>
					<p class="agendamento-value">2:00 PM</p>
				</div>
				<div class="card-actions">
					<button class="btn-accept">Aceitar</button>
					<button class="btn-reject">Recusar</button>
				</div>
			</div>
		</div>

		<script>
			const cards = document.querySelectorAll('.card');
			const btnRejects = document.querySelectorAll('.btn-reject');
			const btnAccepts = document.querySelectorAll('.btn-accept');

			btnRejects.forEach((btn, index) => {
				btn.addEventListener('click', () => {
					const card = cards[index];
					card.classList.add('removing');
					setTimeout(() => {
						card.remove();
					}, 300);
				});
			});

			btnAccepts.forEach((btn, index) => {
				btn.addEventListener('click', () => {
					const card = cards[index];
					card.classList.add('removing');
					setTimeout(() => {
						card.remove();
					}, 300);
				});
			});
		</script>

		<a href="/area-prestador" class="btn-back">Voltar</a>
	</body>
</html>
