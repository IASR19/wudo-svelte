<script>
  /** @type {import('./$types').PageData} */
  export let data;
  const { services } = data

  $: console.log(services)
</script>

<section>
  <body>
    <div class="navbar bg-primary">
      <!-- ... conteúdo do navbar ... -->
    </div>

    <div class="justify-center px-6 py-10 lg:px-8 space-y-6">
      <h1 class="text-xl font-bold">Serviços disponíveis:</h1>
    </div>

    <div class="flex min-h-full flex-col justify-center px-6 lg:px-8 space-y-6">
      {#each services.items as service}
        <a href="/{service.id}" class="card card-side bg-base-100 shadow-xl">
          <figure class="object-contain h-48 w-48"><img src="logo_512.png" alt="logo" /></figure>
          <div class="card-body">
            <h2 class="card-title">{service.name}</h2>
            <p>{service.description}</p>
            <p>{service.start} - {service.end}</p>
          </div>
        </a>
      {/each}

    </div>

  <body>
</section>