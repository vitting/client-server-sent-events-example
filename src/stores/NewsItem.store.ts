import type { newsItem } from "src/types/news_item";
import { writable } from 'svelte/store';

const NewsItemStore = writable<newsItem[]>([]);

export default NewsItemStore;