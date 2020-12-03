import App from './App.svelte';
import Chart from 'chart.js'

const app = new App({
	target: document.body,
	props: {
		name: 'world'
	}
});



// TODO:
// AJEITAR EXIBIÇÃO DOS COMPONENTES NA HOME Screen
// AJUSTAR TAMANHO DO GRÁFICO
// REFAZER CONEXÃO COM A API
// DEIXAR A SIDEBAR LEGAL
export default app;