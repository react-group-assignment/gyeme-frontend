import { describe, expect, it } from 'vitest';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import {render, fireEvent, screen} from '@testing-library/react';
import Home from './Home'

describe('Sidebar component tests', () => {

    beforeEach(() => {
        render(
            <Router>
                <Routes>
                    <Route
                        element={<Home/>}
                    />
                </Routes>
            </Router>
        )
    })

    it('renders components', () => {
        expect(screen.findByRole('Classes'))
        expect(screen.findByRole('Locations'))
        expect(screen.findByRole('Trainers'))
        expect(screen.findByRole('Footer'))
    })

})