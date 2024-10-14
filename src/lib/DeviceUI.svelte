<script>
    import RoundButton from "./RoundButton.svelte";
</script>

<div class="device-ui-container">
    <div class="device-header">
        <h1>Device Status</h1>
    </div>
    <div class="device-main">
        <h1>Device Main</h1>
        <div class="led-display">
            <span class="led-number">88:88</span>
        </div>
    </div>
    <div class="device-footer">
        <div class="footer-content">
            <div class="footer-row">
                <div class="meter-column">
                    <div class="meter-container">
                        <div class="meter">
                            <svg width="100%" height="40" viewBox="0 0 200 40">
                                <rect
                                    x="0"
                                    y="0"
                                    width="200"
                                    height="40"
                                    fill="#333"
                                    rx="5"
                                    ry="5"
                                />
                                <rect
                                    x="5"
                                    y="5"
                                    width="190"
                                    height="30"
                                    fill="#666"
                                    rx="3"
                                    ry="3"
                                />
                                <rect
                                    x="10"
                                    y="10"
                                    width="100"
                                    height="20"
                                    fill="#ffd700"
                                    rx="2"
                                    ry="2"
                                />
                            </svg>
                        </div>
                    </div>
                </div>
                <div class="button-column">
                    <div class="button-container">
                        <RoundButton icon="#icon-left" />
                        <RoundButton icon="#icon-center" />
                        <RoundButton icon="#icon-right" />
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
    }

    .device-header {
        height: 10%;
        background-color: green;
        border-top-left-radius: 20px;
        border-top-right-radius: 20px;
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
        justify-content: space-between;
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
        justify-content: space-around;
        width: 100%;
    }

    .footer-row {
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 100%;
    }
</style>
