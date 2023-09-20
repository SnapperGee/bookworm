export const topicVisibilityDropdownEventFunction = (
    htmlSelectElement: HTMLSelectElement,
    htmlCheckboxInputCollection: HTMLCollectionOf<HTMLInputElement>,
    htmlFieldsetCollection: HTMLCollectionOf<HTMLFieldSetElement> ): void =>
{
    htmlSelectElement.addEventListener("change", () => {
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
