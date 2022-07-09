<script>
    export let rankObject = {};
    let to3Characters = (country) => country.slice(0, 3).toUpperCase();
    import { fly } from 'svelte/transition';
    let delay = rankObject.rank <= 10 ? 50 * rankObject.rank : 50 * 10; // Smooth in-transition for top 10 and then have others load in at same rate.
</script>

<tr in:fly="{{ y: 200, duration: 2000, delay: delay }}">
  <td class="rank-row">{rankObject.rank}</td>
  <td>{to3Characters(rankObject.person.country)}</td>
  <td>{rankObject.duration} {#if rankObject.timeDifference !== undefined}<span class="difference">({rankObject.timeDifference})</span>{/if}</td>
  <td>{rankObject.person.name}</td>
</tr>


<style>
    .rank-row {
        font-weight: bold;
    }

    td {
      padding: 0.5rem 0.5rem;
    }

    .difference {
        color: goldenrod;
    }
</style>
