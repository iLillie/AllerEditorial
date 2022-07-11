<script>
    import {onMount} from 'svelte';
    import {fly} from 'svelte/transition';

    export let raceData = {};
    let updateTable = 0;
    let rowPlacement = 0;
    let location = Object.keys(raceData.locations)[0];
    let isNorwegianFilter = false;

    onMount(() => updateTable = 1);

    let setLocation = (locationValue) => {
        location = locationValue;
        updateTable++;
    }

    let updateNorwegianFilter = () => {
        updateTable++;
        isNorwegianFilter = !isNorwegianFilter;
    }

    let locationDataList = () => filterNorway(raceData.locations[location]);

    let filterNorway = (playerData) => {
        rowPlacement = 0;
        return !isNorwegianFilter ? playerData : playerData.filter(player => player.person.country == "Norway")
    }

    let shortenCountryName = (country) => country.slice(0, 3).toUpperCase();
    let getRowPlacement = () => rowPlacement++;
    let hasTimeDifference = (locationData) => locationData.timeDifference !== undefined;

</script>


<article>
  <header>
    <h2>{raceData.racedata.competitionName} {raceData.racedata.season}</h2>
    <p>{location} into the track</p>
  </header>
  <nav>
    <ul>
      {#each Object.keys(raceData.locations) as locationKey}
        <li>
          <button on:click={() => setLocation(locationKey)}>
            {locationKey}
          </button>
        </li>
      {/each}
      <li>
        <button on:click={() => updateNorwegianFilter()}>
          {isNorwegianFilter ? "Show all" : "Show Norwegian"}
        </button>
      </li>
    </ul>
  </nav>
  <div class="table-container">
    <table>
      <tbody>
      {#key updateTable}
        {#each locationDataList() as locationData}
          {#if locationData.rank != null}
            <tr in:fly="{{ y: 120, duration: 1500, delay: 35 * getRowPlacement() }}">
              <td class="rank">
                {locationData.rank}
              </td>
              <td>
                {shortenCountryName(locationData.person.country)}
              </td>
              <td>{locationData.duration}
                {#if hasTimeDifference(locationData)}
                  <span class="time-difference">({locationData.timeDifference})</span>
                {/if}
              </td>
              <td>{locationData.person.name}</td>
            </tr>
          {/if}
        {/each}
      {/key}
      </tbody>
    </table>
  </div>
</article>

<style>
    td {
        padding: 0.5rem 0.5rem;
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
        font-size: 1.125rem;
        padding: 0.5rem 1rem;
        background-color: #222222;
        font-family: 'Montserrat', sans-serif;
        border-radius: 3px;
    }

    button:hover {
        background-color: #1a1a1a;
    }

    h2, p, button {
        color: white;
        font-family: 'Montserrat', sans-serif;
        margin: 0;
    }

    p {
        margin-block: 0.5rem;
        color: #e8e8e8;
        font-size: 1.5rem;
    }

    header {
        margin-block: 2rem;
    }

    .table-container {
        max-width: 46rem;
        height: 20rem;
        overflow-y: auto;
        padding: 1rem;
        background-color: #222222;
        border-radius: 8px;
        color: #dedede;
        font-family: 'Montserrat', sans-serif;
    }

    .rank {
        font-weight: bold;
    }

    .time-difference {
        color: goldenrod;
    }

    /* Scrollbar CSS */

    .table-container::-webkit-scrollbar-track
    {
        background-color: #3b3b3b;
    }

    .table-container::-webkit-scrollbar
    {
        width: 8px;
        background-color: #000000;
    }

    .table-container::-webkit-scrollbar-thumb
    {
        background-color: #d5d5d5;
        border-radius: 2px;
    }
</style>
