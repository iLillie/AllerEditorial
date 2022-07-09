<script>
    import Data from "./data.json";
    import RaceTable from "./lib/RaceTable.svelte";
</script>

<main>
  <RaceTable raceData={Data}/>
</main>

<style>
    :global(body) {
        margin: 0;
        padding: 0;
        font-family: 'Montserrat', sans-serif;
        background-color: #333333;
        color: #dedede;
    }

    main {
        display: grid;
        place-items: center;
        min-height: 100vh;
    }






</style>
