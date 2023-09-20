/**
 * @module genre-recommendations-dom
 */

const NUM_OF_TOPICS: number = 12;
const NUM_OF_SUBJECTS: number = 85;

let _visibilityDropdown: HTMLSelectElement;

/**
 * Retrieves a reference to the `HTMLSelectElement` dropdown.
 *
 * @returns The `HTMLSelectElement` dropdown.
 */
export function geVisibilityDropdown(): HTMLSelectElement
{
    _visibilityDropdown = document.getElementById("topicVisibilityDropdown") as HTMLSelectElement;

    if ( ! (_visibilityDropdown instanceof HTMLSelectElement))
    {
        throw new TypeError(`${geVisibilityDropdown.name}: ${_visibilityDropdown === null ? "null" : "non " + HTMLSelectElement.name} topic visibility dropdown.`);
    }

    return _visibilityDropdown;
}

let _topicCheckboxes: HTMLCollectionOf<HTMLInputElement>;

/**
 * Retrieves a reference to the `HTMLInputElement` topic checkboxes.
 *
 * @returns The `HTMLInputElement` topic checkboxes.
 */
export function getTopicCheckboxes(): HTMLCollectionOf<HTMLInputElement>
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
 * Retrieves a reference to the `HTMLInputElement` subject checkboxes.
 *
 * @returns The `HTMLInputElement` subject checkboxes.
 */
export function getSubjectCheckboxes(): HTMLCollectionOf<HTMLInputElement>
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
    }

    return _subjectCheckboxes;
}

let _topicFieldsets: HTMLCollectionOf<HTMLFieldSetElement>;

/**
 * Retrieves a reference to the topic `HTMLFieldsetElement`s.
 *
 * @returns The topic `HTMLFieldsetElement`s.
 */
export function getTopicFieldsets(): HTMLCollectionOf<HTMLFieldSetElement>
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
