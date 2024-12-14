<script lang="ts">
	import { CaseUpper } from 'lucide-svelte';

	export let actionData: { success?: boolean; error?: string; jugador?: { id: number } };

	let jugadorId = '';
</script>

<div class="flex h-screen items-center justify-center bg-gray-900">
	<form method="post" class="rounded-lg bg-gray-800 p-8 shadow-md">
		<h1 class="mb-6 text-center text-2xl font-bold text-white">Eliminar Jugador</h1>

		<div class="mb-6">
			<label for="jugadorId" class="block text-sm font-medium text-white">ID del Jugador</label>
			<input
				id="jugadorId"
				name="jugadorId"
				type="number"
				bind:value={jugadorId}
				class="input input-bordered block w-full rounded-md border py-2 pr-3 focus:border-blue-500 focus:outline-none focus:ring"
				placeholder="Jugador ID"
				required
			/>
		</div>

		<button
			type="submit"
			class="btn btn-primary w-full rounded-md px-4 py-2 font-medium text-white"
		>
			Eliminar
		</button>

		<!-- Mostrar mensajes de éxito o error -->
		{#if actionData?.success}
			<p class="mt-4 text-center text-green-500">
				Jugador eliminado exitosamente: {actionData.jugador?.id}
			</p>
		{:else if actionData?.error}
			<p class="mt-4 text-center text-red-500">{actionData.error}</p>
		{/if}
	</form>
</div>
