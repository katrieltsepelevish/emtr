class Emtr {
  private handlers: Record<string, Function[]> = {};

  // Adds a handler to event, once the event will be fired the event will be invoked
  // Returns a callback function to remove the handler
  handle(event: string, callback: Function) {
    this.handlers[event] = this.handlers[event] || [];
    this.handlers[event].push(callback);

    return callback;
  }

  // Fires the event and invokes the event's registered handlers.
  fire(event: string, ...args: any) {
    const eventHandlers = this.handlers[event] || [];

    if (!eventHandlers.length) return;

    eventHandlers.forEach((cb) => cb(...args));

    return;
  }

  // Fires the event and invokes the event's registered handlers asynchronously.
  async fireAsync(event: string, ...args: any) {
    const eventHandlers = this.handlers[event] || [];

    if (!eventHandlers.length) return;

    // Use Promise.all to asynchronously invoke handlers
    await Promise.all(
      eventHandlers.map(async (cb) => {
        await cb(...args);
      })
    );
  }

  // Removes already regitered event to prevent invoke
  remove(event: string, callback: Function) {
    const eventHandlers = this.handlers[event] || [];

    if (!eventHandlers.length) {
      throw new Error(`Remove failed, Event ${event} do not exist.`);
    }

    this.handlers[event] = eventHandlers.filter(
      (handler) => handler !== callback
    );

    return;
  }

  // Counts the amount of event's handlers
  count(event: string) {
    const eventHandlers = this.handlers[event] || [];
    return eventHandlers.length;
  }

  // Removes all registered events with handlers
  clear() {
    this.handlers = {};

    return;
  }
}

export default Emtr;
