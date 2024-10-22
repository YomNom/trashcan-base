<script>
    import Sideview from "./trashcanSideview.svelte";
    import RoundButton from "./RoundButton.svelte";
    import { OdorLevel } from "./store.js";

    let trashcanSize = 200;
    let buttonSize = "60px";

    function increaseOdorLevel() {
        OdorLevel.update((n) => Math.min(n + 1, 10));
    }

    function decreaseOdorLevel() {
        OdorLevel.update((n) => Math.max(n - 1, 0));
    }
</script>

<div class="mockup-container">
    <h2>SmartTrash Mockup</h2>
    <div class="trashcan-container">
        <Sideview />
    </div>
    <div class="OdorLevel-controls">
        <!-- <RoundButton
            icon="/minus-icon.svg"
            on:click={decreaseOdorLevel}
            size={buttonSize}
        />
        <div class="OdorLevel-display">
            OdorLevel Level: {$OdorLevel}
        </div>
        <RoundButton
            icon="/plus-icon.svg"
            on:click={increaseOdorLevel}
            size={buttonSize}
        /> -->
    </div>
</div>

<style>
    .mockup-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 20px;
        background-color: #f0f0f0;
        border-radius: 10px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }

    .trashcan-container {
        margin: 20px 0;
    }

    .OdorLevel-controls {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .OdorLevel-display {
        font-size: 1.2rem;
        margin: 0 20px;
    }
</style>
