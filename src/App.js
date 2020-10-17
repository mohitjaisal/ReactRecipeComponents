import React from 'react';
import Counter from './Counter'
import CounterHooks from './CounterHooks'

function App() { return ( 
<>
Counter
<Counter initialCount={0}/> 


Counter Hooks
<CounterHooks initialCount={1}/> 

</>
)}

export default App;