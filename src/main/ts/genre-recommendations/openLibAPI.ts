const rootUrl: string = "https://openlibrary.org/search.json?";

export interface OpenLibDoc
{
    author_name: string[],
    title: string,
    subject: string[],
    cover_i: number
}

export interface OpenLibResponse
{
    docs: OpenLibDoc[],
    numFound: number
}

export const fetchOpenLib = async (query: string, limit?: number): Promise<OpenLibResponse> =>
    fetch(`${rootUrl}${query}${"&limit=" + limit ?? ""}`).then(openLibResponse => openLibResponse.json());
