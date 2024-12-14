<script lang="ts">
	import { CaseUpper } from "lucide-svelte";

    export let actionData: { success?: boolean; error?: string; jugador?: { id: number; nombre: string, dorsal: number, posicion: string } };
  
    let nombre = '';
    let equipo = '';
    let dorsal = '';
    let posicion = '';
  </script>
  
  <div class="flex justify-center items-center h-screen bg-gray-900">
    <form method="post" class="bg-gray-800 p-8 rounded-lg shadow-md">
      <h1 class="text-2xl font-bold text-white mb-6 text-center">Creación de Jugador</h1>
  
      <div class="mb-4">
        <label for="nombre" class="block text-sm font-medium text-white">Nombre del jugador</label>
        <input
          id="nombre"
          name="nombre"
          type="text"
          bind:value={nombre}
          class="input input-bordered block w-full pr-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
          placeholder="Nombre"
          required
        />
      </div>
  
      <div class="mb-6">
        <label for="equipo" class="block text-sm font-medium text-white">ID del Equipo</label>
        <input
          id="equipo"
          name="equipo"
          type="number"
          bind:value={equipo}
          class="input input-bordered block w-full pr-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
          placeholder="Equipo ID"
          required
        />
      </div>

      <div class="mb-6">
        <label for="dorsal" class="block text-sm font-medium text-white">Dorsal</label>
        <input
          id="dorsal"
          name="dorsal"
          type="number"
          bind:value={dorsal}
          class="input input-bordered block w-full pr-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
          placeholder="Dorsal"
          required
        />
      </div>

      <div class="mb-6">
        <label for="posicion" class="block text-sm font-medium text-white">Posicion</label>
        <input
          id="posicion"
          name="posicion"
          type="text"
          bind:value={posicion}
          class="input input-bordered block w-full pr-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
          placeholder="Posicion"
          required
        />
      </div>
  
      <button
        type="submit"
        class="btn btn-primary w-full py-2 px-4 rounded-md text-white font-medium"
      >
        Siguiente
      </button>
  
      <!-- Mostrar mensajes de éxito o error -->
      {#if actionData?.success}
        <p class="mt-4 text-center text-green-500">Jugador creado exitosamente: {actionData.jugador?.nombre}</p>
      {:else if actionData?.error}
        <p class="mt-4 text-center text-red-500">{actionData.error}</p>
      {/if}
    </form>
  </div>
  