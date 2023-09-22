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

export const openLibDocEquals = (anOpenLibDoc: OpenLibDoc, anotherOpenLibDoc: OpenLibDoc | undefined | null): boolean =>
{
    if (anotherOpenLibDoc === undefined || anotherOpenLibDoc === null)
    {
        return false;
    }

    if (   anOpenLibDoc.title !== anotherOpenLibDoc.title
        || anOpenLibDoc.cover_i !== anotherOpenLibDoc.cover_i
        || anOpenLibDoc.author_name.length !== anotherOpenLibDoc.author_name.length
        || anOpenLibDoc.subject.length !== anotherOpenLibDoc.subject.length )
    {
        return false;
    }

    return    anOpenLibDoc.author_name.every(authorName => anotherOpenLibDoc.author_name.includes(authorName))
           && anOpenLibDoc.subject.every(subj => anotherOpenLibDoc.subject.includes(subj));
};

export const createOpenLibBookCoverImgUrl = (coverImgID: number, imgSize: CoverImgSize): string => `https://covers.openlibrary.org/b/id/${coverImgID}-${imgSize}.jpg`;
