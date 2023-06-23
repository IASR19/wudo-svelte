<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Serviços</title>
  <style>
    /* Estilos CSS aqui */
  </style>
</head>

<body>
  <div class="navbar">
  </div>

  <section>
    <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <img class="mx-auto h-10 w-auto" src="logo.png" alt="Your Company" />
      </div>

      <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm space-y-6">
        <form class="space-y-6" action="#" method="POST">

          <div>
            <label for="title" class="label-text">Título do Anúncio</label>
            <div class="mt-2">
              <input name="title" type="text" placeholder="Título do Anúncio" class="input input-primary w-full" />
            </div>
          </div>

          <div>
            <label for="price" class="label-text">Preço</label>
            <div class="mt-2">
              <input name="price" type="text" placeholder="Preço" class="input input-primary w-full" />
            </div>
          </div>

          <div>
            <label for="availability" class="label-text">Horário Disponível</label>
            <div id="availability-container" class="mt-2">
              <input name="availability[]" type="datetime-local" placeholder="Horário Disponível" class="input input-primary w-full" />
            </div>
            <button type="button" id="addAvailabilityButton" class="btn btn-secondary mt-2">Adicionar Horário</button>
          </div>

          <div>
            <label for="category" class="label-text">Categoria</label>
            <div class="mt-2">
              <input name="category" type="text" placeholder="Categoria" class="input input-primary w-full" />
            </div>
          </div>

          <div>
            <button type="submit" class="btn btn-primary w-full">Cadastrar</button>
          </div>

        </form>
      </div>
    </div>
  </section>

  <script>
    document.addEventListener('DOMContentLoaded', function () {
      const addAvailabilityButton = document.getElementById('addAvailabilityButton');
      addAvailabilityButton.addEventListener('click', addAvailability);

      function addAvailability() {
        const availabilityContainer = document.getElementById('availability-container');
        const newInput = document.createElement('input');
        newInput.name = 'availability[]';
        newInput.type = 'datetime-local';
        newInput.placeholder = 'Horário Disponível';
        newInput.classList.add('input', 'input-primary', 'w-full');
        availabilityContainer.appendChild(newInput);
      }
    });
  </script>

</body>

</html>
