import { createNavbar } from "./navbar";
import { getVisibilitySelectDropdown, getSubjectCheckboxes, getTopicCheckboxes, getClearSubjectsButton, getTopicFieldsets, getGetRecommendationsButton, getQueryResultLimitNumberInput, getSelectAllTopicsButton, getDeselectAllTopicsButton, getBookQueryResultCardsContainer, getClearResultsButton, getSaveResultsButton } from "./genre-recommendations/genre-recommendations-dom";
import { topicCheckboxEvent } from "./genre-recommendations/topic-checkbox-event";
import { topicVisibilityDropdownEvent } from "./genre-recommendations/topic-visibility-dropdown-event";
import { selectAllTopicsEvent } from "./genre-recommendations/select-all-topics-button-event";
import { deselectAllTopicsEvent } from "./genre-recommendations/deselect-all-topics-button-event";
import { OpenLibDoc } from "./genre-recommendations/open-lib-api";
import { getRecommendationsEvent } from "./genre-recommendations/get-recommendations-event";
import { clearSubjectsEvent } from "./genre-recommendations/clear-subjects-event";
import { clearResultsButtonEvent } from "./genre-recommendations/clear-results-button-event";

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
topicVisibilityDropdownEvent(visibilitySelectDropdown, topicCheckboxes, topicFieldsets, clearSubjectsButton);
selectAllTopicsEvent(selectAllTopicsButton, topicCheckboxes, visibilitySelectDropdown, topicFieldsets, clearSubjectsButton);
deselectAllTopicsEvent(deselectAllTopicsButton, topicCheckboxes, topicFieldsets, clearSubjectsButton);
topicCheckboxEvent(topicCheckboxes, topicFieldsets, visibilitySelectDropdown, clearSubjectsButton);


const getRecommendationsButton: HTMLButtonElement = getGetRecommendationsButton();
const bookQueryResultCards: HTMLDivElement = getBookQueryResultCardsContainer();
const saveQueryResultsButton: HTMLButtonElement = getSaveResultsButton();
const clearResultsButton: HTMLButtonElement = getClearResultsButton();
// To contain the dataset OpenLibrary queries contained in the corresponding checked subject checkbox HTML input elements
const openLibBookQueries: Set<string> = new Set();
const openLibBookQueryResults: OpenLibDoc[] = [];

clearResultsButtonEvent(clearResultsButton, bookQueryResultCards, openLibBookQueryResults, saveQueryResultsButton);
getRecommendationsEvent( getRecommendationsButton,
                         openLibBookQueries,
                         subjectCheckboxes,
                         openLibBookQueryResults,
                         bookQueryResultCards,
                         queryResultLimit,
                         visibilitySelectDropdown,
                         topicFieldsets,
                         clearSubjectsButton );
