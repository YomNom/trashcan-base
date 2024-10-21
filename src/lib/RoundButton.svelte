<script>
    import { createEventDispatcher } from 'svelte';
  
    export let icon;
    export let size = "60px";
    export let borderColor = "#ffd700";
    export let backgroundColor = "white";
  
    const dispatch = createEventDispatcher();  // Create the dispatcher to send events
  
    function handleClick() {
      dispatch('click');  // Dispatch the click event
    }
  </script>
  
  <!-- The {#if} block should be inside the button content -->
  <button
    class="round-button"
    style="--size: {size}; --border-color: {borderColor}; --background-color: {backgroundColor};"
    on:click={handleClick}
  >
    {#if icon}
      <img src={icon} alt="button icon" />
    {/if}
  </button>
  
  <style>
    .round-button {
      width: var(--size);
      height: var(--size);
      border-radius: 50%;
      border: 5px solid var(--border-color);
      background-color: var(--background-color);
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      transition: all 0.3s ease;
      padding: 0;
      margin-left: 10px;
    }
  
    .round-button:hover {
      transform: scale(1.1);
      box-shadow: 0 0 10px var(--border-color);
    }
  
    .round-button:active {
      transform: scale(0.9);
    }
  </style>
  