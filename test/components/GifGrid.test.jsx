import { fireEvent, render,screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";

// se importa el hook 
import { useFetchGifs } from "../../src/hooks/useFetchGifs";
// se realiza un mock del mismo
jest.mock("../../src/hooks/useFetchGifs")

describe('Probando componente GifGrid', () => {
    const category = 'Hello';

    test('should show loading at start', () => {
       
        //se establece que es lo que devolvera el hook
        useFetchGifs.mockReturnValue({
          images:[],
          isLoading: true  
        })

        render( <GifGrid category={category} />);

        expect(screen.getByAltText=('Loading...'));
        expect(screen.getByText(category));
      
    });

    test('should show items when useFetchGifs load the images ', () => {
       //se crea un data hardcodeada
        const gifs = [
            {
                id: 'ABC',
                title: 'Saitama',
                url: 'https://localhost/saitama.jpg'
            },
            {
                id: '123',
                title: 'Goku',
                url: 'https://localhost/goku.jpg'
            },
        ]
        //el hook devolvera esa data
        useFetchGifs.mockReturnValue({
            images:gifs,
            isLoading: true  
          })

          render( <GifGrid category={ category } /> );

        //se espera que la longitud del arreglo sea igual a la que establecimos en el mock
          expect( screen.getAllByRole('img').length ).toBe(2);


    })
    
    
  
})

