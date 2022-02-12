import { describe, expect, it } from 'vitest';
import Admin from './Admin';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import {render, fireEvent, screen} from '@testing-library/react';

describe('App components tests', () => {

    beforeEach(() => {
        render(
            <Router>
                <Routes>
                    <Route
                        to="/admin"
                        element={<Admin/>}
                    />
                </Routes>
            </Router>
        )
    })

    test("Testing for titles", () => {
        expect(screen.findByRole('h1', {name: "Gym Users"}))
        expect(screen.findByRole('button', {name: "Create New User"}))
        expect(screen.findByRole('UserList'))
    })
})