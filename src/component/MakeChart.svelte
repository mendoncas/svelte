<script>
  import { onMount } from "svelte";
  export let data;
  console.log(data);
  function createChart() {
    var ctx = document.getElementById("transactions").getContext("2d");

    const getData = () => {

      let [dates, values, amounts] = [[], [], []];
      /*.data;*/
      axios.get("http://localhost:3000/deal/all").then((res) => {
        for (const transaction of res.data) {
          dates.push(transaction.date);
          values.push(transaction.value);
          amounts.push(transaction.amount);
        }

        let [back1, back2] = [[], []];
        for (let i = 0; i < dates.length; i++) {
          back1.push("rgba(196, 69, 54,0.9)");
          back2.push("rgba(25, 114, 120,0.9)");
        }

        setChartData({
          labels: dates,
          datasets: [
            {
              label: "gasto",
              data: values,
              // opçoes de aparencia aqui
              // rgb(25, 114, 120) azul
              // rgb(237, 221, 212) beje
              // rgb(196, 69, 54) vermelho
              // rgb(119, 46, 37) vermelho escuro
              // rgb(40, 61, 59) azul escuro
              backgroundColor: back1,
            },
            {
              label: "quantidade de ração comprada",
              data: amounts,
              backgroundColor: back2,
            },
          ],
        });

        console.log(chartData);
      });
    };

    useEffect(() => {
      getData();
    }, []);

    onMount(createChart);
  }
</script>

<canvas id="transactions" width="20px" height="10px" />
