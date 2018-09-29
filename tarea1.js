almacen=[];
ventas=[];


function main(){
    salir = false;
    while(!salir){
        opcion= prompt("1.Agregar producto.\n2.Modificar Stock.\n3.Registrar venta y reducir stock\n4.Mostrar promedio de ventas realizadas\n5.Mostrar productos con stock 0\n6.Salir del sistema");
        switch(opcion){
            case "1":
                agregarProducto();
                break;
            case "2":
                modificarStock();
                break;
            case "3":
                registrarVenta();
                break;
            case "4":
                mostrarVentas();
                break;
            case "5":
                mostrarProducto();
                break;
            case "6":
                salir = true;
                break;
        }
    }
}

function agregarProducto(){
    var codigo=prompt('Codigo del producto:');
    var descripcion = prompt('descripcion del producto:');
    var tipo = prompt('Tipo de producto: ');
    var precioCompra = prompt('Precio de compra: ');
    var precioVenta = prompt('Precio de venta: ');
    var cantidad = prompt('Cantidad: ');
    var producto = {
        codigo: codigo,
        descripcion: descripcion,
        tipo: tipo,
        precioCompra: precioCompra,
        precioVenta: precioVenta,
        cantidad: cantidad,
    }
    almacen.push(producto);
}

function modificarStock(){
    var codigo=prompt('Codigo:');
    var cantidad = prompt('cantidad: ');
    for (i of almacen){
        if(i.codigo==codigo){
            i.cantidad = cantidad;
        }
    }
}

function registrarVenta(){
    var codigo=prompt('Codigo:');
    for ( i of almacen){
        if(i.codigo==codigo){
            i.cantidad = parseInt(i.cantidad)-1;
            ventas.push({
                codigo: i.codigo,
                descripcion: i.descripcion,
                tipo: i.tipo,
                precioCompra: i.precioCompra,
                precioVenta: i.precioVenta,
                cantidad: 1,
            })
        }
    }
}

function mostrarVentas(){

    total=0;
    cantidad=0;
    for (i of ventas){
        total += i.precioVenta;
        cantidad++;
    }
    let cantR='Cantidad de producto vendidos: '+cantidad;
    let totalR = 'Cantidad total obtenida: '+total;
    let promedio = 'Promedio de la cantidad obtenida: '+totalObtenido/cantidad;

    return c+'\n'+t+'\n'+prom+'\n'+ganancia;
}

function mostrarProducto(){
    for (i of almacen){
        if(i.cantidad=="0"){
            console.log(i);
        }
    }
}

