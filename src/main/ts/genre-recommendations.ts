import { createNavbar } from "./navbar";
import { getTopicCheckboxes, getSubjectCheckboxes } from "./genre-recommendations/dom";
import { type CheckboxCollection, checkboxCollection as createCheckboxCollection } from "./genre-recommendations/checkboxCollection";

const bodyHTML: HTMLElement = document.querySelector('body') as HTMLElement;
bodyHTML.prepend(createNavbar());

const topicCheckboxes: HTMLCollectionOf<HTMLInputElement> = getTopicCheckboxes();
const subjectCheckboxes: HTMLCollectionOf<HTMLInputElement> = getSubjectCheckboxes();

const topicCheckboxCollection: CheckboxCollection = createCheckboxCollection(topicCheckboxes);
const subjectCheckboxCollection: CheckboxCollection = createCheckboxCollection(subjectCheckboxes);
