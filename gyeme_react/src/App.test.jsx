import App from "./App.jsx";
import '@testing-library/jest-dom'
import { describe, expect, it, beforeEach } from "vitest";
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Admin from "./components/adminpage/Admin.jsx";

describe('App components tests', () => {

    beforeEach(() => {
        render(<App/>)
    })

    it('shows the heading', () => {
        expect(screen.getByRole('heading', { name: 'Gyeme Fitness Centers' })).toBeInTheDocument()
    })

    it('shows home link', () => {
        expect(screen.getByRole('link', { name: 'Home'})).toBeInTheDocument()
    })

    it('shows navigation bar', () => {
        expect(screen.getByRole('navigation', { name: ''})).toBeInTheDocument()
    })

})
