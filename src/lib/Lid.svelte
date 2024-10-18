<script>
    let frameColor = '#000'; // Default frame color
    let innerColor = '#07ac5a'; // Default inner rectangle color
    export let isLidOpen = false; // Initialize the isLidOpen variable
</script>

<div class="frame">
    {#if !isLidOpen}
        <div class="inner-rectangle"></div>
    {/if}
</div>

<style>
    .frame {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 800px; /* Width of the frame */
        height: 600px; /* Height of the frame */
        border: 5px solid #53d588; /* Frame border color */
        box-sizing: border-box; /* Include border in the element's total width and height */
    }

  .inner-rectangle {
      width: 700px; /* Width of the inner rectangle */
      height: 500px; /* Height of the inner rectangle */
      background-color: #07ac5a; /* Inner rectangle color */
  }
</style>