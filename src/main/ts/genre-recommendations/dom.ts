/**
 * @module genre-recommendations-dom
 */

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

    if (_topicCheckboxes.length !== 12)
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

    if (_subjectCheckboxes.length !== 80)
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
