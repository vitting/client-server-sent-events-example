<script lang="typescript">
  import NewsItems from "./components/NewsItems.svelte";
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');

  :global(*) {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  :global(body) {
    margin: 0;
    font-family: 'Poppins', sans-serif;
  }

  main {
    display: flex;
    justify-content: center;
    padding: 1rem;
  }
</style>

<main>
  <NewsItems></NewsItems>
</main>