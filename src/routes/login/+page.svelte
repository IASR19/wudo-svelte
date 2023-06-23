<script>
</script>

<svelte:head>
  <title>Login</title>
  <meta name="description" content="login" />
</svelte:head>

<section>
  <body>
    <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <img class="mx-auto h-10 w-auto" src="logo.png" alt="Your Company" />
      </div>
      <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm space-y-6">
        <form class="space-y-6" method="POST">
          <div>
            <label for="email" class="label-text">Email</label>
            <div class="mt-2">
              <input
                name="email"
                type="email"
                placeholder="email"
                class="input input-primary w-full"
              />
            </div>
          </div>
          <div>
            <div class="flex items-center justify-between">
              <label for="password" class="label-text">Senha</label>
            </div>
            <div class="mt-2">
              <input
                name="password"
                type="password"
                placeholder="senha"
                class="input input-primary w-full"
              />
            </div>
          </div>
          <div>
            <button class="btn btn-primary w-full">Logar</button>
          </div>
        </form>
        <div>
          <a class="btn btn-secondary w-full" href="/cadastro">
            Novo por aqui?&nbsp;<spam class="font-bold">Cadastre-se</spam>
          </a>
        </div>
      </div>
    </div>
  </body>
</section>
