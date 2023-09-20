export const rootUrl: string = "https://openlibrary.org/search.json?";

export interface OpenLibDoc
{
    author_name: string[],
    cover_i: number,
    title: string
}

export interface OpenLibResponseJson
{
    docs: unknown[],
    numFound: number
}
