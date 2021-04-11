import React, { useState } from 'react';
import PropTypes from 'prop-types';

//With Props const AddCategory = (props) => {
// Sin Props const AddCategory = ({setCategories}) => {
const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange= (e) => {
        setInputValue(e.target.value);
    
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // With Props props.setCategories(cats => [...cats, 'HunterXHunter']);
        // Sin props setCategories(cats => [...cats, inputValue]);
        if(inputValue.trim().length > 2) {
            setCategories(cats => [ inputValue, ...cats ]);
        
            setInputValue('');
        }
    }
    
       return(
        <form onSubmit={handleSubmit}>
            <p>{ inputValue }</p>
            <input 
                type="text"
                value={inputValue}
                onChange= { handleInputChange}
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

export default AddCategory;