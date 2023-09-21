import { createNavbar } from "./navbar";
import { getVisibilitySelectDropdown, getSubjectCheckboxes, getTopicCheckboxes, getTopicFieldsets, getGetRecommendationsButton, getQueryResultLimitNumberInput, getSelectAllTopicsButton, getDeselectAllTopicsButton, getBookQueryResultCardsContainer } from "./genre-recommendations/genre-recommendations-dom";
import { topicCheckboxEventFunction } from "./genre-recommendations/topicCheckbox";
import { topicVisibilityDropdownEventFunction } from "./genre-recommendations/topicVisibilityDropdown";
import { selectAllTopicsEventFunction } from "./genre-recommendations/selectAllTopicsButton";
import { deselectAllTopicsEventFunction } from "./genre-recommendations/deselectAllTopicsButton";
import { OpenLibDoc, fetchOpenLib } from "./genre-recommendations/openLibAPI";
import { createBookResultCard } from "./genre-recommendations/createBookResultCard";

const bodyHTML: HTMLElement = document.querySelector('body') as HTMLElement;
bodyHTML.prepend(createNavbar());

const visibilitySelectDropdown: HTMLSelectElement = getVisibilitySelectDropdown();
const selectAllTopicsButton: HTMLButtonElement = getSelectAllTopicsButton();
const deselectAllTopicsButton: HTMLButtonElement = getDeselectAllTopicsButton();
const topicCheckboxes: HTMLCollectionOf<HTMLInputElement> = getTopicCheckboxes();
const topicFieldsets: HTMLCollectionOf<HTMLFieldSetElement> = getTopicFieldsets();
const queryResultLimit: HTMLInputElement = getQueryResultLimitNumberInput();

queryResultLimit.value = "12";
visibilitySelectDropdown.value = "show";

for (let index = 0; index < topicCheckboxes.length; ++index)
{
    topicCheckboxes.item(index)!.checked = false;
}


topicVisibilityDropdownEventFunction(visibilitySelectDropdown, topicCheckboxes, topicFieldsets);
selectAllTopicsEventFunction(selectAllTopicsButton, topicCheckboxes, visibilitySelectDropdown, topicFieldsets);
deselectAllTopicsEventFunction(deselectAllTopicsButton, topicCheckboxes, topicFieldsets);
topicCheckboxEventFunction(topicCheckboxes, topicFieldsets, visibilitySelectDropdown);


const getRecommendationsButton: HTMLButtonElement = getGetRecommendationsButton();
const subjectCheckboxes: HTMLCollectionOf<HTMLInputElement> = getSubjectCheckboxes();
const bookQueryResultCards: HTMLDivElement = getBookQueryResultCardsContainer();
// To contain the dataset OpenLibrary queries contained in the corresponding checked subject checkbox HTML input elements
const openLibBookQueries: Set<string> = new Set();
let openLibBookQueryResults: OpenLibDoc[] = [];

getRecommendationsButton.addEventListener("click", async () => {

    openLibBookQueries.clear();

    for (let index = 0; index < subjectCheckboxes.length; ++index)
    {
        const subjectCheckBox = subjectCheckboxes.item(index);

        const openLibQuery = subjectCheckBox?.dataset.openLibQuery;

        if (subjectCheckBox?.checked === true && openLibQuery !== undefined)
        {
            openLibBookQueries.add(openLibQuery);
        }

    }

    if (openLibBookQueries.size !== 0)
    {
        openLibBookQueryResults.length = 0;
    }

    await Promise.all(Array.from(openLibBookQueries).map(async openLibQuery => {
        await fetchOpenLib(openLibQuery, parseInt(queryResultLimit.value)).then(openLibResponse => openLibBookQueryResults.push(...openLibResponse.docs));
    }));

    openLibBookQueryResults.forEach(openLibDoc => {
        const openLibResponseCard = createBookResultCard(openLibDoc);
        bookQueryResultCards.appendChild(openLibResponseCard);
    });
});
