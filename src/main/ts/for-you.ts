import { createNavbar } from "./navbar";
import { getVisibilitySelectDropdown, getSubjectCheckboxes, getTopicCheckboxes, getClearSubjectsButton, getTopicFieldsets, getGetRecommendationsButton, getQueryResultLimitNumberInput, getSelectAllTopicsButton, getDeselectAllTopicsButton, getBookQueryResultCardsContainer, getClearResultsButton, getSaveResultsButton } from "./for-you/for-you-dom";
import { topicCheckboxEvent } from "./for-you/topic-checkbox-event";
import { topicVisibilityDropdownEvent } from "./for-you/topic-visibility-dropdown-event";
import { selectAllTopicsEvent } from "./for-you/select-all-topics-button-event";
import { deselectAllTopicsEvent } from "./for-you/deselect-all-topics-button-event";
import { OpenLibDoc } from "./for-you/open-lib-api";
import { getRecommendationsEvent } from "./for-you/get-recommendations-event";
import { clearSubjectsEvent } from "./for-you/clear-subjects-event";
import { clearResultsButtonEvent } from "./for-you/clear-results-button-event";
import { saveResultsButtonEvent } from "./for-you/save-results-button-event";

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
const saveResultsButton: HTMLButtonElement = getSaveResultsButton();
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
                         clearSubjectsButton,
                         clearResultsButton,
                         saveResultsButton );

clearResultsButtonEvent(clearResultsButton, bookQueryResultCards, openLibBookQueryResults, saveQueryResultsButton);
saveResultsButtonEvent(saveResultsButton, "openLibDocs", openLibBookQueryResults);
