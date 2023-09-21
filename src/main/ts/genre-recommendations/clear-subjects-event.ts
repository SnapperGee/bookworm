export const clearSubjectsEvent = ( htmlButton: HTMLButtonElement,
                                    htmlCheckboxesInput: HTMLCollectionOf<HTMLInputElement> ): void =>
{
    htmlButton.addEventListener("click", () => {
        for (let index = 0; index < htmlCheckboxesInput.length; ++index)
        {
            const htmlCheckbox = htmlCheckboxesInput.item(index);

            if (htmlCheckbox?.checked === true)
            {
                htmlCheckbox.checked = false;
            }
        }
    });
}
