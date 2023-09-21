import { type OpenLibDoc } from "./openLibAPI";
import { fetchOpenLib } from "./openLibAPI";
import { createBookResultCard } from "./createBookResultCard";

export const getRecommendationsEvent = (
    htmlButton: HTMLButtonElement,
    queryStrings: Set<string>,
    checkBoxes: HTMLCollectionOf<HTMLInputElement>,
    openLibDocs: OpenLibDoc[],
    htmlDiv: HTMLDivElement,
    htmlRequestLimitInput: HTMLInputElement ): void =>
{
    htmlButton.addEventListener("click", async () => {

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
