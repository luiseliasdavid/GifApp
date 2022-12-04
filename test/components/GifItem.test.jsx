import { render,screen } from "@testing-library/react"
import { GifItem } from "../../src/components/GifItem"

describe('Probando componente <GiftItem/>', () => {

    const title = "some title"
    const url = 'https://some-url/url.jpg'

  test('should match with snapshot', () => {
    
    const {container}= render(<GifItem title={title} url={url} />)
    expect(container).toMatchSnapshot()
  })

  test('should  render img with URL and ALT indicated', () => {
    
    render(<GifItem title= {title} url={url}/>)
    
    const { src, alt } = screen.getByRole('img');
    expect(src).toBe(url);
    expect(alt).toBe(alt);
  })

  test('should show the title in the document', () => {
    render(<GifItem title= {title} url={url}/>)
    expect(screen.getByText(title)).toBeTruthy()
  })
  
  
  
})
