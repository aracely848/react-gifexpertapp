import React, { useState } from 'react';
import AddCategory from './AddCategory';
import GifGrid from './GifGrid';

const GifExpertApp = () => {
    
    //const categories = [ 'One Punch', 'Samurai X', 'Dragon Ball'];
    const [ categories, setCategories ] = useState([ 'One Punch']);

    /*const handleAdd = () => {
        Tarea agregar 'HunterXHunter' 
        Solución 1 setCategories([ ...categories, 'HunterXHunter' ]);
        Solucion 2 setCategories ( cats => [...cats, 'HunterXHunter']);
    }*/

    return(
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            <hr/>
            <ol>
                {
                    categories.map( category => (
                        <GifGrid 
                            key={category}
                            category = {category} 
                        />
                    ))
                }
            </ol>
        </>
    )
}


export default GifExpertApp;