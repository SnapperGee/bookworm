/**
 * Function that associates `HTMLInputElement` checkboxes to toggle the visibility of `HTMLFieldsetElement`s.
 *
 * @param checkboxHTMLInputElements The collection of `HTMLInputElement` checkboxes to check for checked/unchecked.
 *
 * @param htmlFieldsetElements The collection of `HTMLFieldsetElement`s to make visible/hidden.
 *
 * @param htmlSelectElement The `HTMLSelectElement` to override whether to make a fieldset visible or not.
 */
export const topicCheckboxEvent = (
    checkboxHTMLInputElements: HTMLCollectionOf<HTMLInputElement>,
    htmlFieldsetElements: HTMLCollectionOf<HTMLFieldSetElement>,
    htmlSelectElement: HTMLSelectElement,
    clearSubjectsButton: HTMLButtonElement ): void =>
{
    for (let index = 0; index < checkboxHTMLInputElements.length; ++index)
    {
        const topicCheckboxHTMLInputElement = checkboxHTMLInputElements.item(index);

        topicCheckboxHTMLInputElement?.addEventListener("change", () => {
            const topicFieldset: HTMLFieldSetElement | null = htmlFieldsetElements.namedItem(topicCheckboxHTMLInputElement.name);

            // If checkbox for topic is checked and visibility is set to "show", make topic field set visible
            if (topicCheckboxHTMLInputElement.checked === true && htmlSelectElement.value === "show")
            {
                if (topicFieldset !== null && topicFieldset.classList.contains("hidden"))
                {
                    topicFieldset.classList.remove("hidden")
                }
            }
            // If checkbox is unchecked make topic fieldset hidden
            else
            {
                if (topicFieldset !== null && ! topicFieldset.classList.contains("hidden"))
                {
                    topicFieldset.classList.add("hidden")
                }

            }

            checkAllCheckedStatus:
                for (let i = 0; i < checkboxHTMLInputElements.length; ++i)
                {
                    const otherTopicCheckboxHTMLInputElement = checkboxHTMLInputElements.item(i);

                    if (otherTopicCheckboxHTMLInputElement?.checked === true && htmlSelectElement.value === "show" && clearSubjectsButton.classList.contains("hidden"))
                    {
                        clearSubjectsButton.classList.remove("hidden");
                        break checkAllCheckedStatus;
                    }

                    if ( ! clearSubjectsButton.classList.contains("hidden"))
                    {
                        clearSubjectsButton.classList.add("hidden");
                    }
                }
        });
    }
};
