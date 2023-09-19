type CheckboxInfo = {htmlInputElement: HTMLInputElement, id: string, name: string};

export class CheckboxCollection
{
    readonly #htmlCheckboxInputCollection: HTMLCollectionOf<HTMLInputElement>;

    public constructor(htmlInputCollection: NonNullable<HTMLCollectionOf<NonNullable<HTMLInputElement>>>)
    {
        if (htmlInputCollection === undefined || htmlInputCollection === null)
        {
            throw new TypeError(`${new.target.name}: ${htmlInputCollection} HTML input element collection.`);
        }

        for (let index = 0; index < htmlInputCollection.length; ++index)
        {
            const htmlEl = htmlInputCollection.item(index);

            if ( ! (htmlEl instanceof HTMLInputElement))
            {
                throw new TypeError(`${new.target.name}: ${htmlEl === null ? "null" : "non " + HTMLInputElement.name}.`);
            }

            if (htmlEl.type !== "checkbox")
            {
                throw new TypeError(`${new.target.name}: ${HTMLInputElement.name} with non-checkbox type: "${htmlEl.type}"`);
            }
        }

        this.#htmlCheckboxInputCollection = htmlInputCollection;
    }

    public get HTMLCheckboxInputCollection(): HTMLCollectionOf<HTMLInputElement> { return this.#htmlCheckboxInputCollection; }

    public checked(): CheckboxInfo[]
    {
        const htmlInputElementArray: CheckboxInfo[] = [];

        for (let index = 0; index < this.#htmlCheckboxInputCollection.length; ++index)
        {
            const checkBoxHTMLInputElement = this.#htmlCheckboxInputCollection.item(index);

            if (checkBoxHTMLInputElement?.checked === true)
            {
                const checkBoxInputInfo = {
                    htmlInputElement: checkBoxHTMLInputElement,
                    id: checkBoxHTMLInputElement.id,
                    name: checkBoxHTMLInputElement.name };

                htmlInputElementArray.push(checkBoxInputInfo);
            }
        }

        return htmlInputElementArray;
    }

    public unchecked(): CheckboxInfo[]
    {
        const htmlInputElementArray: Readonly<CheckboxInfo>[] = [];

        for (let index = 0; index < this.#htmlCheckboxInputCollection.length; ++index)
        {
            const checkBoxHTMLInputElement = this.#htmlCheckboxInputCollection.item(index);

            if (checkBoxHTMLInputElement?.checked === false)
            {
                const checkBoxInputInfo = {
                    htmlInputElement: checkBoxHTMLInputElement,
                    id: checkBoxHTMLInputElement.id,
                    name: checkBoxHTMLInputElement.name };

                htmlInputElementArray.push(checkBoxInputInfo);
            }
        }

        return htmlInputElementArray;
    }
}

export const checkboxCollection = (htmlInputCollection: HTMLCollectionOf<HTMLInputElement>): CheckboxCollection =>
{
    if (htmlInputCollection === undefined || htmlInputCollection === null)
    {
        throw new TypeError(`${checkboxCollection.name}: ${htmlInputCollection} HTML input element collection.`);
    }

    return new CheckboxCollection(htmlInputCollection);
}

export default checkboxCollection;