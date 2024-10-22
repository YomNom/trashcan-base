<script>
    import ButtonComponent from "./ButtonComponent.svelte";
    import openIcon from "/ion--tablet-landscape-outline.svg";
    import closeIcon from "/ion--tablet-landscape.svg";

    let defaultColor = "#00000";
    let lightColor = defaultColor;
    let isLightOn = false;
    export let isLidOpen = false;

    function lidOpen() {
        isLidOpen = true;
    }

    function lidClose() {
        isLidOpen = false;
    }

    function lightToggle() {
        isLightOn = true;
        changeColor("#fffecc");
        if (!isLidOpen) {
            lidOpen();
            setTimeout(() => {
                isLightOn = false;
                lidClose();
                changeColor("#eeedac");
            }, 2500); // 2.5 seconds
        } else {
            // when the user has set the lid to open
            setTimeout(() => {
                isLightOn = false;
                changeColor("#eeedac");
            }, 2500); // 2.5 seconds
        }
    }

    function changeColor(newColor) {
        lightColor = newColor;
    }
</script>

<div class="motion-sensor">
    <ButtonComponent on:click={lidOpen} symbol={openIcon} bgColor={"#00000"}
    ></ButtonComponent>
    <button
        class="glowing-box"
        on:mouseenter={lightToggle}
        class:is-glowing={isLightOn}
        style="background-color: {lightColor}"
    ></button>
    <ButtonComponent on:click={lidClose} symbol={closeIcon} bgColor={"#00000"}
    ></ButtonComponent>
</div>

<style>
    .motion-sensor {
        display: flex;
        align-items: center; /* Align items vertically centered */
        gap: 10px; /* Space between elements */
        margin-top: 20px;
    }

    .glowing-box {
        width: 20px;
        height: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        font-size: 1.2rem;
        transition: box-shadow 0.3s ease-in-out;
        border: none; /* Remove default button border */
        cursor: pointer; /* Change cursor to pointer */
    }

    .glowing-box.is-glowing {
        box-shadow: 0 0 15px 5px rgba(255, 255, 0, 0.8); /* Glowing effect */
    }
</style>
