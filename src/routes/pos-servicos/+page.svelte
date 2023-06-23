<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Contratação</title>
  <meta name="description" content="pos-servicos" />
  <style>
    .toggle-info:checked + .toggle-mark {
      background-color: #1a202c;
    }
  </style>
</head>
<body>
  <div class="navbar bg-primary">
    <div class="flex-1">
      <div class="w-10 ml-5 rounded-full">
        <img src="logo.png" alt="logo" />
      </div>
    </div>
    <div class="flex-none gap-2">
      <div class="form-control">
        <input type="text" placeholder="Procurar" class="input input-bordered" />
      </div>
      <div class="dropdown dropdown-end">
        <div class="btn btn-ghost btn-circle avatar">
          <div class="w-10 rounded-full">
            <img src="logo_512.png" alt="avatar" />
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="justify-center px-6 py-10 lg:px-8 space-y-6">
    <h1 class="text-xl font-bold">Serviços disponíveis:</h1>
  </div>

  <div class="flex min-h-full flex-col justify-center px-6 lg:px-8 space-y-6">
    <div class="card card-side bg-base-100 shadow-xl">
      <figure class="object-contain h-48 w-48"><img src="logo_512.png" alt="logo" /></figure>
      <div class="card-body">
        <input type="checkbox" class="toggle" />
        <h2 class="card-title">Corte</h2>
        <p>R$10,00</p>
        <p>Descrição do serviço</p>
        <div>
          <label for="corte-agendamento">Agendar:</label>
          <input type="datetime-local" id="corte-agendamento" name="corte-agendamento">
        </div>
      </div>
    </div>

    <div class="card card-side bg-base-100 shadow-xl">
      <figure class="object-contain h-48 w-48"><img src="logo_512.png" alt="logo" /></figure>
      <div class="card-body">
        <input type="checkbox" class="toggle" />
        <h2 class="card-title">Barba</h2>
        <p>R$20,00</p>
        <p>Descrição do serviço</p>
        <div>
          <label for="barba-agendamento">Agendar:</label>
          <input type="datetime-local" id="barba-agendamento" name="barba-agendamento">
        </div>
      </div>
    </div>

    <div class="card card-side bg-base-100 shadow-xl">
      <figure class="object-contain h-48 w-48"><img src="logo_512.png" alt="logo" /></figure>
      <div class="card-body">
        <input type="checkbox" class="toggle" />
        <h2 class="card-title">Limpeza de Pele</h2>
        <p>R$40,00</p>
        <p>Descrição do serviço</p>
        <div>
          <label for="limpeza-agendamento">Agendar:</label>
          <input type="datetime-local" id="limpeza-agendamento" name="limpeza-agendamento">
        </div>
      </div>
    </div>

    <div class="flex justify-center">
      <div id="total-container" class="text-xl font-bold mt-4"></div>
    </div>

    <div class="flex justify-center">
      <button class="btn btn-primary">Ir para pagamento</button>
    </div>
  </div>

  <script>
    const toggles = document.querySelectorAll('.toggle');
    const totalContainer = document.getElementById('total-container');

    // Atualizar o total quando um serviço for alterado
    toggles.forEach(toggle => {
      toggle.addEventListener('change', () => {
        const selectedServices = Array.from(toggles)
          .filter(toggle => toggle.checked)
          .map(toggle => toggle.parentElement.querySelector('p').textContent);

        const total = selectedServices.reduce((sum, service) => {
          const price = parseFloat(service.replace('R$', '').replace(',', '.'));
          return sum + price;
        }, 0);

        totalContainer.textContent = `Total: R$ ${total.toFixed(2)}`;
      });
    });

    // Desmarcar todos os serviços por padrão
    toggles.forEach(toggle => {
      toggle.checked = false;
    });

    const goToPaymentButton = document.querySelector('.btn-primary');

    goToPaymentButton.addEventListener('click', () => {
      // Obter os horários agendados
      const corteAgendamento = document.getElementById('corte-agendamento').value;
      const barbaAgendamento = document.getElementById('barba-agendamento').value;
      const limpezaAgendamento = document.getElementById('limpeza-agendamento').value;

      // Redirecionar para a página de confirmação com os dados do agendamento
      const url = `/confirmacao?corte=${corteAgendamento}&barba=${barbaAgendamento}&limpeza=${limpezaAgendamento}`;
      window.location.href = url;
    });
  </script>
</body>
</html>
