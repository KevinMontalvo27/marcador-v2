import type { PageLoad } from '../../$types';

export const load: PageLoad = async ({ fetch }) => {
    // Fetch para jugadores
    const jugadoresResponse = await fetch('/api/jugadores');
    if (!jugadoresResponse.ok) {
        throw new Error(`Error al cargar los datos de los jugadores: ${jugadoresResponse.statusText}`);
    }
    const jugadores = await jugadoresResponse.json();

    return { jugadores };
};
