import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import App from './App';

describe('App', () => {
    it('Renders "Hello World!"', () => {
        // arrenge
        render(<App />);

        // act

        // expect
        expect(
            screen.getByText('Hello World!', {
                exact: true,
            })
        ).toHaveTextContent('Hello World!');
    });
});
