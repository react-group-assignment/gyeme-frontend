import { describe, expect, it } from 'vitest';
import App from './App';
import {render, fireEvent, screen} from '@testing-library/react';


// describe('App components tests', () => {

//     beforeEach(() => {
//         render(<App/>)
//     })

//     it('shows the heading', () => {
//         expect(screen.getByRole('heading', { name: 'Gyeme Fitness Centers' })).toBeInTheDocument()
//     })

//     it('shows home link', () => {
//         expect(screen.getByRole('link', { name: 'Home'})).toBeInTheDocument()
//     })

//     it('shows navigation bar', () => {
//         expect(screen.getByRole('navigation', { name: ''})).toBeInTheDocument()
//     })

// })

test("renders the correct content", async () => {
    //const root = document.createElement("div");
    render(<App/>);
    expect(screen.getByRole('heading', {name: "Gyeme Fitness Centers"}))
})
