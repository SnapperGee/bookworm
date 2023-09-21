export const deselectAllTopicsEventFunction = (
    htmlButton: HTMLButtonElement,
    htlmCheckboxInputs: HTMLCollectionOf<HTMLInputElement>,
    htmlFieldSets: HTMLCollectionOf<HTMLFieldSetElement> ): void =>
{
    htmlButton.addEventListener("click", () => {
        for (let index = 0; index < htlmCheckboxInputs.length; ++index)
        {
            const htmlCheckBox = htlmCheckboxInputs.item(index);

            if (htmlCheckBox?.checked === true)
            {
                htmlCheckBox.checked = false;
            }
        }

        for (let index = 0; index < htmlFieldSets.length; ++index)
        {
            const htmlFieldset = htmlFieldSets.item(index);

            if (htmlFieldset !== null && ! htmlFieldset.classList.contains("hidden"))
            {
                htmlFieldset.classList.add("hidden")
            }
        }
    });
};

export default deselectAllTopicsEventFunction;
