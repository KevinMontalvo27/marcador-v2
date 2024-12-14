<script lang="ts">
	import type { Jugadores } from '../../../../interface/endpoints';

	export let data: {
		jugadores: Jugadores[];
	};
</script>

<h2 class="my-2 text-center text-3xl">Listado de jugadores</h2>
<div class="divider"></div>

<div class="mx-4">
	{#if data.jugadores.length === 0}
		<p>No hay jugadores disponibles.</p>
	{:else}
		<div class="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 lg:grid-cols-3">
			{#each data.jugadores as jugador}
				<!-- {console.log(jugador)} -->
				<a
					href={`/dashboard/jugadores/${jugador.id}`}
					class="card bg-neutral text-neutral-content transition-all duration-300 hover:bg-primary hover:text-primary-content hover:contrast-125"
				>
					<div class="card-body items-center text-center">
						<p class="card-title text-xl font-bold">
							{jugador.nombre}
						</p>
						<p class="card-title text-xl font-bold">
							{jugador.equipo}
						</p>
						<p class="card-title text-xl font-bold">
							{jugador.dorsal}
						</p>
						<p class="card-title text-xl font-bold">
							{jugador.posicion}
						</p>
					</div>
				</a>
			{/each}
		</div>
	{/if}
</div>
