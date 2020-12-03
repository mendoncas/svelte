<script>
  import MakeChart from "./component/MakeChart.svelte";
  import Swal from "sweetalert2";
  // import
  let chartState = false;
  let sideState = false;
  let data = 0;
  let pets = ["Thor", "Zeus", "Freya"];
  let petAtual = null;

  function chartHandler() {
    chartState = !chartState;
  }

  async function selPet() {
    const { value: pet } = await Swal.fire({
      title: "Select field validation",
      input: "select",
      inputOptions: pets,
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

  function sideHandler() {
    sideState = !sideState;
  }
</script>

<style>
  /* CSS HEX */
  /* --space-cadet: #2b2d42ff;
  --manatee: #8d99aeff;
  --alice-blue: #edf2f4ff;
  --imperial-red: #ef233cff;
  --amaranth-red: #d90429ff; */
  /* The sidebar menu */
  .sidenav {
    height: 33%; /* Full-height: remove this if you want "auto" height */
    width: 130px; /* Set the width of the sidebar */
    background-color: #2b2d42ff; /* Black */
    overflow-x: hidden; /* Disable horizontal scroll */
    padding-top: 20px;
    color: whitesmoke;
  }
  /* Style page content */
  .main {
    margin-left: 160px; /* Same as the width of the sidebar */
    padding: 0px 10px;
  }
  /* On smaller screens, where height is less than 450px, change the style of the sidebar (less padding and a smaller font size) */
  @media screen and (max-height: 450px) {
    .sidenav {
      padding-top: 15px;
    }
  }
  button {
    display: block;
    cursor: pointer;
    outline: none;
  }
  .menu-button {
    border-color: #860808;
    background-color: #2b2d42ff;
    width: 43%;
    height: 60px;
    border-radius: 30px;
    font-size: 1.2rem;
    font-weight: 600;
    color: azure;
    background-size: 100% 100%;
    box-shadow: 1 1 1 8px var(--light) inset;
    margin-bottom: 15px;
  }
  .side-button {
    max-height: 10%;
    background: none;
  }

  .pet-button {
    background: none;
    max-width: 10%;
    max-height: 10%;
    color: whitesmoke;
    border: none;
  }
  .add-pet {
    background: none;
    color: yellowgreen;
    font-weight: bolder;
    border-color: yellowgreen;
    font-size: 60%;
  }
  .rmv-pet {
    background: none;
    color: red;
    font-weight: bolder;
    border-color: red;
    font-size: 60%;
  }
  main {
    display: flex;
    padding: 1em;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    background-color: #8d99aeff;
  }
  main-menu {
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
  }

  main-chart {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 75%;
    height: 37%;
  }

  h1 {
    color: #2b2d42ff;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 300;
  }
  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>

<main>
  {#if sideState}
    <div
      class="sidenav"
      style="display:flex; flex-direction: column; justify-content: flext-start">
      <button class="pet-button" on:click={sideHandler}>X</button>
      <!-- {@html genSide(pets)} -->
      <div style="display: flex; justify-content: space-evenly">
        <button class="add-pet">adicionar</button>
        <button class="rmv-pet">remover</button>
      </div>
      <button class="pet-button" on:click={selPet}>Selecionar</button>
    </div>
  {:else}
    <button
      on:click={sideHandler}
      class="side-button">{petAtual == null ? '>Selecionar pet' : `>${pets[petAtual]}`}</button>
  {/if}

  {#if chartState}
    <main-chart>
      <button on:click={chartHandler} class="menu-button">voltar</button>
      <MakeChart {data} />
    </main-chart>
  {:else}
    <main-menu>
      <h1>Bem vindo ao Dogmeat!</h1>

      <button on:click={chartHandler} class="menu-button">clica aqui irmao</button>
      <button class="menu-button">cadastrar uma transação</button>
    </main-menu>
  {/if}
</main>
