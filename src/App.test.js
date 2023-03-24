import { render, screen } from '@testing-library/react';
// import App1 from './App1';
import Progressbar from './component/progressbar';

// test('renders learn react link', () => {
//   render(<App1 />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test("the heading is: " , () => {
  render(<Progressbar />);
  const header = screen.getByTestId(/header/i);
  expect(header.textContent).toBe("11:00:00 AM");

})