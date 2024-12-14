import { fail } from '@sveltejs/kit';
import { supabase } from '../../../../lib/supabaseClient';
import type { Actions } from './$types';

export const actions: Actions = {
	default: async ({ request }) => {
		try {
			const formData = await request.formData();
			const nombre = formData.get('nombre') as string;
			const equipo_id = formData.get('equipo') as string;
			const dorsal = formData.get('dorsal') as string;
			const posicion = formData.get('posicion') as string;

			// Validación de datos
			if (!nombre || !equipo_id || !dorsal || !posicion) {
				return fail(400, { error: 'Todos los datos son requeridos.' });
			}

			// Inserta el jugador en la tabla "Jugadores"
			const { data: jugador, error: jugadorError } = await supabase
				.from('Jugadores')
				.insert([{ equipo_id, nombre, dorsal, posicion }])
				.select('id, nombre')
				.single();

			if (jugadorError) {
				return fail(500, { error: `Error al registrar el jugador: ${jugadorError.message}` });
			}

			// Devuelve los datos del jugador creado
			return { success: true, jugador };
		} catch (err) {
			console.error('Error inesperado:', err);
			return fail(500, { error: 'Ocurrió un error inesperado al registrar el jugador.' });
		}
	}
};
