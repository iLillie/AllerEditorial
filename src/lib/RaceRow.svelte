<script>
    export let rankObject = {};
    export let itemId = 0;
    let to3Characters = (country) => country.slice(0, 3).toUpperCase();
    import { fly } from 'svelte/transition';
</script>

<tr in:fly="{{ y: 100, duration: 1500, delay: 25 * itemId }}">
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
