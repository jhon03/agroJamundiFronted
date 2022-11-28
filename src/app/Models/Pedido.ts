import { ProductosModule } from "../productos/productos.module";
import { ProductoDTO } from "./Producto";

export class Pedido{

    
    idPedido!: number;
    codigo!: string;
    cantidad!: number;
    fechaPedido!: Date;
    estado!: string;

    idClie!: number;
}