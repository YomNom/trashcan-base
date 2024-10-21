<script>
    import GearIcon from "../assets/gear-six.svg";
    import NotificationIcon from "../assets/noti.svg";
    import ChartsIcon from "../assets/charts.svg";
    import RoundButton from "./RoundButton.svelte";
    import OdorMeter from "./OdorMeter.svelte";
    import Popup from "./Popup.svelte";
    import SettingsPopup from "./SettingsPopup.svelte";
    import GraphPopup from "./GraphPopup.svelte"; // Import the GraphPopup

    let daysOld = 5;
    let currentTime = "";
    let isNotificationOpen = false; // For full notification log popup
    let isLatestChangeOpen = false; // For latest change popup
    let isSettingsOpen = false;
    let isGraphOpen = false; // This will control the GraphPopup
    let backgroundColor = "#ff0000"; // Default background color
    let trashDay = 5; // Default trash day
    let notificationLog = []; // List to store notification messages
    let notificationMessage = ""; // Message for the latest change

    function updateTime() {
        const now = new Date();
        currentTime = now.toLocaleTimeString("en-US", { hour12: false });
    }

    updateTime();
    setInterval(updateTime, 1000);

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

    let daysToTrashday = calculateDaysToTrashday(); // Dynamically calculate days to trash day

    function handleNotificationClick() {
        isNotificationOpen = true; // Open the full notification log popup
        isLatestChangeOpen = false;
    }

    function handleSettingsClick() {
        isSettingsOpen = true;
    }

    function handleGraphClick() {
        isGraphOpen = true; // Open the graph popup
    }

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

    function handleColorChange(color) {
        backgroundColor = color; // Change the background color
    }

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
</script>

<!-- Apply the selected background color to the central section -->
<div class="device-ui-container">
    <div class="device-header">
        <h1>{currentTime}</h1>
        <h3>
            <span class="trashday-countdown">{daysToTrashday}</span> days to trash
            day
        </h3>
    </div>

    <div class="device-main" style="background-color: {backgroundColor}">
        <div class="led-display">
            <span class="led-number">{daysOld} days old</span>
        </div>

        <!-- Latest Change Popup (centered inside device-main) -->
        <Popup
            message={notificationMessage}
            isOpen={isLatestChangeOpen}
            closePopup={closeLatestChangePopup}
        />

        <!-- Full Notification Log Popup (also centered inside device-main) -->
        <Popup
            {notificationLog}
            isOpen={isNotificationOpen}
            closePopup={closeNotificationPopup}
        />

        <!-- Graph Popup for showing mock data -->
        <GraphPopup isOpen={isGraphOpen} closePopup={closeGraphPopup} />

        <SettingsPopup
            isOpen={isSettingsOpen}
            closePopup={closeSettingsPopup}
            onColorChange={handleColorChange}
            {trashDay}
            onTrashDayChange={handleTrashDayChange}
        />
    </div>

    <div class="device-footer">
        <div class="footer-content">
            <div class="footer-row">
                <div class="meter-column">
                    <div class="meter-container">
                        <div class="meter">
                            <OdorMeter />
                        </div>
                    </div>
                </div>
                <div class="button-column">
                    <div class="button-container">
                        <RoundButton
                            icon={NotificationIcon}
                            on:click={handleNotificationClick}
                        />
                        <RoundButton
                            icon={GearIcon}
                            on:click={handleSettingsClick}
                        />
                        <RoundButton
                            icon={ChartsIcon}
                            on:click={handleGraphClick}
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<style>
    .device-ui-container {
        display: flex;
        flex-direction: column;
        height: 100%;
        background-color: none;
        border-radius: 20px;
        box-shadow:
            0 0 10px #ffd700,
            0 0 20px #ffd700,
            0 0 30px #ffd700;
        animation: neonGlow 1.5s ease-in-out infinite alternate;
        font-family: "Courier New", Courier, monospace;
    }

    .device-header {
        height: 10%;
        background-color: rgb(47, 225, 219);
        border-top-left-radius: 20px;
        border-top-right-radius: 20px;
        padding: 0 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .trashday-countdown {
        color: #ffd700;
        font-weight: bold;
        font-size: 1.5em;
    }

    .device-main {
        position: relative; /* Ensures the popup is positioned relative to this container */
        height: 70%;
        background-color: red;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .led-display {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
    }

    .led-number {
        font-size: 5em;
        color: #ffd700;
        text-shadow:
            0 0 10px black,
            0 0 20px black,
            0 0 30px black;
    }

    .button-container {
        display: flex;
        justify-content: space-around;
        align-items: center;
        height: 100%;
    }

    .device-footer {
        height: 20%;
        background-color: blue;
        border-bottom-left-radius: 20px;
        border-bottom-right-radius: 20px;
        display: flex;
        justify-content: space-around;
    }

    .footer-content {
        display: flex;
        width: 100%;
    }

    .footer-row {
        display: flex;
        justify-content: space-between;
        padding: 0 10px;
        align-items: center;
        width: 100%;
    }
</style>
