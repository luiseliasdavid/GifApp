import { fireEvent, render,screen } from "@testing-library/react";
import {AddCategory} from "../../src/components/AddCategory"


describe('Testing addCategory component', () => {
    test('should change value of text box', () => {
     
      //renderiza el componente
      render(<AddCategory agregarElement={()=>{}} />)
      //selecciona el texbox del input
      const input = screen.getByRole('textbox');
      //dispara el evento target.value con el string Hello     
      fireEvent.input( input, {target: {value: 'Hello'}})
      /* espera que la propiedad value que tiene el imput
         se haya seteado con el valor del estado local
         llamado inputValue que se cargo durante el onChange del input  */
      expect(input.value).toBe('Hello')
    })
    
    test('debe de llamar onNewCategory si el input tiene un valor', () => {
        
      const inputValue    = 'Saitama';
      //se inicializa una constante con una funcion de jest para poder hacerle seguimiento
      const agregarElement = jest.fn();
      // renderiza el componente
      render( <AddCategory agregarElement={ agregarElement } /> );
      //constante con textbox del unico input que hay
      const input = screen.getByRole('textbox');
      //constante con tag form
      const form  = screen.getByRole('form');

      //dispara evento ingresar 'Saitama' en el input
      fireEvent.input( input, { target: { value: inputValue } });
      //hace submit del formulario
      fireEvent.submit( form );
      //espera que input haya quedado vacio luego del submit
      expect( input.value ).toBe('');
      /* testea que la funcion 
      1. haya sido llamada
      2.haya sido llamada 1 vez
      3.haya sido llamada con el valor del input    
      */
      expect( agregarElement ).toHaveBeenCalled();
      expect( agregarElement ).toHaveBeenCalledTimes(1);
      expect( agregarElement ).toHaveBeenCalledWith( inputValue );

  });
    
   test('should not call agregarElement if input is empty', () => {
    
    const agregarElement = jest.fn();
   
    render( <AddCategory agregarElement={ agregarElement } /> );

    const form  = screen.getByRole('form');
       
    fireEvent.submit( form );

    expect( agregarElement ).toHaveBeenCalledTimes(0);
    expect( agregarElement ).not.toHaveBeenCalled()


   })
   

})
