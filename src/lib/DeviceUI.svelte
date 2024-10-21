<script>
    import GearIcon from "../assets/gear-six.svg";
    import NotificationIcon from "../assets/noti.svg";
    import ChartsIcon from "../assets/charts.svg";
    import RoundButton from "./RoundButton.svelte";
    import OdorMeter from "./OdorMeter.svelte";
    let daysOld = 5;
    let currentTime = "";
    function updateTime() {
        const now = new Date();
        currentTime = now.toLocaleTimeString("en-US", { hour12: false });
    }

    updateTime();
    setInterval(updateTime, 1000);

    let daysToTrashday = 7;
</script>

<div class="device-ui-container">
    <div class="device-header">
        <h1 class="time-text">{currentTime}</h1>
        <h3>
            <span class="trashday-countdown trashday-text">{daysToTrashday}</span> 
            <span class="trashday-text">days to trash day</span>
        </h3>
    </div>
    <div class="device-main">
        <div class="led-display">
            <h1 class="led-number">{daysOld}</h1>
            <p class="led-text">days old</p>
        </div>
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
                        <RoundButton icon={NotificationIcon} />
                        <RoundButton icon={GearIcon} />
                        <RoundButton icon={ChartsIcon} />
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
        height: 70%;
        background-color: var(--main-color);
    }

    .led-display {
        justify-content: center;
        align-items: center;
        height: 100%;
    }

    .led-number {
        font-size: 10em;
        margin: 0;
        font-weight: bold;
        color: var(--text-color);
        width: 100%;
        text-align: center;
    }

    .led-text {
        font-size: 3em;
        margin: auto;
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
        height: 20%;
        background-color: var(--footer-color);
        border-bottom-left-radius: 20px;
        border-bottom-right-radius: 20px;
        padding: 10px;
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
