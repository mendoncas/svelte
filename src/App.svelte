<script>
  import MakeChart from "./component/MakeChart.svelte";
  import Swal from "sweetalert2";
  import {
    getPets,
    getNames,
    addPet,
    delPet,
  } from "./component/ManagePets.svelte";

  function chartHandler() {
    chartState = !chartState;
  }

  async function syncronize() {
    pets = await getPets();
    petNames = await getNames();
  }

  async function selPet() {
    const { value: pet } = await Swal.fire({
      title: "Select field validation",
      input: "select",
      inputOptions: petNames,
      inputPlaceholder: "Selecione seu pet",
      showCancelButton: true,
      inputValidator: (value) => {
        return new Promise((resolve) => {
          if (value !== null) {
            petAtual = value;
            sideHandler();
            resolve();
          } else {
            resolve("você deve selecionar um pet!");
          }
        });
      },
    });
  }

  async function crtPet() {
    const { value: petName } = await Swal.fire({
      title: "Digite o nome do seu novo pet!",
      input: "text",
      inputLabel: "nome",
      // inputValue: inputValue,
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "você deve escrever o nome do seu pet!";
        }
      },
    });

    if (petName) {
      addPet(petName).then(
        syncronize().then(
          Swal.fire(`${petName}`, `adicionado à sua lista de pets!`, "success")
        )
      );
    }
  }

  async function rmvPet() {
    syncronize();
    const { value: petName } = await Swal.fire({
      title: "Digite o nome do pet que deseja remover",
      input: "text",
      inputLabel: "nome",
      // inputValue: inputValue,
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "você deve escrever o nome do seu pet!";
        }
      },
    });

    if (petName) {
      try {
        let petId = pets[petNames.indexOf(petName)].id;

        delPet(petId).then(
          syncronize().then(
            Swal.fire(`${petName}`, `removido da sua lista de pets!`, "success")
          )
        );
      } catch {
        Swal.fire(petName, "não encontramos esse pet!", "error");
      }
    }
  }

  function sideHandler() {
    sideState = !sideState;
  }

  async function sendDeal() {
    const { value: formValues } = await Swal.fire({
      title: "Multiple inputs",
      html:
        "<p>Valor da transação</p>" +
        '<input id="swal-input1" class="swal2-input">' +
        "<p>Quantidade de ração comprada, em gramas</p>" +
        '<input id="swal-input2" class="swal2-input">',
      // '<input id="swal-input3" class="swal2-input">',

      focusConfirm: false,
      preConfirm: () => {
        return [
          document.getElementById("swal-input1").value,
          document.getElementById("swal-input2").value,
          // document.getElementById("swal-input3").value,
        ];
      },
    });

    if (formValues) {
      let form = JSON.stringify(formValues);
      console.log(form)
      console.log(pets);
      console.log(petAtual);
      let d = new Date();
      let deal = {
        pet_id: pets[petAtual].id,
        value: parseFloat(form[0]),
        amount: parseFloat(form[1]),
        date: d.toISOString(),
      };

      console.log(deal);
    }
  }

  let chartState = false;
  let sideState = false;
  let data = 0;
  let pets = null;
  let petAtual = null;
  let petNames = null;

  syncronize();
</script>

<main>
  {#if sideState}
    <div
      class="sidenav"
      style="display:flex; flex-direction: column; justify-content: flext-start">
      <button class="pet-button" on:click={sideHandler}>X</button>
      <!-- {@html genSide(pets)} -->
      <div style="display: flex; justify-content: space-evenly">
        <button class="add-pet" on:click={crtPet}>adicionar</button>
        <button class="rmv-pet" on:click={rmvPet}>remover</button>
      </div>
      <button class="pet-button" on:click={selPet}>Selecionar</button>
    </div>
  {:else}
    <button
      on:click={sideHandler}
      class="side-button">{petAtual == null || petAtual == undefined ? '>Selecionar pet' : `>${petNames[petAtual]}`}</button>
  {/if}

  {#if chartState}
    <main-chart>
      <button on:click={chartHandler} class="menu-button">voltar</button>
      <MakeChart {data} />
    </main-chart>
  {:else}
    <main-menu>
      <h1>Bem vindo ao Dogmeat!</h1>

      <button on:click={chartHandler} class="menu-button">Gráfico</button>
      <button class="menu-button" on:click={sendDeal}>cadastrar uma transação</button>
    </main-menu>
  {/if}
</main>
