<script lang="ts">
  import { onMount } from "svelte";
  import NewsItem from "./NewsItem.svelte";
  import type { EventWithData } from "../types/event_with_data";
  import type { newsItem } from "../types/news_item";
  import NewsItemStore from "../stores/NewsItem.store";

  onMount(() => {
    const source = new EventSource("http://localhost:3000/sse");

    source.addEventListener("newnews", (evt: Event) => {
      const item: newsItem = JSON.parse((evt as EventWithData).data);
      NewsItemStore.update(() => [item]);
    });
  });
</script>

<div class="news-items">
  <NewsItem />
</div>

<style lang="scss">

</style>
