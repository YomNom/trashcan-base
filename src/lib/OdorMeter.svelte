<script>
    import { OdorLevel } from "./store.js";

    $: fillWidth = $OdorLevel * 1.8; // 180 (90% of 200) divided by 100 levels
    $: fillColor =
        $OdorLevel <= 33
            ? "var(--good-color)"
            : $OdorLevel <= 67
              ? "var(--alert-color)"
              : "var(--danger-color)";
</script>

<svg width="100%" height="40" viewBox="0 0 200 40">
    <rect x="0" y="0" width="200" height="40" fill="#06A298" rx="5" ry="5" />
    <rect x="5" y="5" width="190" height="30" fill="white" rx="3" ry="3" />
    <rect
        x="10"
        y="10"
        width={fillWidth}
        height="20"
        fill={fillColor}
        rx="2"
        ry="2"
    />
</svg>
