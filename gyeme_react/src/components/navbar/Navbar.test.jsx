import { describe, expect, it } from 'vitest';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import {render, fireEvent, screen} from '@testing-library/react';
import Navbar from './Navbar'


describe('Notifications tests', () => {

    beforeEach(() => {
        render(
            <Router>
                <Routes>
                    <Route
                        //to="/admin"
                        element={<Navbar/>}
                    />
                </Routes>
            </Router>
        )
    })


    it('Should contain links', () => {
        expect(screen.findByRole('Link', { name: 'Home'}))
        expect(screen.findByRole('Link', { name: 'Trainers'}))
        expect(screen.findByRole('Link', { name: 'Classes'}))
        expect(screen.findByRole('Link', { name: 'Blog'}))
        expect(screen.findByRole('Link', { name: 'My Profile'}))
    })
})