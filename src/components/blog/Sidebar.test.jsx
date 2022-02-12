import { describe, expect, it } from 'vitest';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import {render, fireEvent, screen} from '@testing-library/react';
import Sidebar from './Sidebar'

describe('Sidebar component tests', () => {

    beforeEach(() => {
        render(
            <Router>
                <Routes>
                    <Route
                        element={<Sidebar/>}
                    />
                </Routes>
            </Router>
        )
    })

    it('shows titles', () => {
        expect(screen.findByRole('h3', {name: "Blog Page"}))
    })

    it('displays paragraphs', () => {
        expect(screen.findByRole('p', {name: "What's happening at Gyeme?"}))
    })
})