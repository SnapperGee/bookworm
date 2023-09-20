import { createNavbar } from "./navbar";
import { getVisibilitySelectDropdown, getTopicCheckboxes, getTopicFieldsets, getGetRecommendationsButton } from "./genre-recommendations/dom";
import { topicCheckboxEventFunction } from "./genre-recommendations/topicCheckbox";
import { topicVisibilityDropdownEventFunction } from "./genre-recommendations/topicVisibilityDropdown";

const bodyHTML: HTMLElement = document.querySelector('body') as HTMLElement;
bodyHTML.prepend(createNavbar());

const visibilitySelectDropdown: HTMLSelectElement = getVisibilitySelectDropdown();
const topicCheckboxes: HTMLCollectionOf<HTMLInputElement> = getTopicCheckboxes();
const topicFieldsets: HTMLCollectionOf<HTMLFieldSetElement> = getTopicFieldsets();
const getRecommendationsButton: HTMLButtonElement = getGetRecommendationsButton();
// const subjectCheckboxes: HTMLCollectionOf<HTMLInputElement> = getSubjectCheckboxes();

topicVisibilityDropdownEventFunction(visibilitySelectDropdown, topicCheckboxes, topicFieldsets);
topicCheckboxEventFunction(topicCheckboxes, topicFieldsets, visibilitySelectDropdown);
