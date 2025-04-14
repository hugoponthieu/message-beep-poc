import { PaginatedMessageSearch } from "./types";
import { queryOptions } from '@tanstack/react-query';

const API_URL = import.meta.env.VITE_API_URL;

const fetchMessages = async (
  limit: number,
  page: number,
  query: string
): Promise<PaginatedMessageSearch> => {
  const response = await fetch(
    `${API_URL}/messages/search?limit=${limit}&page=${page}&query=${query}`
  );
  const data = await response.json();
  return data as PaginatedMessageSearch;
};

export const searchOptions = (limit: number, page: number, query: string) => {
  return queryOptions({
    queryKey: ['messages', limit, page, query],
    queryFn: () => fetchMessages(limit, page, query),
    staleTime: 1000 * 60 * 5, // 5 minutes
  })
};
