// +server.ts
import { json } from '@sveltejs/kit';
import { supabase } from '$lib/supabaseClient';

import type { RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async () => {
	const { data, error } = await supabase.from('Jugadores').select(`
        id,
        Equipos (nombre),
        nombre,
        dorsal,
        posicion
    `);

	if (error) {
		return json({ error: error.message }, { status: 500 });
	}

	return json(data || []);
};

export const DELETE: RequestHandler = async (id) => {
    if (!id) {
        return json({ error: 'Se requiere un ID de jugador.' }, { status: 400 });
    }

	const { data, error } = await supabase.from('Jugadores').delete().eq('id', id);

	if (error) {
		return json({ error: error.message }, { status: 500 });
	}

	return json(data || []);
};

export const PUT: RequestHandler = async ({ request }) => {
	const body = await request.json();

    const { id, nombre, equipo_id, posicion } = body;

    if (!id) {
        return json({ error: 'Se requiere un ID de jugador para actualizar.' }, { status: 400 });
    }

     // Construir un objeto con los datos a actualizar
     const updatedData: Record<string, unknown> = {};
     if (nombre) updatedData.nombre = nombre;
     if (equipo_id) updatedData.equipo_id = equipo_id;
     if (posicion) updatedData.posicion = posicion;
 
     // Si no hay datos para actualizar, devolver un error
     if (Object.keys(updatedData).length === 0) {
         return json({ error: 'No se proporcionaron datos para actualizar.' }, { status: 400 });
     }

	const { data, error } = await supabase.from('Jugadores').update(updatedData).eq('id', id);

	if (error) {
		return json({ error: error.message }, { status: 500 });
	}

	return json(data || []);
};
