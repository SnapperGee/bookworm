import { createNavbar } from "./navbar";
import { getTopicCheckboxes, getTopicFieldsets } from "./genre-recommendations/dom";
import { assignHTMLInputElementCheckChangeFunction } from "./genre-recommendations/topicCheckbox";

const bodyHTML: HTMLElement = document.querySelector('body') as HTMLElement;
bodyHTML.prepend(createNavbar());

const topicCheckboxes: HTMLCollectionOf<HTMLInputElement> = getTopicCheckboxes();
// const subjectCheckboxes: HTMLCollectionOf<HTMLInputElement> = getSubjectCheckboxes();
const topicFieldsets: HTMLCollectionOf<HTMLFieldSetElement> = getTopicFieldsets();

assignHTMLInputElementCheckChangeFunction(topicCheckboxes, topicFieldsets);
