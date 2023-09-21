import { type OpenLibDoc } from "./openLibAPI";
import { fetchOpenLib } from "./openLibAPI";
import { createBookResultCard } from "./create-book-result-card";

export const getRecommendationsEvent = (
    htmlButton: HTMLButtonElement,
    queryStrings: Set<string>,
    checkBoxes: HTMLCollectionOf<HTMLInputElement>,
    openLibDocs: OpenLibDoc[],
    htmlDiv: HTMLDivElement,
    htmlRequestLimitInput: HTMLInputElement,
    htmlTopicFieldsetsVisibilitySelect: HTMLSelectElement,
    htmlTopicFieldsets: HTMLCollectionOf<HTMLFieldSetElement>,
    clearSubjectsButton: HTMLButtonElement ): void =>
{
    htmlButton.addEventListener("click", async () => {

        if (htmlTopicFieldsetsVisibilitySelect.value === "show")
        {
            htmlTopicFieldsetsVisibilitySelect.value = "hide";
        }

        for (let index = 0; index < htmlTopicFieldsets.length; ++index)
        {
            const topicFieldset = htmlTopicFieldsets.item(index);

            if (topicFieldset !== null && ! topicFieldset.classList.contains("hidden"))
            {
                topicFieldset.classList.add("hidden");
            }
        }

        if ( ! clearSubjectsButton.classList.contains("hidden"))
        {
            clearSubjectsButton.classList.add("hidden")
        }

        if (htmlDiv.children.length !== 0)
        {
            htmlDiv.innerHTML = "";
        }

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

        openLibDocs.length = 0;

        await Promise.all(Array.from(queryStrings).map(async openLibQuery => {
            await fetchOpenLib(openLibQuery, parseInt(htmlRequestLimitInput.value)).then(openLibResponse => openLibDocs.push(...openLibResponse.docs));
        }));

        openLibDocs.forEach(openLibDoc => {
            const openLibResponseCard = createBookResultCard(openLibDoc);
            htmlDiv.appendChild(openLibResponseCard);
        });
    });
};
