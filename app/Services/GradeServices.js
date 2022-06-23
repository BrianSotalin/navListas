let notas=[{materia:'Fisica',nota:'9'},{materia:'Redes',nota:'6'}];

export const guardarNotas=(nota)=>{
 notas.push(nota);
 console.log('Arreglo',notas)
}
export const getNotas=()=>{
    return notas
}