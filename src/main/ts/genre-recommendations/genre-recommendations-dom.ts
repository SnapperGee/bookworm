/**
 * @module genre-recommendations-dom
 */

const NUM_OF_TOPICS: number = 12;
const NUM_OF_SUBJECTS: number = 85;
const SUBJECT_CHECKBOX_DATASET_PROPS: readonly string[] = Object.freeze(["openLibQuery"]);

let _selectAllTopicsButton: HTMLButtonElement;

/**
 * Retrieves a reference to the `HTMLButtonElement` used to select all topic checkboxes and make all their fieldsets visible.
 *
 * @returns The number `HTMLButtonElement` used to select all topic checkboxes and make all their fieldsets visible.
 */
export const getSelectAllTopicsButton = (): HTMLButtonElement =>
{
    _selectAllTopicsButton = document.getElementById("selectAllTopicsButton") as HTMLButtonElement;

    if ( ! (_selectAllTopicsButton instanceof HTMLButtonElement))
    {
        throw new TypeError(`${getSelectAllTopicsButton.name}: ${_selectAllTopicsButton === null ? "null" : "non " + HTMLButtonElement.name} select all topics button.`);
    }

    return _selectAllTopicsButton;
}

let _deselectAllTopicsButton: HTMLButtonElement;

/**
 * Retrieves a reference to the `HTMLButtonElement` used to deselect all topic checkboxes and make all their fieldsets hidden.
 *
 * @returns The number `HTMLButtonElement` used to deselect all topic checkboxes and make all their fieldsets hidden.
 */
export const getDeselectAllTopicsButton = (): HTMLButtonElement =>
{
    _deselectAllTopicsButton = document.getElementById("deselectAllTopicsButton") as HTMLButtonElement;

    if ( ! (_deselectAllTopicsButton instanceof HTMLButtonElement))
    {
        throw new TypeError(`${getDeselectAllTopicsButton.name}: ${_deselectAllTopicsButton === null ? "null" : "non " + HTMLButtonElement.name} select all topics button.`);
    }

    return _deselectAllTopicsButton;
}

let _queryResultLimitNumberInput: HTMLInputElement;

/**
 * Retrieves a reference to the number `HTMLInputElement` to limit the number of books returned in fetch query results.
 *
 * @returns The number `HTMLInputElement` to limit the number of books returned in fetch query results.
 */
export const getQueryResultLimitNumberInput = (): HTMLInputElement =>
{
    _queryResultLimitNumberInput = document.getElementById("queryResultLimit") as HTMLInputElement;

    if ( ! (_queryResultLimitNumberInput instanceof HTMLInputElement))
    {
        throw new TypeError(`${getQueryResultLimitNumberInput.name}: ${_queryResultLimitNumberInput === null ? "null" : "non " + HTMLInputElement.name} query result number input.`);
    }

    return _queryResultLimitNumberInput;
}

let _getRecommendationsButton: HTMLButtonElement;

/**
 * Retrieves a reference to the `HTMLButtonElement` to trigger the recommendations fetch and display.
 *
 * @returns The `HTMLButtonElement` to trigger the recommendations fetch and display.
 */
export const getGetRecommendationsButton = (): HTMLButtonElement =>
{
    _getRecommendationsButton = document.getElementById("getRecommendationsButton") as HTMLButtonElement;

    if ( ! (_getRecommendationsButton instanceof HTMLButtonElement))
    {
        throw new TypeError(`${getGetRecommendationsButton.name}: ${_getRecommendationsButton === null ? "null" : "non " + HTMLButtonElement.name} get recommendations button.`);
    }

    return _getRecommendationsButton;
}

let _topicVisibilityDropdown: HTMLSelectElement;

/**
 * Retrieves a reference to the visibility `HTMLSelectElement` dropdown to toggle visibility of selected topic fieldsets.
 *
 * @returns The visibility `HTMLSelectElement` dropdown to toggle visibility of selected topic fieldsets.
 */
export const getVisibilitySelectDropdown = (): HTMLSelectElement =>
{
    _topicVisibilityDropdown = document.getElementById("topicVisibilityDropdown") as HTMLSelectElement;

    if ( ! (_topicVisibilityDropdown instanceof HTMLSelectElement))
    {
        throw new TypeError(`${getVisibilitySelectDropdown.name}: ${_topicVisibilityDropdown === null ? "null" : "non " + HTMLSelectElement.name} topic visibility dropdown.`);
    }

    return _topicVisibilityDropdown;
}

let _topicCheckboxes: HTMLCollectionOf<HTMLInputElement>;

/**
 * Retrieves a reference to the `HTMLInputElement` topic checkboxes to toggle visibility for corresponding topic fieldset.
 *
 * @returns The `HTMLInputElement` topic checkboxes to toggle visibility for corresponding topic fieldset.
 */
