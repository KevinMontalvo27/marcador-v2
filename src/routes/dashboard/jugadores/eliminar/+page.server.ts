import { fail } from '@sveltejs/kit';
import { supabase } from '../../../../lib/supabaseClient';
import type { Actions } from './$types';

export const actions: Actions = {
    default: async ({ request }: { request: Request }) => {
        try {
            const formData = await request.formData();
            const id = formData.get('jugadorId') as string;

            // Validación de datos
            if (!id) {
                return fail(400, { error: 'Todos los datos son requeridos.' });
            }

            // Inserta el jugador en la tabla "Jugadores"
            const { data: jugador, error: jugadorError } = await supabase
                .from('Jugadores')
                .delete().eq('id', id)
                .select('id, nombre')
                .single();

            if (jugadorError) {
                return fail(500, { error: `Error al registrar el jugador: ${jugadorError.message}` });
            }

            // Devuelve los datos del jugador eliminado
            return { success: true, jugador };
        } catch (err) {
            console.error('Error inesperado:', err);
            return fail(500, { error: 'Ocurrió un error inesperado al eliminar el jugador.' });
        }
    }
};
