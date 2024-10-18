<script>
    import { onMount } from "svelte";

    let odorLevel = 0;
    let meterColor = "#00ff00";

    function updateOdorMeter() {
        // Simulate odor level change (replace with actual sensor data in real implementation)
        odorLevel = Math.floor(Math.random() * 101);

        // Update meter color based on odor level
        if (odorLevel < 30) {
            meterColor = "#00ff00"; // Green for low odor
        } else if (odorLevel < 70) {
            meterColor = "#ffff00"; // Yellow for medium odor
        } else {
            meterColor = "#ff0000"; // Red for high odor
        }
    }

    onMount(() => {
        updateOdorMeter();
        const interval = setInterval(updateOdorMeter, 5000); // Update every 5 seconds

        return () => clearInterval(interval);
    });
</script>

<div class="odor-meter">
    <div
        class="meter-fill"
        style="width: {odorLevel}%; background-color: {meterColor};"
    ></div>
    <div class="meter-label">{odorLevel}%</div>
</div>

<style>
    .odor-meter {
        width: 200px;
        height: 30px;
        background-color: #ddd;
        border-radius: 15px;
        overflow: hidden;
        position: relative;
    }

    .meter-fill {
        height: 100%;
        position: absolute;
        left: 0;
        transition:
            width 0.5s ease-out,
            background-color 0.5s ease-out;
    }

    .meter-label {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-weight: bold;
        color: #333;
    }
</style>
