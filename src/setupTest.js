// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import { expect, afterEach } from "vitest";
import { cleanup } from '@testing-library/react';
import matchers from '@testing-library/jest-dom/matchers';
import { server } from './mocks/server';

expect.extend(matchers);

beforeAll(() => {
    server.listen({ onUnhandledRequest: 'error' });
});

afterAll(() => {
    server.close();
});

afterEach(() => {
    cleanup();
    server.resetHandlers();
});