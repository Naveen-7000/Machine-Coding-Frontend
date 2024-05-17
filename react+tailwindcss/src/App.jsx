import { useState,useEffect } from 'react'

function App() {
  const [cards, setCards] = useState([]);
  const [removeAll,setRemoveAll] = useState(false);

  console.log(removeAll,"is throwing error ");


  //  when the cards length reaches to 9 then mark the remove flag true
  const addItem = (item) =>{
    setCards([...cards,item]);
    if(item === 9)setRemoveAll(true)
  }

  useEffect(() => {
    if (removeAll) {
      const timer = setInterval(() => {
        if (cards.length === 0) {
          setRemoveAll(false);
          clearInterval(timer); 
          return;
        }
        setCards(prevCards => prevCards.slice(1)); 
      }, 1000); 
      return () => clearInterval(timer); // Cleanup on unmount
    }
  }, [cards]);


  return (
    <div className='bg-black w-full h-screen'>
      <div className='grid w-full grid-cols-3 justify-center items-center p-4 gap-4'>
         {
          [1,2,3,4,5,6,7,8,9].map((item)=>{

               return (
             <div key={item} className={`${cards.includes(item) ? 'bg-green-200' : 'bg-yellow-50'} w-10 h-10 ${item === 5 | item === 6 && 'bg-transparent text-transparent'} text-center cursor-pointer`} onClick={()=>{
              addItem(item);
             }}>
              {item}
             </div>
               )
          }
          )
        }
        </div>
    </div>
  )
}

export default App
