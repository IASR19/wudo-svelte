<svelte:head>
  <title>Cadastro</title>
  <meta name="description" content="cadastro" />
</svelte:head>

<section>
  <body>
    <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <img class="mx-auto h-10 w-auto" src="logo.png" alt="Your Company" />
      </div>

      <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm space-y-6">
        <form class="space-y-6" action="#" method="POST">
          <div>
            <label for="email" class="label-text"> Email </label>
            <div class="mt-2">
              <input name="email" type="text" placeholder="email" class="input input-primary w-full" />
            </div>
          </div>

          <div>
            <div class="flex items-center justify-between">
              <label for="password" class="label-text"> Senha </label>
            </div>
            <div class="mt-2">
              <input
                name="password"
                type="password"
                placeholder="senha"
                class="input input-primary bg-base-100 w-full"
              />
            </div>
          </div>

          <div>
            <div class="flex items-center justify-between">
              <label for="passwordConfirm" class="label-text"> Confirmar senha </label>
            </div>
            <div class="mt-2">
              <input
                name="passwordConfirm" 
                type="password"
                placeholder="confirmar senha"
                class="input input-primary bg-base-100 w-full"
              />
            </div>
          </div>

          <div>
            <div class="flex items-center justify-between">
              <label for="birthdate" class="label-text"> Data de nascimento </label>
            </div>
            <div class="mt-2">
              <input name="birthdate" type="date" class="input input-primary bg-base-100 w-full" />
            </div>
          </div>

          <div>
            <div class="flex items-center justify-between">
              <label for="telephone" class="label-text"> Número de telefone </label>
            </div>
            <div class="mt-2">
              <!-- pattern="\([0-9]{2}\) [0-9]{5}-[0-9]{4}" -->
              <input
                name="telephone"
                type="tel"
                placeholder="(xx) xxxxx-xxxx"
                class="input input-primary bg-base-100 w-full"
              />
            </div>
          </div>

          <div>
            <div class="flex items-center justify-between">
              <label for="cpf" class="label-text"> CPF </label>
            </div>
            <div class="mt-2">
              <!-- pattern="[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}" -->
              <input
                name="cpf"
                type="text"
                placeholder="xxx.xxx.xxx-xx"
                class="input input-primary bg-base-100 w-full"
              />
            </div>
          </div>

          <!-- <div>
            <div class="flex items-center justify-between">
              <label for="avatar" class="label-text"> Foto de perfil </label>
            </div>
            <div class="mt-2">
              <input
                name="avatar"
                type="file"
                accept="image/png, image/jpeg"
                class="file-input file-input-primary input-primary bg-base-100 w-full"
              />
            </div>
          </div> -->

          <div>
            <button type="submit" class="btn btn-primary w-full"> Cadastrar </button>
          </div>
        </form>
      </div>
    </div>
    <body /></body
  >
</section>
