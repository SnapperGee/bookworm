export const assignHTMLInputElementCheckChangeFunction = (
    checkboxHTMLInputElements: HTMLCollectionOf<HTMLInputElement>,
    htmlFieldsetElements: HTMLCollectionOf<HTMLFieldSetElement> ): void =>
{
    for (let index = 0; index < checkboxHTMLInputElements.length; ++index)
    {
        const topicCheckboxHTMLInputElement = checkboxHTMLInputElements.item(index);

        topicCheckboxHTMLInputElement?.addEventListener("change", () => {
            const topicFieldset: HTMLFieldSetElement | null = htmlFieldsetElements.namedItem(topicCheckboxHTMLInputElement.name);

            if (topicCheckboxHTMLInputElement.checked === true)
            {
                if (topicFieldset !== null && topicFieldset.classList.contains("hidden"))
                {
                    topicFieldset.classList.remove("hidden")
                }
            }
            else
            {
                if (topicFieldset !== null && ! topicFieldset.classList.contains("hidden"))
                {
                    topicFieldset.classList.add("hidden")
                }
            }
        });
    }
};
