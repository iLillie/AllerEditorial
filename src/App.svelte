<script>
  import RaceRow from "./lib/RaceRow.svelte";
  import Data from "./data.json";
  $: location = Object.keys(Data.locations)[0];
  let updateLocation = (locationValue) => {
      location = locationValue;
      console.log("Hi");
  }

  import { onMount } from 'svelte';

  let ready = false;
  onMount(() => ready = true);
</script>

<main>
  <div class="thing">
    <div class="test">
      <table>
        <tbody>
        {#if ready}
          {#key location}
            {#each Data.locations[location] as raceData}
              {#if raceData.rank != null}
                <RaceRow rankObject={raceData}></RaceRow>
              {/if}
            {/each}
          {/key}
        {/if}
        </tbody>
      </table>
    </div>
    <ul>
      {#each Object.keys(Data.locations) as locationKey}
        <li><button on:click={() => updateLocation(locationKey)}>{locationKey}</button></li>
      {/each}
    </ul>
  </div>
</main>

<style>
    :global(body) {
        margin: 0;
        padding: 0;
        font-family: sans-serif;
    }

    main {
        display: grid;
        place-items: center;
        min-height: 100vh;
    }

  .test {
      height: 20rem;
      overflow-y:auto;
      padding: 1rem;
      background-color: antiquewhite;
      border-radius: 5px;
  }

  ul {
      display: flex;
      list-style: none;
      gap: 0.5rem;
  }

  li {
      padding: 0;
  }
</style>
