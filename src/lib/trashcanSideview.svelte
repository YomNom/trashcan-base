<script>
    import { draw, fade } from "svelte/transition";

    export let isLidOpen = false;
    export let isTrashPackaged = false;

    $: showLine = isLidOpen;
    $: showTrash = isTrashPackaged;
</script>

<svg
    width="500"
    height="400"
    viewBox="0 -100 200 400"
    xmlns="http://www.w3.org/2000/svg"
>
    <!-- Trashcan lid -->
    <!-- Trashcan lid (right trapezoid, reversed direction) -->
    <path d="M20 50 L180 50 L180 20 L40 20 Z" fill="var(--icon-border-color)" />
    <line
        x1="20"
        y1="50"
        x2="180"
        y2="50"
        stroke="var(--header-color)"
        stroke-width="2"
    />
    <!-- Trashcan body -->
    <rect
        x="20"
        y="50"
        width="160"
        height="200"
        fill="var(--icon-border-color)"
    />

    <!-- Trash lines (optional, for visual effect) -->
    <line
        x1="40"
        y1="80"
        x2="160"
        y2="80"
        stroke="var(--header-color)"
        stroke-width="2"
    />
    <line
        x1="40"
        y1="120"
        x2="160"
        y2="120"
        stroke="var(--header-color)"
        stroke-width="2"
    />
    <line
        x1="40"
        y1="160"
        x2="160"
        y2="160"
        stroke="var(--header-color)"
        stroke-width="2"
    />

    {#if showLine}
        <line
            x1="180"
            y1="20"
            x2="180"
            y2="-80"
            stroke="var(--header-color)"
            stroke-width="2"
            transition:draw={{ duration: 1000 }}
        />
    {/if}

    {#if showTrash}
        <line
            x1="-100"
            y1="235"
            x2="20"
            y2="235"
            stroke="var(--header-color)"
            stroke-width="2"
            transition:draw={{ duration: 1000 }}
        />
        <rect
            x="-90"
            y="80"
            width="80"
            height="150"
            fill="var(--trashday-text-color)"
            transition:fade={{ duration: 1000 }}
        />
    {/if}
</svg>
