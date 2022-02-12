import { describe, expect, it } from 'vitest';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import {render, fireEvent, screen} from '@testing-library/react';
import TrainersPage from './TrainersPage'

describe('TrainersPage tests', () => {

    beforeEach(() => {
        render(
            <Router>
                <Routes>
                    <Route
                        element={<TrainersPage/>}
                    />
                </Routes>
            </Router>
        )
    })

    it('shows titles', () => {
        expect(screen.findByRole('h4', {name: "View All available Gyeme trainers!"}))
        expect(screen.findByRole('h1', {name: "Trainers"}))
    })
})