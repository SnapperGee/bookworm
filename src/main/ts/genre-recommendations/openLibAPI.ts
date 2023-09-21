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
    fetch(`${rootUrl}${query}${limit !== undefined && limit !== null ? "&limit=" + String(limit) : ""}`).then(openLibResponse => openLibResponse.json());

export const enum CoverImgSize
{
    SMALL = "S",
    MEDIUM = "M",
    LARGE = "L"
}

export const createOpenLibBookCoverImgUrl = (coverImgID: number, imgSize: CoverImgSize): string => `https://covers.openlibrary.org/b/id/${coverImgID}-${imgSize}.jpg`;
