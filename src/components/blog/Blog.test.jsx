import { describe, expect, it } from 'vitest';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import {render, fireEvent, screen} from '@testing-library/react';
import Blog from './Blog'

describe('Blog components tests', () => {

    beforeEach(() => {
        render(
            <Router>
                <Routes>
                    <Route
                        //to="/admin"
                        element={<Blog/>}
                    />
                </Routes>
            </Router>
        )
    })

    it('displays sidebar', () => {
        expect(screen.findByRole('Sidebar'))
    })

    it('displays articles', () => {
        expect(screen.findByRole('Articles'))
    })

})