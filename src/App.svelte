<script>
  import Navbar from "./lib/Navbar.svelte";
  import DeviceUi from "./lib/DeviceUI.svelte";
  import Mockup from "./lib/Mockup.svelte";
  import MotionSensor from "./lib/MotionSensor.svelte";
  import Lid from "./lib/Lid.svelte";
  import "./variables.css";
  import TrashcanSideview from "./lib/trashcanSideview.svelte";
  import OdorControl from "./lib/OdorControl.svelte";
  let isLidOpen = false;
  let isTrashPackaged = false;
</script>

<main>
  <div class="app-container">
    <div class="navbar">
      <Navbar />
    </div>
    <div class="content">
      <div class="device-ui">
        <h1>Device UI</h1>
        <DeviceUi bind:isTrashPackaged />
        <MotionSensor bind:isLidOpen />
        <div class="odor-control">
          <h2>Odor Control</h2>
          <OdorControl />
        </div>
      </div>
      <div class="mockup-container">
        <!-- Placeholder for mockup device content -->
        <h1>SmartTrash Mockup</h1>
        <h2>Top View</h2>
        <Lid {isLidOpen} />
        <h2>Side View</h2>

        <TrashcanSideview {isLidOpen} {isTrashPackaged} />
      </div>
    </div>
  </div>
</main>

<style>
  main {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  .app-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }

  .navbar {
    width: 100%;
    /* background-color: #000; */
    position: fixed;
    top: 0;
    left: 0;
    background-color: var(--bg-color-hex);
  }

  .content {
    padding-top: 100px;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .device-ui {
    width: 40%;
    height: 70%;
    min-height: 700px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .odor-control {
    margin-top: 50px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .mockup-container {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>
