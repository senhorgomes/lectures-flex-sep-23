import React from "react"
import Game from "../Game"


import { render, fireEvent, prettyDOM } from "@testing-library/react"
describe('Test for cheating mode', () => {
    // All edge cases as opposed to only these two
    test('activate cheat state when robot icon is clicked on.', () => {
        const { container, getByTestId } = render(<Game />);
        // console.log(prettyDOM(container));

        // Find the robot icon by using data-testid
        const robotIcon = getByTestId('robot-icon');

        // Click on the icon
        fireEvent.click(robotIcon);
        // Check to see if cheating mode is enabled by seeing if the .cheating class is located within the component
        expect(robotIcon).toHaveClass('cheating');
    })
    test('the computer will win if the player selects Rock and cheating is enabled.', () => {
        const { container, getByTestId, getByText } = render(<Game />);

        // Find the robot icon by using data-testid
        const robotIcon = getByTestId('robot-icon');

        // Click on the icon
        fireEvent.click(robotIcon);
        expect(robotIcon).toHaveClass('cheating');

        // A player selection to happen
        // Find the rock emoji
        const rockEmoji = getByTestId('Rock');
        fireEvent.click(rockEmoji);
        // I need to verify that the loss text has appeared in our app
        // Too bad! Better luck next time.
        expect(container).toHaveTextContent('Too bad! Better luck next time.');
    })
})