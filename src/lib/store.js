// src/lib/store.js
import { writable } from 'svelte/store';

// Create writable stores for shared variables
export const odorLevel = writable(0);

// time variables
let daysOld = 5;
let currentTime = "";

let isNotificationOpen = false; // For full notification log popup
let isLatestChangeOpen = false; // For latest change popup
let isSettingsOpen = false;
let isGraphOpen = false; // This will control the GraphPopup

// background and trash day variables
let backgroundColor = "#D3F2E9"; // Default background color
let trashDay = 5; // Default trash day

// notification variables
let notificationLog = []; // List to store notification messages
let notificationMessage = ""; // Message for the latest change

// time function
function updateTime() {
    const now = new Date();
    currentTime = now.toLocaleTimeString("en-US", { hour12: false });
}

updateTime();
setInterval(updateTime, 1000);

// trash day function
function calculateDaysToTrashday() {
    const now = new Date();
    const today = now.getDay(); // Sunday = 0, Monday = 1, ..., Saturday = 6

    let daysToTrashday;

    if (today <= trashDay) {
        daysToTrashday = trashDay - today;
    } else {
        daysToTrashday = 7 - (today - trashDay); // Trash day is next week
    }

    return daysToTrashday;
}

// days to trash day variable
let daysToTrashday = calculateDaysToTrashday(); // Dynamically calculate days to trash day
function handleNotificationClick() {
    isNotificationOpen = true; // Open the full notification log popup
    isLatestChangeOpen = false;
}

// settings function
function handleSettingsClick() {
    isSettingsOpen = true;
}

// graph function
function handleGraphClick() {
    isGraphOpen = true; // Open the graph popup
}

// notification popup functions
function closeNotificationPopup() {
    isNotificationOpen = false;
}

function closeLatestChangePopup() {
    isLatestChangeOpen = false;
}

function closeSettingsPopup() {
    isSettingsOpen = false;
}

function closeGraphPopup() {
    isGraphOpen = false; // Close the graph popup
}

// background functions
function handleColorChange(color) {
    backgroundColor = color; // Change the background color
}

// trash day functions
function handleTrashDayChange(newTrashDay) {
    trashDay = newTrashDay; // Update the trash day
    daysToTrashday = calculateDaysToTrashday(); // Recalculate days to trash day

    // Update notification log and show only the latest change
    const newNotification = `Trash day changed to ${getDayName(trashDay)}!`;
    notificationLog.push(newNotification); // Add to notification log
    notificationMessage = newNotification; // Show latest change in the popup

    isLatestChangeOpen = true; // Open the latest change popup
    isNotificationOpen = false; // Ensure the full log popup is closed
}

// day name function
function getDayName(dayIndex) {
    const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];
    return days[dayIndex];
}