// src/lib/store.js
import { writable } from 'svelte/store';

// Create writable stores for shared variables
export const odorLevel = writable(0);

