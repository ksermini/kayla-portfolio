const registry = new Map();
export function register(key, value) { registry.set(key, value); }
export function resolve(key) { return registry.get(key); }