export const getTopicCheckboxes = (): HTMLCollectionOf<HTMLInputElement> =>
{
    _topicCheckboxes = document.getElementsByClassName("topicCheckbox") as HTMLCollectionOf<HTMLInputElement>;

    if ( ! (_topicCheckboxes instanceof HTMLCollection))
    {
        throw new TypeError(`${getTopicCheckboxes.name}: ${_topicCheckboxes === null ? "null" : "non " + HTMLCollection.name} of subject checkboxes.`);
    }

    if (_topicCheckboxes.length !== NUM_OF_TOPICS)
    {
        throw new RangeError(`${getTopicCheckboxes.name}: expected 12 elements, but instead got ${_topicCheckboxes.length}`);
    }

    for (let index = 0; index < _topicCheckboxes.length; ++index)
    {
        const htmlEl = _topicCheckboxes.item(index);

        if ( ! (htmlEl instanceof HTMLInputElement))
        {
            throw new TypeError(`${getTopicCheckboxes.name}: ${htmlEl === null ? "null" : "non " + HTMLInputElement.name} topic checkbox.`);
        }

        if (htmlEl.type !== "checkbox")
        {
            throw new TypeError(`${getTopicCheckboxes.name}: topic ${HTMLInputElement.name} with non-checkbox type: "${htmlEl.type}"`);
        }
    }

    return _topicCheckboxes;
}

let _subjectCheckboxes: HTMLCollectionOf<HTMLInputElement>;

/**
 * Retrieves a reference to the `HTMLInputElement` subject checkboxes to select which subjects to fetch and display.
 *
 * @returns The `HTMLInputElement` subject checkboxes to select which subjects to fetch and display.
 */
export const getSubjectCheckboxes = (): HTMLCollectionOf<HTMLInputElement> =>
{
    _subjectCheckboxes = document.getElementsByClassName("subjectCheckbox") as HTMLCollectionOf<HTMLInputElement>;

    if ( ! (_subjectCheckboxes instanceof HTMLCollection))
    {
        throw new TypeError(`${getSubjectCheckboxes.name}: ${_subjectCheckboxes === null ? "null" : "non " + HTMLCollection.name} of subject checkboxes.`);
    }

    if (_subjectCheckboxes.length !== NUM_OF_SUBJECTS)
    {
        throw new RangeError(`${getSubjectCheckboxes.name}: expected 80 elements, but instead got ${_subjectCheckboxes.length}`);
    }

    for (let index = 0; index < _subjectCheckboxes.length; ++index)
    {
        const htmlEl = _subjectCheckboxes.item(index);

        if ( ! (htmlEl instanceof HTMLInputElement))
        {
            throw new TypeError(`${getSubjectCheckboxes.name}: ${htmlEl === null ? "null" : "non " + HTMLInputElement.name} subject checkbox.`);
        }

        if (htmlEl.type !== "checkbox")
        {
            throw new TypeError(`${getSubjectCheckboxes.name}: subject ${HTMLInputElement.name} with non-checkbox type: "${htmlEl.type}"`);
        }

        for (const datasetProp of SUBJECT_CHECKBOX_DATASET_PROPS)
        {
            if (htmlEl.dataset[datasetProp] === undefined)
            {
                throw new Error(`${getSubjectCheckboxes.name}: undefined dataset property for subject checkbox: "${datasetProp}"`);
            }
        }
    }

    return _subjectCheckboxes;
}

let _topicFieldsets: HTMLCollectionOf<HTMLFieldSetElement>;

/**
 * Retrieves a reference to the topic `HTMLFieldsetElement`s containing the subject checkbox `HTMLInputElement`s.
 *
 * @returns The topic `HTMLFieldsetElement`s containing the subject checkbox `HTMLInputElement`s.
 */
export const getTopicFieldsets = (): HTMLCollectionOf<HTMLFieldSetElement> =>
{
    _topicFieldsets = document.getElementById("topicFieldsets")?.getElementsByTagName("fieldset") as HTMLCollectionOf<HTMLFieldSetElement>;

    if ( ! (_topicFieldsets instanceof HTMLCollection))
    {
        throw new TypeError(`${getTopicFieldsets.name}: ${_topicFieldsets === null ? "null" : "non " + HTMLCollection.name} of subject checkboxes.`);
    }

    if (_topicFieldsets.length !== NUM_OF_TOPICS)
    {
        throw new RangeError(`${getTopicFieldsets.name}: expected 12 elements, but instead got ${_topicFieldsets.length}`);
    }

    for (let index = 0; index < _topicFieldsets.length; ++index)
    {
        const htmlEl = _topicFieldsets.item(index);

        if ( ! (htmlEl instanceof HTMLFieldSetElement))
        {
            throw new TypeError(`${getTopicFieldsets.name}: ${htmlEl === null ? "null" : "non " + HTMLFieldSetElement.name} fieldset.`);
        }
    }

    return _topicFieldsets;
}
