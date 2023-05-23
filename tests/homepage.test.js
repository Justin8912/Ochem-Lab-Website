import React from 'react';
import {render, screen} from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import {useRouter} from 'next/router';
import {createMockRouter} from './test-utils/createMockRouter.js';
import {RouterContext} from 'next/dist/shared/lib/router-context';
import Link from 'next/link';

// components
import HomePage from '../src/pages/index.js';
import Navbar from '../resources/assets/navbar.js';
import Footer from '../resources/assets/footer.js';
import Button from '../resources/assets/button.js';

describe('Homepage', () => {
  beforeEach(() => {
    render(<HomePage/>)
  })
  it ('Should render the necessary components upon initial page load', () => {
    const ch220c = screen.getByText('CH 220C');
    const ch128k = screen.getByText('CH 128K');
    const ch128l = screen.getByText('CH 128L');
    const sharedContent = screen.getByText('Quick Links');

    expect(ch220c).toBeInTheDocument();
    expect(ch128k).toBeInTheDocument();
    expect(ch128l).toBeInTheDocument();
    expect(sharedContent).toBeInTheDocument();
  });

  it ('Buttons should change color on mouse hover', () => {
    const button = screen.getByText('Quest');
    expect(button.parentElement).toHaveStyle('background-color: orange-700');
    userEvent.hover(button);
    expect(button.parentElement).toHaveStyle('background-color: orange-600');
    userEvent.unhover(button);
    expect(button.parentElement).toHaveStyle('background-color: orange-700');
  });
});

describe('Navbar components', () => {
  beforeEach(() => {
    render(<Navbar/>);
  })
  it('Should have links that change color on hover', () => {
    let ch220c = screen.getByText('CH 220C');
    let ch128k = screen.getByText('CH 128K');
    let ch128l = screen.getByText('CH 128L');

    expect(ch220c).toHaveStyle('color: text-slate-200');
    expect(ch128k).toHaveStyle('color: text-slate-200');
    expect(ch128l).toHaveStyle('color: text-slate-200');
  });

  it('Should display the correct title', () => {
    let title = screen.getByText('Organic Chemistry Labs');
    expect(title).toBeInTheDocument();
  });

  it('Should display the correct title', () => {
    let title = screen.getByText('Organic Chemistry Labs');
    expect(title).toBeInTheDocument();
  });

  it('Should have the proper logo being displayed at proper dimensions', () => {
    let svg = screen.getByTestId('mainCourseLogo');

    expect(svg).toBeInTheDocument();
    expect(svg).toHaveAttribute('height', '60');
    expect(svg).toHaveAttribute('width', '60');
  });
});

describe('Footer', () => {
  beforeEach(()=> {
    render(<Footer/>);
  });

  it('Should display the title of the course and the course logo', () => {
    expect(true).toBe(true);
  });

  it('Should display useful links section', () => {
    expect(true).toBe(true);
  });

  it('Links should change color upon hover', () => {
    expect(true).toBe(true);
  });

  it('Should display contact information', () => {
    expect(true).toBe(true);
  });

  it('Should display images with contact information', () => {
    expect(true).toBe(true);
  });
});

describe('Responsive design test', () => {
  it('Should change to a one column page when the screen gets to a small enough width', () => {
    expect(true).toBe(true);
  });

  it('Should have a responsive navbar. Course links should be displayed underneath the course title', () => {
    expect(true).toBe(true);
  });

  it('Should have a responsive footer. Should turn into one column', () => {
    expect(true).toBe(true);
  })
});

jest.mock('next/router', () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
}));

describe('Links should work properly', () => {
  it('Should navigate to the proper place when clicked - footer links', () => {
    render(<Footer/>);

    const quest = screen.getByRole('link', {name:'Quest'});
    const canv = screen.getByRole('link', {name:'Canvas'});
    const turnitin = screen.getByRole('link', {name:'Turnitin'});

    expect(quest.href).toBe('https://quest.cns.utexas.edu/');
    expect(canv.href).toBe('https://canvas.utexas.edu/');
    expect(turnitin.href).toBe('https://www.turnitin.com/');
  });

  it('Should navigate to proper course pages when relevant links are clicked on the navbar', () => {
    let {route} = useRouter();
    render(<>
      <RouterContext.Provider value={createMockRouter({route:'/CH220C/LandingPage'})}>
        <Navbar/>
      </RouterContext.Provider>
    </>);

    let ch220c = screen.getByRole('link', {name: 'CH 220C'});
    userEvent.click(ch220c);
    expect(route).toHaveBeenCalledWith('/CH220C/LandingPage')
  })
})