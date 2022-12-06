import { fireEvent, getByText, render,screen } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertapp";

describe('Probando GifExpertApp', () => {
  
  test('should render title, form and textbox ', () => {
    
    render( <GifExpertApp />);
    
    expect(screen.getByText('GifExpertApp')).toBeTruthy();
    expect(screen.getByRole('form')).toBeTruthy
    expect(screen.getByRole('textbox')).toBeTruthy
  })
  
  
  
})

