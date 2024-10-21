<script>
  export let isOpen = false;
  export let closePopup;
  export let message = ""; // For displaying a single message
  export let notificationLog = []; // For displaying a list of notifications
</script>

{#if isOpen}
  <div class="popup-overlay">
    <div class="popup-content">
      <h2>Notification</h2>

      {#if message}
        <p>{message}</p>
        <!-- Show a single message -->
      {/if}

      {#if notificationLog.length > 0}
        <ul>
          {#each notificationLog as log}
            <li>{log}</li>
            <!-- Show the full notification log -->
          {/each}
        </ul>
      {/if}

      <button class="popup-close" on:click={closePopup}>Close</button>
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
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }

  .popup-content {
    background-color: white;
    border-radius: 8px;
    padding: 20px;
    width: 300px;
    max-width: 80%;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
  }

  .popup-close {
    margin-top: 20px;
    padding: 10px 20px;
    background-color: var(--device-ui-container-color);
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  .popup-close:hover {
    background-color: var(--icon-border-color);
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    margin-bottom: 10px;
    font-size: 14px;
  }
</style>
