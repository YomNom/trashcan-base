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
        <h1>{currentTime}</h1>
        <h3>
            <span class="trashday-countdown">{daysToTrashday}</span> days to trash
            day
        </h3>
    </div>
    <div class="device-main">
        <div class="led-display">
            <span class="led-number">{daysOld} days old</span>
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
        height: 70%;
        background-color: red;
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
