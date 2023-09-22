import { createNavbar } from "./navbar";
import { getVisibilitySelectDropdown, getSubjectCheckboxes, getTopicCheckboxes, getClearSubjectsButton, getTopicFieldsets, getGetRecommendationsButton, getQueryResultLimitNumberInput, getSelectAllTopicsButton, getDeselectAllTopicsButton, getBookQueryResultCardsContainer } from "./genre-recommendations/genre-recommendations-dom";
import { topicCheckboxEventFunction } from "./genre-recommendations/topic-checkbox-event";
import { topicVisibilityDropdownEventFunction } from "./genre-recommendations/topic-visibility-dropdown-event";
import { selectAllTopicsEventFunction } from "./genre-recommendations/select-all-topics-button-event";
import { deselectAllTopicsEventFunction } from "./genre-recommendations/deselect-all-topics-button-event";
import { OpenLibDoc } from "./genre-recommendations/open-lib-api";
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
topicVisibilityDropdownEventFunction(visibilitySelectDropdown, topicCheckboxes, topicFieldsets, clearSubjectsButton);
selectAllTopicsEventFunction(selectAllTopicsButton, topicCheckboxes, visibilitySelectDropdown, topicFieldsets, clearSubjectsButton);
deselectAllTopicsEventFunction(deselectAllTopicsButton, topicCheckboxes, topicFieldsets, clearSubjectsButton);
topicCheckboxEventFunction(topicCheckboxes, topicFieldsets, visibilitySelectDropdown, clearSubjectsButton);


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
