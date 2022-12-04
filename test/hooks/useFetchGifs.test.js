import { renderHook, waitFor,screen } from '@testing-library/react';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';


describe('Pruebas en el kook useFetchGifs', () => {
    
    test('debe de regresar el estado inicial', () => {
        
        //se utiliza renderHook para poder ejecutar useFetchGifts
        const { result } = renderHook( () => useFetchGifs('One Punch') );
        //se destructuran los valores devueltos por el hook
        const { images, isLoading } = result.current;
        
        expect( images.length ).toBe(0);
        expect( isLoading ).toBeTruthy();

    });

    test('debe de retornar un arreglo de imagenes y isLoading en false', async() => {
        //se crea una varioable que tiene la ejecucuion del hook
        //que contiene llamada asincronica
        //en este momento result retorna { images: [], isLoading: true }
        const { result } = renderHook( () => useFetchGifs('One Punch') );
              
        //se espera hasta que la promesa se resuelva && que length de images no sea cero
        await waitFor(
            () => expect( result.current.images.length ).toBeGreaterThan(0)
            // sepodria enviar como segundo argumento {time: 6000} para setear el tiempo de espera
        );
         
        // ya con la respuesta se hacen las comprobaciones
        const { images, isLoading } = result.current;
        console.log(images)
        expect( images.length ).toBeGreaterThan(0);
        expect( isLoading ).toBeFalsy();

    });

});