import logoImgPath from "../resource/img/bookworm-transparent.png";

export const createNavbar = (): HTMLDivElement => {

    const brandContainer: HTMLDivElement = document.createElement('div');
    brandContainer.classList.add('flex', 'items-center')

    const logoImage: HTMLImageElement = document.createElement('img');
    logoImage.width = 125;
    logoImage.height = 100;
    logoImage.src = logoImgPath;
    logoImage.alt = "Bookworm logo";

    const logoBookAnchor: HTMLHeadingElement = document.createElement('h1');
    logoBookAnchor.classList.add('text-pink', 'font-bold', 'text-4xl');
    logoBookAnchor.textContent = 'Book';

    const logoWormAnchor: HTMLHeadingElement = document.createElement('h1');
    logoWormAnchor.classList.add('text-white', 'font-bold', 'text-4xl');
    logoWormAnchor.textContent = 'Worm';

    brandContainer.appendChild(logoImage);
    brandContainer.appendChild(logoBookAnchor);
    brandContainer.appendChild(logoWormAnchor);

    const home: HTMLAnchorElement = document.createElement('a');
    home.classList.add('inline-block', 'text-white', 'p-4', 'text-xl')
    home.href = './index.html';
    home.textContent = 'Home';

    const bestSellers: HTMLAnchorElement = document.createElement('a');
    bestSellers.classList.add('inline-block', 'text-white', 'p-4', 'text-xl');
    bestSellers.href = './bestsellers.html';
    bestSellers.textContent = 'Bestsellers';

    const forYou: HTMLAnchorElement = document.createElement('a');
    forYou.classList.add('inline-block', 'text-white', 'p-4', 'text-xl', 'whitespace-nowrap');
    forYou.href = './for-you.html';
    forYou.textContent = 'For You';

    const bookshelf: HTMLAnchorElement = document.createElement('a');
    bookshelf.classList.add('inline-block', 'text-white', 'p-4', 'text-xl');
    bookshelf.href = './bookshelf.html';
    bookshelf.textContent = 'Bookshelf';

    const currentPage = window.location.pathname;

    for (const headerAnchor of [home, bestSellers, forYou, bookshelf])
    {
        if (headerAnchor.href.endsWith(currentPage))
        {
            headerAnchor.classList.add('font-bold');
        }
    }

    const navLinks = document.createElement("div");
    navLinks.classList.add('flex', 'flex-nowrap');

    navLinks.appendChild(home);
    navLinks.appendChild(bestSellers);
    navLinks.appendChild(forYou);
    navLinks.appendChild(bookshelf);

    const headerContainer: HTMLDivElement = document.createElement('nav') as HTMLDivElement;
    headerContainer.classList.add('flex', 'flex-wrap', 'justify-between', 'items-center', 'w-full', 'bg-green', 'px-8');
    headerContainer.id = 'header';

    headerContainer.appendChild(brandContainer);
    headerContainer.appendChild(navLinks);

    return headerContainer;
}
