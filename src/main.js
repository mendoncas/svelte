import App from './App.svelte';
import Chart from 'chart.js'
const app = new App({
	target: document.body,
	props: {
		name: 'world'
	}
});

export default app;