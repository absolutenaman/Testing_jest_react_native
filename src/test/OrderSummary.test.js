 /* eslint-disable */ 
import React from 'react'
import { fireEvent, render,screen,waitFor,createEvent } from '@testing-library/react'
import OrderSummary from '../pages/summary/OrderSummary'
import userEvent from '@testing-library/user-event'
const myMock1 = jest.fn();
describe("Testing the checkbox in order Summary",()=>
{
    const user = userEvent.setup()
    it("Check if the checkBox is unchecked when the page loads for the 1st time",()=>
    {
        render(<OrderSummary />);
        const checkbox=screen.getByRole('checkbox');
        expect(checkbox).not.toBeChecked();
        
    }
    );
    it("Check if button is not seen on starting",()=>
    {
        render(<OrderSummary />);
        const button=screen.queryByTestId("text");
       waitFor(()=> expect(button).toBeDisabled());
    }
    );
    it("Checking checkbox enables button",async()=>
    {
        render(<OrderSummary />);
        const checkbox=screen.getByRole('checkbox');
        await user.click(checkbox);
        waitFor(()=> expect(button).toBeEnabled());
      
    }
    );
    it("UnChecking checkbox disables button",async()=>
    {
        render(<OrderSummary />);
        const checkbox=screen.getByRole('checkbox');
        await user.click(checkbox,2);
        waitFor(()=> expect(button).toBeDisabled());
    }
    );
    it("Popover responds to hover",async()=>
    {
        //popover starts out hidden
        //popover appears on mouseover of checkbox label
        //popover disappers when we mouse out

        render(<OrderSummary />);
        const popover=screen.getByRole("button",{name:"Terms and conditions"});
        const popover_text=screen.queryByText("button",{name:"We won't be giving you any ice cream sundae"});
        expect(popover_text).toBe(null);
        const x=await user.hover(popover);
        waitFor(()=> expect(x).toBeDefined());
        const y=await user.unhover(popover);
        waitFor(()=> expect(y).not.toBeDefined());
    }
    )

})