<script>
  import { onMount } from "svelte";
  import Chart from "chart.js/auto"; // Import Chart.js

  export let isOpen = false;
  export let closePopup;

  let chartInstance; // Reference to the chart instance

  // Mock Data for the chart
  let trashData = {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
    datasets: [
      {
        label: "Trash Weight (kg)",
        backgroundColor: "rgba(54, 162, 235, 0.5)",
        borderColor: "rgba(54, 162, 235, 1)",
        data: [12, 19, 3, 5],
      },
      {
        label: "Times Taken Out",
        backgroundColor: "rgba(75, 192, 192, 0.5)",
        borderColor: "rgba(75, 192, 192, 1)",
        data: [2, 4, 3, 5],
      },
    ],
  };

  // Function to initialize the chart when the popup opens
  function drawChart() {
    const canvas = /** @type {HTMLCanvasElement} */ (
      document.getElementById("myChart")
    );

    const ctx = canvas.getContext("2d"); // This ensures you're getting the canvas 2D context

    if (chartInstance) {
      chartInstance.destroy(); // Destroy the old chart before creating a new one
    }

    chartInstance = new Chart(ctx, {
      type: "bar",
      data: trashData,
      options: {
        scales: {
          y: {
            beginAtZero: true, // Ensure the Y axis starts from zero
          },
        },
      },
    });
  }

  // Watch for changes in the `isOpen` prop to initialize the chart
  $: if (isOpen) {
    setTimeout(() => {
      drawChart(); // Ensure the popup is open before drawing the chart
    }, 100); // Slight delay to make sure canvas is ready
  }
</script>

{#if isOpen}
  <div class="popup-overlay">
    <div class="popup-content">
      <h2>Trash Weight vs Times Taken Out</h2>
      <canvas id="myChart" width="400" height="200"></canvas>
      <!-- Canvas for Chart -->
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
    width: 500px;
    max-width: 90%;
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

  canvas {
    margin-top: 20px;
  }
</style>
