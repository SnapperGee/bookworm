export const topicVisibilityDropdownEvent = (
    htmlSelectElement: HTMLSelectElement,
    htmlCheckboxInputCollection: HTMLCollectionOf<HTMLInputElement>,
    htmlFieldsetCollection: HTMLCollectionOf<HTMLFieldSetElement>,
    htmlClearSubjectsButton: HTMLButtonElement ): void =>
{
    htmlSelectElement.addEventListener("change", () => {

        if (htmlSelectElement.value === "hide" && ! htmlClearSubjectsButton.classList.contains("hidden"))
        {
            htmlClearSubjectsButton.classList.add("hidden")
        }
        else if (htmlSelectElement.value === "show" && htmlClearSubjectsButton.classList.contains("hidden"))
        {
            htmlClearSubjectsButton.classList.remove("hidden")
        }

        for (let index = 0; index < htmlCheckboxInputCollection.length; ++index)
        {
            const topicCheckboxHTMLInputElement = htmlCheckboxInputCollection.item(index);

            const htmlFieldsetElement = topicCheckboxHTMLInputElement !== null ? htmlFieldsetCollection.namedItem(topicCheckboxHTMLInputElement.name) : null;

            if (htmlSelectElement.value === "hide" && htmlFieldsetElement !== null && ! htmlFieldsetElement.classList.contains("hidden"))
            {
                htmlFieldsetElement.classList.add("hidden");
            }
            else if (htmlSelectElement.value === "show" && topicCheckboxHTMLInputElement?.checked === true && htmlFieldsetElement !== null && htmlFieldsetElement.classList.contains("hidden"))
            {
                htmlFieldsetElement.classList.remove("hidden");
            }
        }
    });
};
