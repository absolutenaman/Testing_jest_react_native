import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
import {removelOfSpaces} from './App';
test("initial colour of the button and the text", () => {
  render(<App />);
  const button = screen.getByRole("button", { name: "Change to Midnight Blue" });
  expect(button).toHaveStyle({ backgroundColor: "Medium Violet Red" });
});

test("color of the button & text to changes to blue", () => {
  render(<App />);
  const button = screen.getByRole("button", { name: "Change to Midnight Blue" });
  fireEvent(
    button,
    new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
    }),
  )
  expect(button).toHaveStyle({ backgroundColor: "Midnight Blue" });
  expect(button).toHaveTextContent(/Change to Medium Violet Red/i);
});

test('initial conditon',()=>
{
  render(<App/>);
  const button=screen.getByRole("button",{name:"Change to Midnight Blue"});
  expect(button).toBeEnabled();
  const checkbox=screen.getByRole('checkbox');
  expect(checkbox).not.toBeChecked();
})
test('After checkbox is clicked condition',()=>
{
  render(<App/>);
  const checkBox=screen.getByRole('checkbox');
  const button=screen.getByRole("button");
  fireEvent.click(checkBox);
  expect(button).toBeDisabled();
  fireEvent.click(checkBox);
  expect(button).toBeEnabled();
})
describe("Tests to test CamelCase to Space betweeen words",()=>
{
  it("test",()=>
  { 
    expect(removelOfSpaces('NamanIsHot')).toBe('Naman Is Hot');
  }
  )
}
)