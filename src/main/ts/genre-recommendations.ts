import { createNavbar } from "./navbar";
import { geVisibilityDropdown, getTopicCheckboxes, getTopicFieldsets } from "./genre-recommendations/dom";
import { topicCheckboxEventFunction } from "./genre-recommendations/topicCheckbox";
import { topicVisibilityDropdownEventFunction } from "./genre-recommendations/topicVisibilityDropdown";

const bodyHTML: HTMLElement = document.querySelector('body') as HTMLElement;
bodyHTML.prepend(createNavbar());

const visibilitySelectDropdown: HTMLSelectElement = geVisibilityDropdown();
const topicCheckboxes: HTMLCollectionOf<HTMLInputElement> = getTopicCheckboxes();
// const subjectCheckboxes: HTMLCollectionOf<HTMLInputElement> = getSubjectCheckboxes();
const topicFieldsets: HTMLCollectionOf<HTMLFieldSetElement> = getTopicFieldsets();

topicVisibilityDropdownEventFunction(visibilitySelectDropdown, topicCheckboxes, topicFieldsets);
topicCheckboxEventFunction(topicCheckboxes, topicFieldsets, visibilitySelectDropdown);
