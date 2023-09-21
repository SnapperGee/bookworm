import { CoverImgSize, createOpenLibBookCoverImgUrl } from "./openLibAPI";

export const createBookResultCard = (title: string, coverId: number, author: string, subjects: string[]): HTMLDivElement =>
{
    const titlePElement = document.createElement("p");
    titlePElement.classList.add("underline", "text-xl", "text-center");
    titlePElement.textContent = title;

    const coverImgUrl = createOpenLibBookCoverImgUrl(coverId, CoverImgSize.MEDIUM);

    const coverImgElement = document.createElement("img");
    coverImgElement.classList.add("mx-auto", "my-2");
    coverImgElement.src = coverImgUrl;
    coverImgElement.alt = `${title} by ${author} cover`;

    const authorPElement = document.createElement("p");
    authorPElement.classList.add("text-center");
    authorPElement.textContent = "by " + author;

    const subjectsTextSpan = document.createElement("span");
    subjectsTextSpan.classList.add("font-semibold");
    subjectsTextSpan.textContent = "Subjects";

    const subjectsPElement = document.createElement("p");
    subjectsPElement.classList.add("mt-3");
    subjectsPElement.innerHTML = `${subjectsTextSpan.outerHTML}<hr>${subjects.join(", ")}`;

    const cardDivElement = document.createElement("div");
    cardDivElement.classList.add("p-2", "bg-orange");

    cardDivElement.appendChild(titlePElement);
    cardDivElement.appendChild(coverImgElement);
    cardDivElement.appendChild(authorPElement);
    cardDivElement.appendChild(subjectsPElement);

    return cardDivElement;
}

export default createBookResultCard;
