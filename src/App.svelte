<script>
  import MakeChart from "./component/MakeChart.svelte";
  let state = false;
  let data = 0;
  function clickHandler() {
    console.log(state);
    state = !state;
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

    background-color: #111; /* Black */
    overflow-x: hidden; /* Disable horizontal scroll */
    padding-top: 20px;
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
    .sidenav a {
      font-size: 18px;
    }
  }
  button {
    display: block;
    cursor: pointer;
    outline: none;
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

  button:hover {
    background-image: linear-gradient(
      145deg,
      transparent 10%,
      var(--dark) 10% 20%,
      transparent 20% 30%,
      var(--dark) 30% 40%,
      transparent 40% 50%,
      var(--dark) 50% 60%,
      transparent 60% 70%,
      var(--dark) 70% 80%,
      transparent 80% 90%,
      var(--dark) 90% 100%
    );
    animation: background 3s linear infinite;
  }

  main {
    display: flex;
	flex-direction: column;
    text-align: center;
    align-items: center;
    padding: 1em;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    background-color: #8d99aeff;
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
  {#if state}
    <button on:click={clickHandler}>voltar</button>
    <MakeChart {data} />
  {:else}
    <div class="sidenav">
      <p>Thor</p>
      <p>Zeus</p>
      <p>Freya</p>
    </div>

    <h1>Bem vindo ao Dogmeat!</h1>

    <button on:click={clickHandler}>clica aqui irmao</button>
    <button>cadastrar uma transação</button>
  {/if}
</main>
