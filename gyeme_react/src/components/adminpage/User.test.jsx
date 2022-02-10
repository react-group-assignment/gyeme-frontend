import '@testing-library/jest-dom'
import { describe, expect, it, beforeEach } from "vitest";
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import User from './User'


describe('App components tests', () => {

    beforeEach(() => {
        render(<User/>)
    })

    it('shows heading', () => {
        expect(screen.getByRole('heading', {name: 'Gym Users'})).toBeInTheDocument()
    })
})