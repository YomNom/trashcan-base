// src/lib/store.js
import { writable, get } from 'svelte/store';

// Create writable stores for shared variables
export const odorLevel = writable(80);

// time variables
let daysOld = 5;
let currentTime = "";

// Create writable stores for UI state
export const isNotificationOpen = writable(false); // For full notification log popup
export const isLatestChangeOpen = writable(false); // For latest change popup
export const isSettingsOpen = writable(false);
export const isGraphOpen = writable(false); // This will control the GraphPopup

// Create writable store for trash day
export const trashDay = writable(5); // Default trash day

// Create writable stores for notifications
export const notificationLog = writable([]); // List to store notification messages
export const notificationMessage = writable(""); // Message for the latest change



