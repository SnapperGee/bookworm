export const selectAllTopicsEventFunction = (
    htmlButton: HTMLButtonElement,
    htlmCheckboxInputs: HTMLCollectionOf<HTMLInputElement>,
    htmlFieldsetVisibilitySelect: HTMLSelectElement,
    htmlFieldSets: HTMLCollectionOf<HTMLFieldSetElement> ): void =>
{
    htmlButton.addEventListener("click", () => {
        for (let index = 0; index < htlmCheckboxInputs.length; ++index)
        {
            const htmlCheckBox = htlmCheckboxInputs.item(index);

            if (htmlCheckBox?.checked === false)
            {
                htmlCheckBox.checked = true;
            }
        }

        if (htmlFieldsetVisibilitySelect.value === "show")
        {
            for (let index = 0; index < htmlFieldSets.length; ++index)
            {
                const htmlFieldset = htmlFieldSets.item(index);

                if (htmlFieldset?.classList.contains("hidden"))
                {
                    htmlFieldset.classList.remove("hidden")
                }
            }
        }
    });
};

export default selectAllTopicsEventFunction;
