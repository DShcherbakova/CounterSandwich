export type ActionCounter = 
// | { type: 'counter/minus' }
// | { type: 'counter/plus' }
// | { type: 'counter/minus10' }
// | { type: 'counter/plus10' }
// payloaad (полезная нагрузка)- то, значение, которое понадобится при выполнении действия
| { type: 'counter/changeX', payload: number }


// { type: string, payload?: any } 

// | { type: 'counter/minusX', payload: number }
// | { type: 'counter/plusX', payload: number }