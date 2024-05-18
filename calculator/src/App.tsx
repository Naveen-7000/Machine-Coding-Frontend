import React, {  useState } from 'react'

function App() {
  const [input,setInput] = useState<string>('');
  const [output,setOutput] = useState<string>('')


  //  taking input for every key press
  const handleButtonPress = (value:string) =>{
     setInput((prev) => prev + value);
  }


  const handleClear = () =>{
    setInput('');
  }

  const handleEqual = () =>{
    setOutput(eval(input));
  }




  const buttonsArray = [
    {key:'clear',name:'AC'},
    {key:'modulo',name:'%'},
    {key:'delete',name:'X'},
    {key:'divide',name:'÷'},
    {key:'7',name:'7'},
    {key:'8',name:'8'},
    {key:'9',name:'9'},
    {key:'multiplication',name:'*'},
    {key:'4',name:'4'},
    {key:'5',name:'5'},
    {key:'6',name:'6'},
    {key:'minus',name:'-'},
    {key:'1',name:'1'},
    {key:'2',name:'2'},
    {key:'3',name:'3'},
    {key:'plus',name:'+'},
    {key:'doubleZero',name:'00'},
    {key:'0',name:'0'},
    {key:'dot',name:'.'},
    {key:'equal',name:'='},
  ]

  return (
    <div style={{
      width: '100%',
      height: '100%',
      display: 'flex',
      justifyContent:'center',
      alignItems: 'center',
      flexDirection: 'column',
    }}>
      <h1>Vite + React Calculator</h1>
      <div style={{
        width:500,
        height:500,
        border:'4px solid #696969',
        borderRadius:10,
        background: 'linear-gradient(to right , #4a4a4a, #3a3a3a)',
        color: 'white',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        flexDirection: 'column',
      }}>
         {/* input section */}
         <div style={{
          width: '100%',
          height: '100px',
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
          overflow: 'auto',
          paddingRight: '50px',
          letterSpacing: '1px',
          backgroundColor: '#909090',
          boxSizing: 'border-box',
          padding: '10px',
          fontSize: '24px',
          borderRadius:6,
         }}>
          <p>{input}</p>
         </div>
         {/* output section */}
         <div style={{
           width: '100%',
           height: '100px',
           display: 'flex',
           justifyContent: 'flex-end',
           alignItems: 'center',
           overflow: 'auto',
           paddingRight: '50px',
           letterSpacing: '1px',
         }}>
          <p>{output}</p>
         </div>
         {/* button section */}
         <div style={{
           width: '100%',
           height:'auto',
           flexGrow: '1',
           display: 'grid',
           gridTemplateColumns: 'repeat(4, 1fr)',
           gap: '12px',
           background:'rgb(113, 113, 113)',
           borderRadius:6,
         }}>
             {
              buttonsArray.map((item)=>(
                <div
                 key={item.key}
                style={{
                  width:50,
                  height: 50,
                  borderRadius:'50%',
                  padding:1,
                  textAlign:'center',
                  cursor: 'pointer',
                  border:'1px solid white',
                  margin:4,
                }}
                onClick={()=>{
                  if(item.key === 'clear'){
                    handleClear();
                  }else if(item.key === 'equal'){
                    handleEqual();
                  }else{
                    handleButtonPress(item.name);
                  }
                }}
                >
                 <p>{item.name}</p>
                </div>
              ))
             }
         </div>
      </div>
         
    </div>
  )
}

export default App
