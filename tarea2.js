
var medida = prompt('Medida');
var unidad = prompt('unidad');
var nuevaunidad = prompt('nuevaunidad');
var tipo = prompt('tipo');

var producto = new convertor(medida,unidad,nuevaunidad,tipo);

class convertor{
    convertor(medida,unidad,nuevaunidad,tipo){
        this.medida=medida;
        this.unidad=unidad;
        this.nuevaunidad=nuevaunidad;
        this.tipo= tipo;
    }

    converter(medida,unidad,nuevaunidad,tipo){
        switch(tipo){
            case "L":
                switch(unidad){
                    case "m":
                        switch(nuevaunidad){
                            case "cm":
                                medida = medida/100;
                                break;
                            case "km":
                                medida = medida*100;
                                break;
                            case "ft":
                                medida = medida*3.28;
                                break;
                            default:
                                console.log("No existe esa conversion en este programa");
                                break;
                        }
                        break;
                    
                    case "cm":
                        switch(nuevaunidad){
                            case "m":
                                medida = medida*100;
                                break;
                            default:
                                console.log("No existe esa conversion en este programa");
                                break;
                        }
                        break;
    
                    case "km":
                        switch(nuevaunidad){
                            case "m":
                                medida = medida/100;
                                break;
                            default:
                                console.log("No existe esa conversion en este programa");
                                break;
                            break;
                        }
                    case "ft":
                        switch(nuevaunidad){
                            case "m":
                                medida = medida/3.28;
                                break;
                            default:
                                console.log("No existe esa conversion en este programa");
                                break;
                        }
                        break;
                        
    
                }
                break;
            
            case "T":
                switch(unidad){
                    case "c":
                        switch(nuevaunidad){
                            case "f":
                                medida = (medida*(9/5))+32;
                                break;
                            case "k":
                                medida+=273.15;
                                break;
                        }
                        break;
    
                    case "f":
                        switch(nuevaunidad){
                            case "c":
                                medida = (medida*(5/9))-32;
                                break;
                            case "k":
                                medida = (medida*(5/9))-32;
                                medida+=273.15;
                                break;
                        }
                        break;
    
                    case "k":
                        switch(nuevaunidad){
                            case "c":
                                medida-=273.15;
                                break;
                            case "f":
                                medida-=273.15;
                                medida = (medida*(9/5))+32;
                                break;
                        }
                        break;
    
                }
                break;
        }
        
    }
    
}

