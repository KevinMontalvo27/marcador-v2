import type { PageLoad } from '../../$types';

export const load: PageLoad = async ({ fetch }) => {
    // Fetch para equipos
    const equiposResponse = await fetch('/api/equipos');
    if (!equiposResponse.ok) {
        throw new Error(`Error al cargar los datos de equipos: ${equiposResponse.statusText}`);
    }
    const equipos = await equiposResponse.json();

    // Retorna ambos conjuntos de datos
    return { equipos };
};
