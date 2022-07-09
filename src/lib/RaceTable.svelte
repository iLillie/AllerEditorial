<script>
    import RaceRow from "./RaceRow.svelte";

    import { onMount } from 'svelte';
    export let raceData = {};
    let updateTable = 0;
    let itemId = 0;
    let location = Object.keys(raceData.locations)[0];
    let isNorwegianFilter = false;
    let ready = false;

    let updateLocation = (locationValue) => {
        location = locationValue;
        updateTable++;
    }

    let onlyNorwegian = () => {
        updateTable++;
        isNorwegianFilter = !isNorwegianFilter;
    }



    let filterNorway = (countryRanks) => {
        itemId = 0;
        if(!isNorwegianFilter) return countryRanks;
        return countryRanks.filter(countryRank => countryRank.person.country == "Norway");
    }



    let getId = () => {
        return itemId++;
    }

    onMount(() => updateTable = 1);
</script>


<article class="thing">
  <header>
    <h2>{raceData.racedata.competitionName} {raceData.racedata.season}</h2>
      <p>{location} into the track</p>
  </header>
  <nav>
    <ul>
      {#each Object.keys(raceData.locations) as locationKey}
        <li>
          <button on:click={() => updateLocation(locationKey)}>{locationKey}</button>
        </li>
      {/each}
      <li>
        <button on:click={() => onlyNorwegian()}>
          {isNorwegianFilter ? "Show all" : "Show Norwegian"}
        </button>
      </li>
    </ul>
  </nav>
  <div class="test">
    <table>
      <tbody>
          {#key updateTable}
            {#each filterNorway(raceData.locations[location]) as locationData}
              {#if locationData.rank != null}
                <RaceRow itemId={getId()} rankObject={locationData}></RaceRow>
              {/if}
            {/each}
          {/key}
      </tbody>
    </table>
  </div>
</article>

<style>
    .test {
        width: 46rem;
        height: 20rem;
        overflow-y:auto;
        padding: 1rem;
        background-color: #262626;
        border-radius: 8px;
        color: #dedede;
        font-family: 'Montserrat', sans-serif;
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
