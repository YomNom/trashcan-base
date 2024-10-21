<script>
  import svelteLogo from "./assets/svelte.svg";
  import viteLogo from "/vite.svg";
  import Counter from "./lib/Counter.svelte";
  import Navbar from "./lib/Navbar.svelte";
  import DeviceUi from "./lib/DeviceUI.svelte";
  import MotionSensor from "./lib/MotionSensor.svelte";
  import Lid from "./lib/Lid.svelte";
  import "./variables.css";
  let isLidOpen = false;
</script>

<main>
  <div class="app-container">
    <div class="navbar">
      <Navbar />
    </div>
    <div class="content">
      <div class="device-ui">
        <DeviceUi /><br>
        <MotionSensor bind:isLidOpen={isLidOpen}/>
      </div>
      <div class="mockup-device">
        <Lid {isLidOpen} />
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
    background-color: #000;
    position: fixed;
    top: 0;
    left: 0;
  }

  .content {
    padding-top: 100px;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    
  }

  .device-ui {
    width: 800px;
    height: 70%;
    min-height: 700px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .mockup-device {
    width: 800px;
    margin-top: 20px; 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>
