import { fail } from '@sveltejs/kit';
import { supabase } from '../../../../lib/supabaseClient';
import type { Actions } from './$types';

export const actions: Actions = {
    default: async ({ request }: { request: Request }) => {
        try {
            const formData = await request.formData();
            const id = formData.get('equipoId') as string;

            // Validación de datos
            if (!id) {
                return fail(400, { error: 'Todos los datos son requeridos.' });
            }

            // Inserta el equipo en la tabla "Equipos"
            const { data: equipo, error: equipoError } = await supabase
                .from('Equipos')
                .delete().eq('id', id)
                .select('id, nombre')
                .single();

            if (equipoError) {
                return fail(500, { error: `Error al registrar el jugador: ${equipoError.message}` });
            }

            // Devuelve los datos del equipo eliminado
            return { success: true, equipo };
        } catch (err) {
            console.error('Error inesperado:', err);
            return fail(500, { error: 'Ocurrió un error inesperado al eliminar el equipo.' });
        }
    }
};
