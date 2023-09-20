import { createNavbar } from "./navbar";
import { geVisibilityDropdown, getTopicCheckboxes, getTopicFieldsets } from "./genre-recommendations/dom";
import { topicCheckboxEventFunction } from "./genre-recommendations/topicCheckbox";

const bodyHTML: HTMLElement = document.querySelector('body') as HTMLElement;
bodyHTML.prepend(createNavbar());

const visibilityDropdown: HTMLSelectElement = geVisibilityDropdown();
const topicCheckboxes: HTMLCollectionOf<HTMLInputElement> = getTopicCheckboxes();
// const subjectCheckboxes: HTMLCollectionOf<HTMLInputElement> = getSubjectCheckboxes();
const topicFieldsets: HTMLCollectionOf<HTMLFieldSetElement> = getTopicFieldsets();

topicCheckboxEventFunction(topicCheckboxes, topicFieldsets, visibilityDropdown);
