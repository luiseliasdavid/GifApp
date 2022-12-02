import {useState} from 'react'

export const AddCategory = ({agregarElement}) => {

const [inputValue, setInputValue] = useState('');

const onInputChange = ( {target} )=>{
   setInputValue(target.value)
}

const onSubmit = (event)=>{
    event.preventDefault();
    if(inputValue.trim().length <= 1) return;
    agregarElement(inputValue.trim())
    setInputValue('')
}
  return (
    <form onSubmit={onSubmit }>
      <input
        type='text'
        placeholder='Buscar gift'
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  )
}



