<script>
    import Data from "./data.json";
    import RaceTable from "./lib/RaceTable.svelte";
</script>

<main>
  <RaceTable raceData={Data}/>
</main>

<style>
    main {
        display: grid;
        place-items: center;
        min-height: 100vh;
    }
</style>
