<script>
    // Declaring props
    export let symbol;
    export let bgColor;
</script>

<button on:click style="background-color: {bgColor}">
    {symbol}
</button>

<style>
    button {
        border: none;
        color: #fff;
        font-size: 1.5rem;
        transition: all 250ms;
        transform-origin: center;
        box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.25),
        inset 0px -2px 3px rgba(0, 0, 0, 0.25);
    }
    button:hover {
        cursor: pointer;
        transform: scale(0.975);
        box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.25);
    }
</style>