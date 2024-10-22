// src/lib/store.js
import { writable, get } from 'svelte/store';

// Create writable stores for shared variables
export const OdorLevel = writable(30);

// time variables
export const DaysOld = writable(1);
export const CurrentTime = writable("");

// Create writable stores for UI state
export const IsNotificationOpen = writable(false); // For full notification log popup
export const IsLatestChangeOpen = writable(false); // For latest change popup
export const IsSettingsOpen = writable(false);
export const IsGraphOpen = writable(false); // This will control the GraphPopup

// Create writable store for trash day
export const TrashDay = writable(2); // Default trash day

// Create writable stores for notifications
export const NotificationLog = writable([]); // List to store notification messages
export const NotificationMessage = writable(""); // Message for the latest change



