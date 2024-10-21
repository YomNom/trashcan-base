<script>
    import { odorLevel } from "./store.js";
    import ButtonComponent from "./ButtonComponent.svelte";
    import plusIcon from "../assets/plus.svg";
    import minusIcon from "../assets/minus.svg";

    function increaseOdor() {
        odorLevel.update((n) => Math.min(n + 1, 10));
    }

    function decreaseOdor() {
        odorLevel.update((n) => Math.max(n - 1, 0));
    }
</script>

<div class="odor-control">
    <ButtonComponent
        on:click={decreaseOdor}
        symbol={minusIcon}
        bgColor="#06A298"
    />
    <span class="odor-level">Odor Level: {$odorLevel}</span>
    <ButtonComponent
        on:click={increaseOdor}
        symbol={plusIcon}
        bgColor="#06A298"
    />
</div>

<style>
    .odor-control {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 10px;
    }

    .odor-level {
        margin: 0 10px;
        font-size: 1.2rem;
        color: #06a298;
    }
</style>
