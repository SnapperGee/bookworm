import { OpenLibDoc } from "./open-lib-api";

export const clearResultsButtonEvent = ( clearResultsHTMLButton: HTMLButtonElement,
                                         openLibQueryResultsCardsHTMLDiv: HTMLDivElement,
                                         openLibDocsArray: OpenLibDoc[],
                                         sveResultsHTMLButton: HTMLButtonElement ): void =>
{
    clearResultsHTMLButton.addEventListener("click", () => {
        if (openLibQueryResultsCardsHTMLDiv.children.length !== 0)
        {
            openLibQueryResultsCardsHTMLDiv.innerHTML = "";
        }

        if (openLibDocsArray.length !== 0)
        {
            openLibDocsArray.length = 0;
        }

        if ( ! sveResultsHTMLButton.classList.contains("hidden"))
        {
            sveResultsHTMLButton.classList.add("hidden");
        }

        clearResultsHTMLButton.classList.add("hidden");
    });
};
