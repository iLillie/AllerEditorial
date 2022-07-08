<script>
    export let rankObject = {};
    let to3Characters = (country) => country.slice(0, 3).toUpperCase();
    import { fly } from 'svelte/transition';
</script>

<tr in:fly="{{ y: 200, duration: 2000, delay: 50 * rankObject.rank }}">
  <td class="rank-row">{rankObject.rank}</td>
  <td>{to3Characters(rankObject.person.country)}</td>
  <td>{rankObject.duration}</td>
  <td>{rankObject.person.name}</td>
</tr>


<style>
    .rank-row {
        font-weight: bold;
    }

    td {
      padding: 0.5rem 0.5rem;
    }
</style>
