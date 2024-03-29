"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../index");
test('Emitter fire and handle', () => {
    const testHandler = jest.fn(() => { });
    const emitter = new index_1.default();
    emitter.handle('test', testHandler);
    emitter.fire('test');
    expect(testHandler.mock.calls.length).toBe(1);
});
test('Emitter parameters', () => {
    const testHandler = jest.fn((num) => (num));
    const emitter = new index_1.default();
    emitter.handle('test', testHandler);
    emitter.fire('test', 5);
    expect(testHandler.mock.calls[0][0]).toBe(5);
});
test('Emitter remove handler', () => {
    const testHandler = jest.fn(() => { });
    const emitter = new index_1.default();
    const cb = emitter.handle('test', testHandler);
    emitter.fire('test');
    emitter.remove('test', cb);
    const count = emitter.count('test');
    expect(count).toBe(0);
});
test('Emitter clear all', () => {
    const testHandler = jest.fn(() => { });
    const emitter = new index_1.default();
    emitter.handle('test', testHandler);
    emitter.fire('test');
    emitter.clear();
    const count = emitter.count('test');
    expect(count).toBe(0);
});
