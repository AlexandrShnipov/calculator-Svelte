<script>
import Calculator from "./calculator/Calculator.svelte";
</script>

<main>
    <Calculator/>
 </main>

<style>
    :global(*) {
        box-sizing: border-box;
    }

    :root {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
        Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 1em;
    }

    main {
        height: 100vh;
        display: grid;
        place-content: center;
        background-color: rgb(241, 196, 166);
    }

    :global(ul) {
        padding: 0;
        margin: 0;
    }
</style>
