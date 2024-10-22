<script>
    import { OdorLevel } from "./store.js";
    import { draw } from "svelte/transition";

    $: showLine = 9 > 5;
</script>

<svg
    width="200"
    height="400"
    viewBox="0 -100 200 400"
    xmlns="http://www.w3.org/2000/svg"
>
    <!-- Trashcan lid -->
    <!-- Trashcan lid (right trapezoid, reversed direction) -->
    <path d="M20 50 L180 50 L180 20 L40 20 Z" fill="#808080" />
    <line x1="20" y1="50" x2="180" y2="50" stroke="#909090" stroke-width="2" />
    <!-- Trashcan body -->
    <rect x="20" y="50" width="160" height="200" fill="#808080" />

    <!-- Trash lines (optional, for visual effect) -->
    <line x1="40" y1="80" x2="160" y2="80" stroke="#909090" stroke-width="2" />
    <line
        x1="40"
        y1="120"
        x2="160"
        y2="120"
        stroke="#909090"
        stroke-width="2"
    />
    <line
        x1="40"
        y1="160"
        x2="160"
        y2="160"
        stroke="#909090"
        stroke-width="2"
    />

    {#if showLine}
        <line
            x1="180"
            y1="20"
            x2="180"
            y2="-100"
            stroke="#FF0000"
            stroke-width="2"
            transition:draw={{ duration: 1000 }}
        />
    {/if}
</svg>
