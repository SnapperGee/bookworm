import { createNavbar } from "./navbar";
import { getVisibilitySelectDropdown, getSubjectCheckboxes, getTopicCheckboxes, getTopicFieldsets, getGetRecommendationsButton, getQueryResultLimitNumberInput, getSelectAllTopicsButton, getdeselectAllTopicsButton } from "./genre-recommendations/genre-recommendations-dom";
import { topicCheckboxEventFunction } from "./genre-recommendations/topicCheckbox";
import { topicVisibilityDropdownEventFunction } from "./genre-recommendations/topicVisibilityDropdown";
import { selectAllTopicsEventFunction } from "./genre-recommendations/selectAllTopicsButton";
import { deselectAllTopicsEventFunction } from "./genre-recommendations/deselectAllTopicsButton";

const bodyHTML: HTMLElement = document.querySelector('body') as HTMLElement;
bodyHTML.prepend(createNavbar());

const visibilitySelectDropdown: HTMLSelectElement = getVisibilitySelectDropdown();
const selectAllTopicsButton: HTMLButtonElement = getSelectAllTopicsButton();
const deselectAllTopicsButton: HTMLButtonElement = getdeselectAllTopicsButton();
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
// To contain the dataset OpenLibrary queries contained in the corresponding checked subject checkbox HTML input elements
const openLibBookQueries: Set<string> = new Set();

getRecommendationsButton.addEventListener("click", () => {

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
});
