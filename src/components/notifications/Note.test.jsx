import { describe, expect, it } from 'vitest';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import {render, fireEvent, screen} from '@testing-library/react';
import Note from './Note'


describe('Notifications tests', () => {
    const text = "Hello this is a test"
    const date = "10/10/10"

    beforeEach(() => {
        render(
            <Router>
                <Routes>
                    <Route
                        //to="/admin"
                        element={<Note text={text} date={date}/>}
                    />
                </Routes>
            </Router>
        )
    })


    it('Display text', () => {
        expect(screen.findByRole('h3', { name: text}))
    })

    it('Display a date', () => {
        expect(screen.findByRole('h3', { name: date}))
    })

})