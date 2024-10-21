<script>
  export let isOpen = false;
  export let closePopup;
  export let onColorChange;
  export let trashDay = 5; // Default to Friday
  export let onTrashDayChange;

  let selectedColor = "#ffffff"; // Default color
  let selectedTrashDay;

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
</script>

{#if isOpen}
  <div class="popup-overlay">
    <div class="popup-content">
      <h2>Settings</h2>
      <!-- Color Picker -->
      <p>Select a background color:</p>
      <input
        type="color"
        bind:value={selectedColor}
        on:change={handleColorChange}
      />
      <!-- Trash Day Selector -->
      <p>Select Trash Day:</p>
      <select bind:value={selectedTrashDay} on:change={handleTrashDayChange}>
        <option value="0">Sunday</option>
        <option value="1">Monday</option>
        <option value="2">Tuesday</option>
        <option value="3">Wednesday</option>
        <option value="4">Thursday</option>
        <option value="5">Friday</option>
        <option value="6">Saturday</option>
      </select>
      <p>
        Currently Selected: {[
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ][selectedTrashDay]}
      </p>
      <button on:click={closePopup}>Close</button>
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

  .popup-content {
    background-color: white;
    border-radius: 8px;
    padding: 20px;
    width: 500px;
    max-width: 90%;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
  }

  button {
    margin-top: 20px;
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  button:hover {
    background-color: #0056b3;
  }
</style>
