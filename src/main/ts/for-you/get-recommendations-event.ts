import { type OpenLibDoc } from "./open-lib-api";
import { fetchOpenLib } from "./open-lib-api";
import { createBookResultCard } from "./create-book-result-card";
import { addIconsToBookCard } from "./bookActions";

export const getRecommendationsEvent = (
    htmlGetRecommendationsButton: HTMLButtonElement,
    queryStrings: Set<string>,
    checkBoxes: HTMLCollectionOf<HTMLInputElement>,
    openLibDocs: OpenLibDoc[],
    resultsCardsHTMLDiv: HTMLDivElement,
    requestLimitHTMLInput: HTMLInputElement,
    topicFieldsetsVisibilityHTMLSelect: HTMLSelectElement,
    topicHTMLFieldsets: HTMLCollectionOf<HTMLFieldSetElement>,
    clearSubjectsHTMLButton: HTMLButtonElement,
    clearResultsHTMLButton: HTMLButtonElement,
    saveResultsHTMLButton: HTMLButtonElement ): void =>
{
    htmlGetRecommendationsButton.addEventListener("click", async () => {

        queryStrings.clear();

        for (let index = 0; index < checkBoxes.length; ++index)
        {
            const subjectCheckBox = checkBoxes.item(index);

            const openLibQuery = subjectCheckBox?.dataset.openLibQuery;

            if (subjectCheckBox?.checked === true && openLibQuery !== undefined)
            {
                queryStrings.add(openLibQuery);
            }
        }

        if (queryStrings.size === 0)
        {
            return;
        }

        if (topicFieldsetsVisibilityHTMLSelect.value === "show")
        {
            topicFieldsetsVisibilityHTMLSelect.value = "hide";
        }

        for (let index = 0; index < topicHTMLFieldsets.length; ++index)
        {
            const topicFieldset = topicHTMLFieldsets.item(index);

            if (topicFieldset !== null && ! topicFieldset.classList.contains("hidden"))
            {
                topicFieldset.classList.add("hidden");
            }
        }

        if ( ! clearSubjectsHTMLButton.classList.contains("hidden"))
        {
            clearSubjectsHTMLButton.classList.add("hidden")
        }

        if (resultsCardsHTMLDiv.children.length !== 0)
        {
            resultsCardsHTMLDiv.innerHTML = "";
        }

        openLibDocs.length = 0;

        await Promise.all(Array.from(queryStrings).map(async openLibQuery => {
            await fetchOpenLib(openLibQuery, parseInt(requestLimitHTMLInput.value)).then(openLibResponse => openLibDocs.push(...openLibResponse.docs));
        }));

        openLibDocs.forEach(openLibDoc => {
            const openLibResponseCard = createBookResultCard(openLibDoc);
            resultsCardsHTMLDiv.appendChild(openLibResponseCard);
        });

        if (clearResultsHTMLButton.classList.contains("hidden"))
        {
            clearResultsHTMLButton.classList.remove("hidden");
        }

        if (saveResultsHTMLButton.classList.contains("hidden"))
        {
            saveResultsHTMLButton.classList.remove("hidden");
        }

        // book icons code added here
        const allBookCards = resultsCardsHTMLDiv.querySelectorAll('div');
        allBookCards.forEach(card => {
        addIconsToBookCard(card);
    });
});
}
