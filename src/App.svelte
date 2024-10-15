<script>
  import svelteLogo from "./assets/svelte.svg";
  import viteLogo from "/vite.svg";
  import Counter from "./lib/Counter.svelte";
  import Navbar from "./lib/Navbar.svelte";
  import DeviceUi from "./lib/DeviceUI.svelte";
</script>

<main>
  <div class="app-container">
    <div class="navbar">
      <Navbar />
    </div>
    <div class="content">
      <div class="device-ui">
        <DeviceUi />
      </div>
      <div class="mockup-device">
        <!-- Placeholder for mockup device content -->
        <h1>Mockup Device</h1>
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
    justify-content: space-around;
    align-items: center;
  }

  .device-ui {
    width: 800px;
    height: 70%;
    min-height: 700px;
    justify-content: center;
    align-items: center;
  }

  .mockup-device {
    width: 60%;
    height: 100%;
    background-color: #f0f0f0;
    justify-content: center;
    align-items: center;
  }
</style>
