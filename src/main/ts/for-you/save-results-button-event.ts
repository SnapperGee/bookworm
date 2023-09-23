import { type OpenLibDoc, openLibDocEquals } from "./open-lib-api";

export const saveResultsButtonEvent = (saveResultsHTMLButton: HTMLButtonElement, localStorageKey: string, openLibDocs: OpenLibDoc[]): void =>
{
    saveResultsHTMLButton.addEventListener("click", () => {
        if (openLibDocs.length === 0)
        {
            return;
        }

        const savedOpenLibDocsString: string | null = localStorage.getItem(localStorageKey);

        let savedOpenLibDocs: OpenLibDoc[] = savedOpenLibDocsString !== null ? JSON.parse(savedOpenLibDocsString) : [];

        if (savedOpenLibDocs.length === 0)
        {
            savedOpenLibDocs = openLibDocs;
        }
        else
        {
            savedOpenLibDocs.push(...openLibDocs.filter(openLibDoc => savedOpenLibDocs.every(savedOpenLibDoc => ! openLibDocEquals(openLibDoc, savedOpenLibDoc))));
        }

        localStorage.setItem(localStorageKey, JSON.stringify(savedOpenLibDocs));
    });
};

export default saveResultsButtonEvent;
