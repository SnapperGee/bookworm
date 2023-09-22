export const deselectAllTopicsEvent = (
    htmlButton: HTMLButtonElement,
    htmlCheckboxInputs: HTMLCollectionOf<HTMLInputElement>,
    htmlFieldSets: HTMLCollectionOf<HTMLFieldSetElement>,
    htmlClearSubjectsButton: HTMLButtonElement ): void =>
{
    htmlButton.addEventListener("click", () => {
        for (let index = 0; index < htmlCheckboxInputs.length; ++index)
        {
            const htmlCheckBox = htmlCheckboxInputs.item(index);

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

        if ( ! htmlClearSubjectsButton.classList.contains("hidden"))
        {
            htmlClearSubjectsButton.classList.add("hidden")
        }
    });
};

export default deselectAllTopicsEvent;
