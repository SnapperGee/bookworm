import { createNavbar } from "./navbar";
import { getVisibilitySelectDropdown, getSubjectCheckboxes, getTopicCheckboxes, getClearSubjectsButton, getTopicFieldsets, getGetRecommendationsButton, getQueryResultLimitNumberInput, getSelectAllTopicsButton, getDeselectAllTopicsButton, getBookQueryResultCardsContainer } from "./genre-recommendations/genre-recommendations-dom";
import { topicCheckboxEventFunction } from "./genre-recommendations/topicCheckbox";
import { topicVisibilityDropdownEventFunction } from "./genre-recommendations/topicVisibilityDropdown";
import { selectAllTopicsEventFunction } from "./genre-recommendations/selectAllTopicsButton";
import { deselectAllTopicsEventFunction } from "./genre-recommendations/deselectAllTopicsButton";
import { OpenLibDoc } from "./genre-recommendations/openLibAPI";
import { getRecommendationsEvent } from "./genre-recommendations/get-recommendations-event";
import { clearSubjectsEvent } from "./genre-recommendations/clear-subjects-event";

const bodyHTML: HTMLElement = document.querySelector('body') as HTMLElement;
bodyHTML.prepend(createNavbar());

const visibilitySelectDropdown: HTMLSelectElement = getVisibilitySelectDropdown();
const selectAllTopicsButton: HTMLButtonElement = getSelectAllTopicsButton();
const deselectAllTopicsButton: HTMLButtonElement = getDeselectAllTopicsButton();
const topicCheckboxes: HTMLCollectionOf<HTMLInputElement> = getTopicCheckboxes();
const topicFieldsets: HTMLCollectionOf<HTMLFieldSetElement> = getTopicFieldsets();
const queryResultLimit: HTMLInputElement = getQueryResultLimitNumberInput();
const subjectCheckboxes: HTMLCollectionOf<HTMLInputElement> = getSubjectCheckboxes();
const clearSubjectsButton: HTMLButtonElement = getClearSubjectsButton();

queryResultLimit.value = "12";
visibilitySelectDropdown.value = "show";
clearSubjectsButton.classList.remove("hidden");

for (let index = 0; index < topicCheckboxes.length; ++index)
{
    const topicCheckbox = topicCheckboxes.item(index);

    if (topicCheckbox !== null)
    {
        topicCheckbox.checked = false;
    }
}

for (let index = 0; index < subjectCheckboxes.length; ++index)
{
    const subjectCheckbox = subjectCheckboxes.item(index);

    if (subjectCheckbox !== null)
    {
        subjectCheckbox.checked = false;
    }
}

clearSubjectsEvent(clearSubjectsButton, subjectCheckboxes);
topicVisibilityDropdownEventFunction(visibilitySelectDropdown, topicCheckboxes, topicFieldsets);
selectAllTopicsEventFunction(selectAllTopicsButton, topicCheckboxes, visibilitySelectDropdown, topicFieldsets);
deselectAllTopicsEventFunction(deselectAllTopicsButton, topicCheckboxes, topicFieldsets);
topicCheckboxEventFunction(topicCheckboxes, topicFieldsets, visibilitySelectDropdown);


const getRecommendationsButton: HTMLButtonElement = getGetRecommendationsButton();
const bookQueryResultCards: HTMLDivElement = getBookQueryResultCardsContainer();
// To contain the dataset OpenLibrary queries contained in the corresponding checked subject checkbox HTML input elements
const openLibBookQueries: Set<string> = new Set();
const openLibBookQueryResults: OpenLibDoc[] = [];

getRecommendationsEvent( getRecommendationsButton,
                         openLibBookQueries,
                         subjectCheckboxes,
                         openLibBookQueryResults,
                         bookQueryResultCards,
                         queryResultLimit,
                         visibilitySelectDropdown,
                         topicFieldsets,
                         clearSubjectsButton );
