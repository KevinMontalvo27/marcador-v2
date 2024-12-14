export interface Partidos{
    id: number;
    idUser: number;
    fecha: string;  
    equipoLocalID: number;
    equipoVisitanteID: number;
    lugar: number;
    puntos_local: number;
    puntos_visitante: number;
}

export interface Usuarios{
    id: number;
    correo: string;
    password: string;
}

export interface Equipos{
    id: number;
    nombre: string;
    organizacion: string;
}

export interface Jugadores{
    id: number;
    equipo: string;
    nombre: string;
    dorsal: number;
    posicion: string;
}

