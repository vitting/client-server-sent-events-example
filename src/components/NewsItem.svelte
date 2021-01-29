<script lang="ts">
  import NewsItemStore from "../stores/NewsItem.store";
  import { format } from "date-fns";
  import { da } from "date-fns/locale";
  import { fade } from "svelte/transition";
</script>

{#each $NewsItemStore as item (item.id)}
  <div class="news-item" in:fade={{ duration: 800 }}>
    <div class="pubdate">
      {format(new Date(item.pubDate), "dd. LLLL yyyy 'kl.' HH:mm", {
        locale: da,
      })}
    </div>
    <div class="title">{item.title}</div>
    <img class="image" src={item.image} alt={item.title} />
    <div class="description">{item.description}</div>
    <div class="linkcontainer">
      <a class="link" href={item.link} target="_blank">Gå til artikel</a>
    </div>
  </div>
{/each}
<p class="update-message">Updated every 10 seconds - source: <a href="https://dr.dk">dr.dk</a></p>

<style lang="scss">
  .news-item {
    color: #fff;
    background-color: rgb(43, 42, 42);
    padding: 2rem;
    max-width: 500px;
    .pubdate {
      font-size: 0.7rem;
    }
    .title,
    .description {
      margin: 1rem 0;
    }
    .title {
      font-weight: 600;
    }
    .description,
    .link {
      font-size: 0.8rem;
    }
    .image {
      width: 100%;
    }
    .linkcontainer {
      display: flex;
      justify-content: flex-end;
      .link,
      &:visited {
        color: #fff;
      }
    }
  }

  .update-message {
    margin-top: 5px;
    font-size: 0.6rem;
    text-align: center;
  }
</style>
