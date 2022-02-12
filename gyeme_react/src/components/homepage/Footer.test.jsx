import { describe, expect, it } from 'vitest';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import {render, fireEvent, screen} from '@testing-library/react';
import Footer from './Footer'

describe('Sidebar component tests', () => {

    beforeEach(() => {
        render(
            <Router>
                <Routes>
                    <Route
                        element={<Footer/>}
                    />
                </Routes>
            </Router>
        )
    })

    it('shows titles', () => {
        expect(screen.findByRole('h4', {name: "Contact"}))
        expect(screen.findByRole('h4', {name: "Reception Hours"}))
        expect(screen.findByRole('h4', {name: "Social Media"}))
    })
})