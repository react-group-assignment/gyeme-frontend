import { describe, expect, it } from 'vitest';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import {render, fireEvent, screen} from '@testing-library/react';
import User from './User'

describe('App components tests', () => {

    beforeEach(() => {
        render(
            <Router>
                <Routes>
                    <Route
                        //to="/admin"
                        element={<User/>}
                    />
                </Routes>
            </Router>
        )
    })

    it('shows button', () => {
        expect(screen.findByRole('button', {name: 'Update'}))
    })

    // it('shows button', () => {
    //     expect(screen.findByRole('delete-icon'))
    // })
})