export interface Message {
    id: string;
    owner_id: string;
    content: string;
    attachments: string[];
    server_id: string | null;
    channel_id: string;
    created_at: string;
    updated_at: string;
}

export interface PaginatedMessageSearch {
    page: number;
    limit: number;
    total: number;
    results: Message[];
}