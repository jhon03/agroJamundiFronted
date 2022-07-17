export class AgricultorDTO {

    /**
     != variable obligatoria
     ?= variable opcional
     */
     idAgric!: number;
     numeroIdentificacion!: string;
     nombre!: string;
     email!: string;
     telefono!: string;
     sexo!: string;
     actividadAgricultor!: String;
    

    //llave foranea
    idTiid!: number;

}