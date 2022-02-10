import '@testing-library/jest-dom'
import { describe, expect, it, beforeEach } from "vitest";
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Admin from "./Admin.jsx";
import App from '../../App.jsx';


describe('App components tests', () => {

    beforeEach(() => {
        render(<Admin/>)
    })

    it('shows heading', () => {
        expect(screen.getByRole('heading', {name: 'Gym Users'})).toBeInTheDocument()
    })
})