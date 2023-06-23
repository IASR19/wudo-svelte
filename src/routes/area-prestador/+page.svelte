<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Ambiente do Prestador</title>
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

    .button-container {
      margin-bottom: 30px;
    }

    .button {
      padding: 20px 40px;
      font-size: 32px;
      font-weight: bold;
      text-decoration: none;
      border-radius: 8px;
      color: #ffffff;
      background-color: rgba(255, 255, 255, 0.1);
      border: none;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }

    .button:hover {
      background-color: rgba(255, 255, 255, 0.2);
    }
  </style>
</head>
<body>
  <div class="title">Ambiente do Prestador</div>

  <div class="button-container">
    <a href="/adicionar-servico" class="button">Cadastrar serviço</a>
  </div>

  <div class="button-container">
    <a href="/servicos-solicitados" class="button">Serviços solicitados</a>
  </div>

  <div class="button-container">
    <a href="/sobre-mim" class="button">Sobre mim</a>
  </div>
</body>
</html>
