import '@testing-library/jest-dom/vitest';

// Mock matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

// Mock scrollIntoView
Element.prototype.scrollIntoView = vi.fn();

// Substitute getComputedStyle(el) for getComputedStyle(el, pseudoEl)
const { getComputedStyle } = window;
window.getComputedStyle = el => getComputedStyle(el);

// Substitute console.log for alert
window.alert = (...args) => console.log(...args);
