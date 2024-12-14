<script lang="ts">
    export let actionData: { success?: boolean; error?: string; equipo?: { id: number; nombre: string } };
  
    let id = '';
    let nombre = '';
    let organizacion = '';
  </script>
  
  <div class="flex justify-center items-center h-screen bg-gray-900">
    <form method="post" class="bg-gray-800 p-8 rounded-lg shadow-md">
      <h1 class="text-2xl font-bold text-white mb-6 text-center">Actualización de Equipo</h1>
  
      <div class="mb-4">
        <label for="equipoId" class="block text-sm font-medium text-white">ID del equipo</label>
        <input
          id="equipoId"
          name="equipoId"
          type="text"
          bind:value={id}
          class="input input-bordered block w-full pr-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
          placeholder="Id del equipo"
          required
        />
      </div>
      <div class="mb-4">
        <label for="nombre" class="block text-sm font-medium text-white">Nombre del equipo</label>
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
        <label for="organizacion" class="block text-sm font-medium text-white">Organización</label>
        <input
          id="organizacion"
          name="organizacion"
          type="text"
          bind:value={organizacion}
          class="input input-bordered block w-full pr-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
          placeholder="Organización"
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
        <p class="mt-4 text-center text-green-500">Equipo actualizado exitosamente: {actionData.equipo?.nombre}</p>
      {:else if actionData?.error}
        <p class="mt-4 text-center text-red-500">{actionData.error}</p>
      {/if}
    </form>
  </div>
  