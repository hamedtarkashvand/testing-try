import { render , screen } from "@testing-library/react";
import { Users } from "./users";

describe('testing mock services', () => {
   
    test('sholde render listitems', async () => {
        render(<Users />)
        const elemntsUsers = await screen.findAllByRole('listitem');
        screen.debug()
        expect(elemntsUsers).toHaveLength(4)
    })
})