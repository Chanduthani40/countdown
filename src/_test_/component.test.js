import Progressbar from "../component/progressbar";
import { render, screen } from '@testing-library/react';


test("the heading is: " , () => {
    render(<Progressbar />);
    const result = screen.getByTestId(/header/i);
    expect(result.textContent).toBe("11:00:00 AM");
  })
test("the heading is: " , () => {
    render(<Progressbar />);
    const result = screen.getByTestId(/result-time/i);
    expect(result.textContent).toBe("0:18");
  })




