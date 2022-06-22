let notas=[{materia:'fisica',nota:'9'},{materia:'matematicas',nota:'6'}];

export const guardarNotas=(nota)=>{
 notas.push(nota);
 console.log('Arreglo',notas)
}