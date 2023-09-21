import { CoverImgSize, OpenLibDoc, createOpenLibBookCoverImgUrl } from "./openLibAPI";

export function createBookResultCard(openLibDoc: OpenLibDoc): HTMLDivElement;
export function createBookResultCard(title: string, coverId?: number, author?: string, subjects?: string[]): HTMLDivElement;
export function createBookResultCard(titleStringOrOpenLibDoc: string | OpenLibDoc, coverId?: number, author?: string, subjects?: string[]): HTMLDivElement
{
    if (typeof titleStringOrOpenLibDoc !== "string")
    {
        return createBookResultCard( titleStringOrOpenLibDoc.title,
                                     titleStringOrOpenLibDoc.cover_i,
                                     titleStringOrOpenLibDoc.author_name[0],
                                     titleStringOrOpenLibDoc.subject );
    }

    if (coverId === undefined || coverId === null)
    {
        throw new TypeError(`${createBookResultCard.name}: ${coverId} cover ID number.`);
    }

    if (author === undefined || author === null)
    {
        throw new TypeError(`${createBookResultCard.name}: ${author} author string.`);
    }

    if (subjects === undefined || subjects === null)
    {
        throw new TypeError(`${createBookResultCard.name}: ${subjects} subjects string array.`);
    }

    const titlePElement = document.createElement("p");
    titlePElement.classList.add("underline", "text-xl", "text-center");
    titlePElement.textContent = titleStringOrOpenLibDoc;

    const coverImgUrl = createOpenLibBookCoverImgUrl(coverId, CoverImgSize.MEDIUM);

    const coverImgElement = document.createElement("img");
    coverImgElement.classList.add("mx-auto", "my-2");
    coverImgElement.src = coverImgUrl;
    coverImgElement.alt = `${titleStringOrOpenLibDoc} by ${author} cover`;

    const authorPElement = document.createElement("p");
    authorPElement.classList.add("text-center");
    authorPElement.textContent = "by " + author;

    const subjectsTextPElement = document.createElement("p");
    subjectsTextPElement.classList.add("font-semibold", "mt-3");
    subjectsTextPElement.innerHTML = "Subjects<hr>";

    const subjectsPElement = document.createElement("p");
    subjectsPElement.classList.add("h-3", "overflow-y-scroll");
    subjectsPElement.textContent = subjects.join(", ");

    const cardDivElement = document.createElement("div");
    cardDivElement.classList.add("p-2", "bg-orange", "cursor-pointer");

    cardDivElement.appendChild(titlePElement);
    cardDivElement.appendChild(coverImgElement);
    cardDivElement.appendChild(authorPElement);
    cardDivElement.appendChild(subjectsTextPElement);
    cardDivElement.appendChild(subjectsPElement);

    return cardDivElement;
}

export default createBookResultCard;