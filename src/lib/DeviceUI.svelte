<script>
    import GearIcon from "../assets/gear-six.svg";
    import NotificationIcon from "../assets/noti.svg";
    import ChartsIcon from "../assets/charts.svg";
    import RoundButton from "./RoundButton.svelte";
    import TrashIcon from "../assets/trash.svg";
    import OdorMeter from "./OdorMeter.svelte";
    import Popup from "./Popup.svelte";
    import SettingsPopup from "./SettingsPopup.svelte";
    import GraphPopup from "./GraphPopup.svelte"; // Import the GraphPopup

    export let isTrashPackaged;

    import {
        OdorLevel,
        DaysOld,
        CurrentTime,
        IsNotificationOpen,
        IsLatestChangeOpen,
        IsSettingsOpen,
        IsGraphOpen,
        TrashDay,
        NotificationLog,
        NotificationMessage,
    } from "./store.js";

    let currentTime = "";
    let daysOld;
    let isNotificationOpen;
    let isLatestChangeOpen;
    let isSettingsOpen;
    let isGraphOpen;
    let trashDay;
    let notificationLog;
    let notificationMessage;
    let odorLevel;
    let notiClicked = false;

    DaysOld.subscribe((value) => (daysOld = value));
    IsNotificationOpen.subscribe((value) => (isNotificationOpen = value));
    IsLatestChangeOpen.subscribe((value) => (isLatestChangeOpen = value));
    IsSettingsOpen.subscribe((value) => (isSettingsOpen = value));
    IsGraphOpen.subscribe((value) => (isGraphOpen = value));
    TrashDay.subscribe((value) => (trashDay = value));

    NotificationLog.subscribe((value) => (notificationLog = value));
    NotificationMessage.subscribe((value) => (notificationMessage = value));

    OdorLevel.subscribe((value) => (odorLevel = value));

    function handleTrashClick() {
        DaysOld.set(0);
        addNotification("Trash can emptied!");
        isTrashPackaged = true;
        OdorLevel.set(0);
        if (isTrashPackaged) {
            setTimeout(() => {
                isTrashPackaged = false;
            }, 2000);
        }
    }

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
        notiClicked = true;
        isNotificationOpen = !isNotificationOpen; // Open the full notification log popup
        isLatestChangeOpen = false;
    }

    function handleSettingsClick() {
        isSettingsOpen = !isSettingsOpen;
    }

    function handleGraphClick() {
        isGraphOpen = !isGraphOpen; // Open the graph popup
    }

    function closeLatestChangePopup() {
        isLatestChangeOpen = false;
    }

    function handleColorChange(color) {
        // backgroundColor = color; // Change the background color
    }

    function handleTrashDayChange(newTrashDay) {
        trashDay = newTrashDay; // Update the trash day
        daysToTrashday = calculateDaysToTrashday(); // Recalculate days to trash day

        // Update notification log and show only the latest change
        const newNotification = `Trash day changed to ${getDayName(trashDay)}!`;
        notificationLog.push(newNotification); // Add to notification log
        notificationMessage = newNotification; // Show latest change in the popup

        // isLatestChangeOpen = true; // Open the latest change popup
        // isNotificationOpen = false; // Ensure the full log popup is closed
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

    let lastNotificationLevel = 0;

    function checkOdorLevel(odorLevel) {
        if (odorLevel >= 50 && lastNotificationLevel < 50) {
            addNotification(
                "Odor level is getting high. Consider putting the trash can away.",
            );
            lastNotificationLevel = 50;
        } else if (odorLevel >= 70 && lastNotificationLevel < 70) {
            addNotification(
                "Odor level is very high! Please put the trash can away immediately.",
            );
            lastNotificationLevel = 70;
        } else lastNotificationLevel = odorLevel;
    }

    function addNotification(message) {
        notificationLog = [...notificationLog, message];
        notificationMessage = message;
        isLatestChangeOpen = true;
    }

    $: checkOdorLevel($OdorLevel);
</script>

<!-- Apply the selected background color to the central section -->
<div class="device-ui-container">
    <div class="device-header">
        <h1 class="time-text">{currentTime}</h1>
        <h3 class="trashday-text">
            <span class="trashday-countdown">{daysToTrashday}</span> days to trash
            day
        </h3>
    </div>

    <div class="device-main">
        <div class="led-display">
            <h1 class="led-number">{daysOld}</h1>
            <p class="led-text">days old</p>
        </div>

        <!-- Graph Popup for showing mock data -->
        <GraphPopup isOpen={isGraphOpen} closePopup={handleGraphClick} />

        <SettingsPopup
            isOpen={isSettingsOpen}
            closePopup={handleSettingsClick}
            onColorChange={handleColorChange}
            {trashDay}
            onTrashDayChange={handleTrashDayChange}
            addNoti={addNotification}
        />
        <!-- Latest Change Popup (centered inside device-main) -->
        <Popup
            message={notificationMessage}
            isOpen={isLatestChangeOpen}
            closePopup={closeLatestChangePopup}
        />
        <!-- Full Notification Log Popup (also centered inside device-main) -->
        <Popup
            {notificationLog}
            openedbyClick={notiClicked}
            isOpen={isNotificationOpen}
            closePopup={handleNotificationClick}
        />
    </div>

    <div class="device-footer">
        <div class="footer-content">
            <div class="footer-row">
                <div class="meter-column">
                    <div class="meter-container">
                        <div class="meter">
                            <h3 class="odor-level-text">Odor Level</h3>
                            <OdorMeter />
                        </div>
                    </div>
                </div>
                <div class="button-column">
                    <div class="button-container">
                        <RoundButton
                            icon={TrashIcon}
                            on:click={handleTrashClick}
                        />
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
        width: 800px;
        height: 70%;
        background-color: none;
        border-radius: 20px;
        animation: neonGlow 1.5s ease-in-out infinite alternate;
        font-family: "Courier New", Courier, monospace;
        border: 1px solid var(--device-ui-container-color);
        box-shadow: 0 0 10px var(--device-ui-box-shadow-color);
    }

    .device-header {
        height: 10%;
        background-color: var(--header-color);
        border-top-left-radius: 20px;
        border-top-right-radius: 20px;
        padding: 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .time-text {
        color: var(--time-text-color);
        font-weight: bold;
    }

    .trashday-countdown {
        color: var(--trashday-text-color);
        font-weight: bold;
        font-size: 1.5em;
    }

    .trashday-text {
        color: var(--trashday-text-color);
        font-weight: bold;
        font-size: 1.5em;
        margin-left: 5px;
    }

    .device-main {
        position: relative;
        height: 80%;
        background-color: var(--main-color);
    }

    .led-display {
        display: flex;
        flex-direction: column;
        justify-content: center; /* Centers vertically */
        align-items: center; /* Centers horizontally */
        height: 100%;
    }

    .led-number {
        font-size: 10em;
        margin: 0; /* Reset margin */
        font-weight: bold;
        color: var(--text-color);
        width: 100%;
        text-align: center;
    }

    .led-text {
        font-size: 3em;
        margin: 0; /* Reset margin */
        font-weight: bold;
        color: var(--text-color);
        width: 100%;
        text-align: center;
    }

    .button-container {
        display: flex;
        justify-content: space-around;
        align-items: center;
        height: 100%;
    }
    .device-footer {
        height: 10%;
        background-color: var(--footer-color);
        border-bottom-left-radius: 20px;
        border-bottom-right-radius: 20px;
        padding: 20px;
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

    .odor-level-text {
        color: var(--text-color);
        margin: 0 auto;
        font-weight: bold;
        font-size: 1.5em;
    }
</style>
