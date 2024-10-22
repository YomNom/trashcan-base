<script>
  export let isOpen = false;
  export let closePopup;
  export let onColorChange;
  export let trashDay = 5; // Default to Friday
  export let onTrashDayChange;
  import { DaysOld } from "./store.js";
  let selectedColor = "#ffffff"; // Default color
  let selectedTrashDay;
  let daysOld;
  DaysOld.subscribe((value) => (daysOld = value));

  // Initialize selectedTrashDay when popup opens
  $: if (isOpen) {
    selectedTrashDay = trashDay; // Set to passed-in trashDay value
  }

  function handleColorChange(event) {
    selectedColor = event.target.value;
    onColorChange(selectedColor);
  }

  function handleTrashDayChange(event) {
    selectedTrashDay = parseInt(event.target.value); // Update the local value
    onTrashDayChange(selectedTrashDay); // Notify parent of the change
  }

  function resetButtonClick() {
    selectedColor = "#ffffff";
    selectedTrashDay = 2;
    DaysOld.set(0);
  }

  function saveButtonClick() {
    DaysOld.set(daysOld);
    closePopup();
  }
</script>

{#if isOpen}
  <div class="popup-overlay">
    <div class="popup-content">
      <h2 class="popup-title">Settings</h2>
      <!-- Color Picker -->
      <p class="label-text">Select a background color:</p>
      <input
        type="color"
        bind:value={selectedColor}
        on:change={handleColorChange}
      />
      <!-- Trash Day Selector -->
      <p class="label-text">Select Trash Day:</p>
      <select bind:value={selectedTrashDay} on:change={handleTrashDayChange}>
        <option value="0">Sunday</option>
        <option value="1">Monday</option>
        <option value="2">Tuesday</option>
        <option value="3">Wednesday</option>
        <option value="4">Thursday</option>
        <option value="5">Friday</option>
        <option value="6">Saturday</option>
      </select>
      <p class="selected-day">
        Selected day: {[
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ][selectedTrashDay]}
      </p>

      <p class="label-text">Set Days Old:</p>
      <input type="number" bind:value={daysOld} />
      <div class="button-container">
        <button on:click={resetButtonClick}>Reset</button>
        <button on:click={saveButtonClick}>Save</button>
      </div>
    </div>
  </div>
{/if}

<style>
  .popup-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); /* Overlay on the red part */
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }

  .popup-title {
    font-size: 1.5em;
    font-weight: bold;
    margin: 0 auto;
    margin-top: 10px;
    color: var(--text-color);
  }

  .label-text {
    font-size: 1em;
    font-weight: bold;
    margin: 0 auto;
    margin-top: 10px;
    color: var(--text-color);
  }

  .popup-content {
    background-color: white;
    border-radius: 8px;
    min-width: 500px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
    padding: 10px;
  }

  .selected-day {
    font-size: 1em;
    font-weight: bold;
    margin: 0 auto;
    margin-top: 10px;
    color: var(--trashday-text-color);
  }

  button {
    margin-top: 20px;
    padding: 10px 20px;
    background-color: var(--device-ui-container-color);
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  button:hover {
    background-color: var(--device-ui-container-color);
  }

  .button-container {
    display: flex;
    justify-content: space-between;
  }
</style>
