export const topicVisibilityDropdownEventFunction = (
    htmlSelectElement: HTMLSelectElement,
    htmlFieldsetContainer: HTMLDivElement ): void =>
{
    htmlSelectElement.addEventListener("change", () => {
        if (htmlSelectElement.value === "hide" && htmlFieldsetContainer !== null && ! htmlFieldsetContainer.classList.contains("hidden"))
        {
            htmlFieldsetContainer.classList.add("hidden");
        }
        else if (htmlSelectElement.value === "show" && htmlFieldsetContainer.classList.contains("hidden"))
        {
            htmlFieldsetContainer.classList.remove("hidden");
        }
    });
};
