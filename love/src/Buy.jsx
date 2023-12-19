import React from 'react'
import {useEffect} from 'react' 
const Buy = ({ buy , setBuy }) => {
  const URL = 'http://localhost:3600/items'
  useEffect(()=>
  {
   
    const fetchItem = async() => 
    {
        try {
          const response = await fetch(URL)
        if(!response.ok) throw new Error('did not received expected data')
        const listItem = response.json()
        setBuy(listItem)
        } catch (error) {
          console.log(error.massage)
        }
    }

    setTimeout(()=>{(async ()=> await fetchItem())()}, 2000)
  }, [buy])


    const count = (id) => {
      let dem = 0;
      for (let i = 0; i < buy.length; i++) {
        if (buy[i].id === id) {
          dem = dem + 1;
        }
      }
      return dem;
    };
  return (
    <article>
    {buy.length ?
        buy.map(buys => (
                count(buys.id)<2 ? <form key={buys.id}>
                <h2>
                            {buys.title}
                        </h2>
                        <p className='body'>
                            {buys.body}
                        </p>
                        <p className='price'>
                            Giá: {buys.price}
                        </p>
                        <button type='submit'>Buy</button>
                        
                    
                    
                </form> : <form key={buys.id}>
                                 <h2>
                                    {buys.title}
                                </h2>
                                <p className='body'>
                                    {buys.body}
                                </p>
                                <p className='price'>
                                    Giá: {buys.price}
                                </p>
                                <button type='submit'>Buy</button>
                                <p>{count(buys.id)}</p>
                            
                    
                             </form> 
            
        )) : 'no things'}
</article>
    )
    
                
}

export default Buy
