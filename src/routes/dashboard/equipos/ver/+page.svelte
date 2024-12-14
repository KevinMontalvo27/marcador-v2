<script lang="ts">
	import type { Equipos } from '../../../../interface/endpoints';

	export let data: {
		equipos: Equipos[];
	};
</script>

<h2 class="my-2 text-center text-3xl">Listado de equipos</h2>
<div class="divider"></div>

<div class="mx-4">
	{#if data.equipos.length === 0}
		<p>No hay partidos disponibles.</p>
	{:else}
		<div class="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 lg:grid-cols-3">
			{#each data.equipos as equipo}
				<!-- {console.log(partido)} -->
				<a
					href={`/dashboard/equipos/${equipo.id}`}
					class="card bg-neutral text-neutral-content transition-all duration-300 hover:bg-primary hover:text-primary-content hover:contrast-125"
				>
					<div class="card-body items-center text-center">
						<p class="card-title text-xl font-bold">
							{equipo.nombre}
						</p>
						<p class="card-title text-xl font-bold">
							{equipo.organizacion}
						</p>
					</div>
				</a>
			{/each}
		</div>
	{/if}
</div>