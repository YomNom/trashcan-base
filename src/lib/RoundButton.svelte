<script>
    export let icon;
    export let size = "60px";
</script>

<button
    class="round-button"
    style="--size: {size}; "
>
    {#if icon}
        <!-- svelte-ignore a11y-missing-attribute -->
        <img src={icon} />
    {/if}
</button>

<style>
    .round-button {
        width: var(--size);
        height: var(--size);
        border-radius: 50%;
        border: 5px solid var(--icon-border-color);
        background-color: var(--icon-main-color);
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
        box-shadow: 0 0 10px var(--icon-shadow-color);
    }

    .round-button:active {
        transform: scale(0.9);
    }
</style>
