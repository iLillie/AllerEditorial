<script>
  import RaceRow from "./lib/RaceRow.svelte";
  import Data from "./data.json";
  import { onMount } from 'svelte';
  $: location = Object.keys(Data.locations)[0];

  let updateLocation = (locationValue) => {
      location = locationValue;
      changes++;
  }

  let onlyNorwegian = () => {
      changes++;
    if(countryFilter == "") {
        countryFilter = "Norway";
    } else {
        countryFilter = "";
    }
  }

  let countryFilter = "";

  let ready = false;

  let filterCountry = (countryRanks) => {
      if(countryFilter == "") return countryRanks;
      return countryRanks.filter(countryRank => countryRank.person.country == countryFilter);
  }

  let changes = 0;

  onMount(() => ready = true);
</script>

<main>
  <div class="thing">
    <header>
      <h2>{Data.racedata.competitionName} {Data.racedata.season}</h2>
      <div class="flex">
        <p>{location} / {Data.racedata.name}</p>
        <button on:click={() => onlyNorwegian()}>Only Norwegian</button>
      </div>

    </header>
    <div class="test">
      <table>
        <tbody>
        {#if ready}
          {#key changes}
            {#each filterCountry(Data.locations[location]) as raceData}
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
        font-family: 'Montserrat', sans-serif;
        background-color: #333333;
        color: #dedede;
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
      background-color: #262626;
      border-radius: 8px;
  }

  ul {
      display: flex;
      list-style: none;
      gap: 0.5rem;
      padding: 0;
  }

  li {
      padding: 0;
  }

  button {
      border: none;
      font-size: 1.25rem;
      padding: 0.5rem 1rem;
      color: #dedede;
      background-color: #565656;
      font-family: 'Montserrat', sans-serif;
      border-radius: 3px;
  }

  button:hover {
      background-color: #676767;
  }

  p {
      font-size: 1.5rem;
  }


</style>
