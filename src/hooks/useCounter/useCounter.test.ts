import { render } from "@testing-library/react";
import { useCounter } from "./useCounter";

describe('useCounter', () => {
    test('should render  the  initial counter', () => {
        render(useCounter);
    })
})