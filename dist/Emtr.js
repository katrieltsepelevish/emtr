"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Emtr {
    constructor() {
        this.handlers = {};
    }
    // Adds a handler to event, once the event will be fired the event will be invoked
    // Returns a callback function to remove the handler
    handle(event, callback) {
        this.handlers[event] = this.handlers[event] || [];
        this.handlers[event].push(callback);
        return callback;
    }
    // Fires the event and invokes the event's registered handlers.
    fire(event, ...args) {
        const eventHandlers = this.handlers[event] || [];
        if (!eventHandlers.length)
            return;
        eventHandlers.forEach((cb) => cb(...args));
        return;
    }
    // Removes already regitered event to prevent invoke
    remove(event, callback) {
        const eventHandlers = this.handlers[event] || [];
        if (!eventHandlers.length) {
            throw new Error(`Remove failed, Event ${event} do not exist.`);
        }
        this.handlers[event] = eventHandlers.filter((handler) => handler !== callback);
        return;
    }
    // Counts the amount of event's handlers
    count(event) {
        const eventHandlers = this.handlers[event] || [];
        return eventHandlers.length;
    }
    // Removes all registered events with handlers
    clear() {
        this.handlers = {};
        return;
    }
}
exports.default = Emtr;
