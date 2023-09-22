export const selectAllTopicsEvent = (
    htmlButton: HTMLButtonElement,
    htmlCheckboxInputs: HTMLCollectionOf<HTMLInputElement>,
    htmlFieldsetVisibilitySelect: HTMLSelectElement,
    htmlFieldSets: HTMLCollectionOf<HTMLFieldSetElement>,
    htmlClearSubjectsButton: HTMLButtonElement ): void =>
{
    htmlButton.addEventListener("click", () => {
        for (let index = 0; index < htmlCheckboxInputs.length; ++index)
        {
            const htmlCheckBox = htmlCheckboxInputs.item(index);

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

        if (htmlFieldsetVisibilitySelect.value === "show" && htmlClearSubjectsButton.classList.contains("hidden"))
        {
            htmlClearSubjectsButton.classList.remove("hidden")
        }
    });
};

export default selectAllTopicsEvent;
