<script>
    export let isLidOpen = false; // Initialize the isLidOpen variable
</script>

<div class="frame">
    {#if !isLidOpen}
        <img src="/ClosedTrashLid.PNG" alt="Closed-lid" class="image" />
    {:else}
        <img src="/OpenTrashLid.PNG" alt="Open-lid" class="image" />
    {/if}
</div>

<style>
    .frame {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 60%; /* Adjust as needed */
        height: 60%; /* Adjust as needed */
        border: 5px; /* Add a border around the image */
        box-sizing: border-box; /* Include border in the element's total width and height */
    }

    .image {
        max-width: 100%; /* Ensure the images fit within the container */
        height: auto; /* Maintain aspect ratio */
    }
</style>
