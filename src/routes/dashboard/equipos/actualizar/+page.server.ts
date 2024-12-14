import { fail } from '@sveltejs/kit';
import { supabase } from '../../../../lib/supabaseClient';
import type { Actions } from './$types';

export const actions: Actions = {
	default: async ({ request }) => {
		try {
			const formData = await request.formData();
			const id = formData.get('equipoId') as string;
			const nombre = formData.get('nombre') as string;
			const organizacion = formData.get('organizacion') as string;

			const { data: equipo, error: equipoError } = await supabase
				.from('Equipos')
				.update({ nombre, organizacion })
				.eq('id', id);

			if (equipoError) {
				return fail(500, { error: `Error al registrar el equipo: ${equipoError.message}` });
			}

			return { equipo };
		} catch (err) {
			console.error('Error inesperado:', err);
			return fail(500, { error: 'Ocurrió un error inesperado al actualizar el equipo.' });
		}
	}
};
