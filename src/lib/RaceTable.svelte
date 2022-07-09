<script>
    import RaceRow from "./RaceRow.svelte";

    import { onMount } from 'svelte';


    export let raceData = {};

    $: location = Object.keys(raceData.locations)[0];
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


<article class="thing">
  <header>
    <h2>{raceData.racedata.competitionName} {raceData.racedata.season}</h2>
    <div class="flex">
      <p>{location} / {raceData.racedata.name}</p>
      <button on:click={() => onlyNorwegian()}>Only Norwegian</button>
    </div>

  </header>
  <div class="test">
    <table>
      <tbody>
      {#if ready}
        {#key changes}
          {#each filterCountry(raceData.locations[location]) as locationData}
            {#if locationData.rank != null}
              <RaceRow rankObject={locationData}></RaceRow>
            {/if}
          {/each}
        {/key}
      {/if}
      </tbody>
    </table>
  </div>
  <ul>
    {#each Object.keys(raceData.locations) as locationKey}
      <li><button on:click={() => updateLocation(locationKey)}>{locationKey}</button></li>
    {/each}
  </ul>
</article>

<style>
    .test {
        width: 40rem;
        height: 20rem;
        overflow-y:auto;
        padding: 1rem;
        background-color: #262626;
        border-radius: 8px;
        color: #dedede;
        font-family: 'Montserrat', sans-serif;
    }

</style>
