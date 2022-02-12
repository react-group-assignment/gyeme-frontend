import { describe, expect, it } from 'vitest';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import {render, fireEvent, screen} from '@testing-library/react';
import TrainerBlog from './TrainerBlog'

describe('Sidebar component tests', () => {

    beforeEach(() => {
        render(
            <Router>
                <Routes>
                    <Route
                        element={<TrainerBlog/>}
                    />
                </Routes>
            </Router>
        )
    })

    it('renders TrainerSidebar', () => {
        expect(screen.findByRole('TrainerSidebar'))
    })

    it('displays paragraphs', () => {
        expect(screen.findByRole('TrainerArticles'))
    })
})