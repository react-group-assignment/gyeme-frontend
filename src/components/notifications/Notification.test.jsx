import { describe, expect, it } from 'vitest';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import {render, fireEvent, screen} from '@testing-library/react';
import Notification from './Notification'


describe('Notifications tests', () => {

    beforeEach(() => {
        render(
            <Router>
                <Routes>
                    <Route
                        //to="/admin"
                        element={<Notification/>}
                    />
                </Routes>
            </Router>
        )
    })

    it('find heading', () => {
        expect(screen.findByRole('h1', {name: 'Messages'}))
        expect(screen.findByRole('h1', {name: 'Dates'}))
    })

    it('find note', () => {
        expect(screen.findByRole('Note'))
    })

})