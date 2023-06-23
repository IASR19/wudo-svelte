<script>
  // Coloque qualquer lógica necessária aqui
</script>

<svelte:head>
  <title>Ambiente</title>
  <meta name="description" content="login" />
</svelte:head>

<style>
  /* Defina as cores conforme necessário */
  :root {
    --primary-color: #007bff;
    --secondary-color: #6c757d;
  }

  /* Estilize os botões */
  .btn {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    font-weight: 600;
    text-align: center;
    text-decoration: none;
    border-radius: 0.25rem;
    transition: transform 0.3s ease, background-color 0.3s ease;
  }

  .btn-primary {
    background-color: var(--primary-color);
    color: #fff;
  }

  .btn-secondary {
    background-color: var(--secondary-color);
    color: #fff;
  }

  /* Efeito de zoom ao passar o mouse */
  .btn:hover {
    transform: scale(1.1);
  }

  /* Efeito diferente ao ser clicado */
  .btn:active {
    background-color: #ccc;
    color: #000;
  }

  /* Centralize elementos */
  .center {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
  }
</style>

<section>
  <body>
    <div class="center">
      <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm space-y-6">
        <div>
          <a class="btn btn-primary w-full" href="/servicos">
            <span>Área do Contratante</span>
          </a>
        </div>
        <div>
          <a class="btn btn-secondary w-full" href="/area-prestador">
            <span>Área do Prestador</span>
          </a>
        </div>
      </div>
    </div>
  </body>
</section>
