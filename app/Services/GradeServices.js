let notas=[{materia:'Fisica',nota:9},{materia:'Redes',nota:3}];

export const guardarNotas=(nota)=>{
 notas.push(nota);
 console.log('Arreglo',notas)
}
export const getNotas=()=>{
    return notas
}
export const modificacion=(nota)=>{
      let recibido= busqueda(nota.materia);
     if(recibido!=null){
        recibido.nota=nota.nota
     }
     console.log('Notas',notas);
}
const busqueda=(materia)=>{
for(let i=0;i<notas.length;i++){

    if( notas[i].materia==materia){
      return notas[i];
    }
} 
return null;
}