import { fail } from '@sveltejs/kit';
import { supabase } from '../../../../lib/supabaseClient';
import type { Actions } from './$types';

export const actions: Actions = {
	default: async ({ request }) => {
		try {
			const formData = await request.formData();
			const id = formData.get('Id') as string;
			const nombre = formData.get('nombre') as string;
			const equipo_id = formData.get('equipo') as string;
			const dorsal = formData.get('dorsal') as string;
			const posicion = formData.get('posicion') as string;

			const { data: jugador, error: jugadorError } = await supabase
				.from('Jugadores')
				.update({ nombre, equipo_id, dorsal, posicion })
				.eq('id', id);

			if (jugadorError) {
				return fail(500, { error: `Error al registrar el jugador: ${jugadorError.message}` });
			}

			return { jugador };
		} catch (err) {
			console.error('Error inesperado:', err);
			return fail(500, { error: 'Ocurrió un error inesperado al actualizar el jugador.' });
		}
	}
};
