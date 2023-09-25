import logoImgPath from "../resource/img/bookworm-transparent.png";

export const createNavbar = (): HTMLDivElement => {

    const headerContainer: HTMLDivElement = document.createElement('nav') as HTMLDivElement;
    headerContainer.classList.add('w-full', 'bg-green');
    headerContainer.id = 'header';

    const navBlock: HTMLDivElement = document.createElement('div');
    navBlock.classList.add('w-full', 'container','mx-auto','flex','flex-wrap','items-center', 'justify-between', 'mt-0', 'p-2', 'lg:py-6');

    const brandContainer: HTMLDivElement = document.createElement('div');
    brandContainer.classList.add('pl-4', 'flex', 'items-center')

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

    const invisibleBlock: HTMLDivElement = document.createElement('div');
    invisibleBlock.classList.add('w-full', 'lg:flex', 'lg:w-auto', 'mt-2', 'lg:mt-0', 'p-4', 'lg:p-0');
    invisibleBlock.id = 'nav-content';

    const navList: HTMLUListElement = document.createElement('ul');
    navList.classList.add('list-reset', 'lg:flex', 'justify-end', 'flex-1', 'items-center');

    const navLinks: HTMLLIElement = document.createElement('li');
    navLinks.classList.add('mr-3');

    const home: HTMLAnchorElement = document.createElement('a');
    home.classList.add('inline-block', 'text-white', 'p-4', 'text-xl')
    home.href = './index.html';
    home.textContent = 'Home';

    const bestSellers: HTMLAnchorElement = document.createElement('a');
    bestSellers.classList.add('inline-block', 'text-white', 'p-4', 'text-xl');
    bestSellers.href = './bestsellers.html';
    bestSellers.textContent = 'Bestsellers';

    const forYou: HTMLAnchorElement = document.createElement('a');
    forYou.classList.add('inline-block', 'text-white', 'p-4', 'text-xl');
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

    headerContainer.appendChild(navBlock);
    navBlock.appendChild(brandContainer);
    brandContainer.appendChild(logoImage);
    brandContainer.appendChild(logoBookAnchor);
    brandContainer.appendChild(logoWormAnchor);
    navBlock.appendChild(invisibleBlock);
    navBlock.appendChild(navList);
    navList.appendChild(navLinks);
    navLinks.appendChild(home);
    navLinks.appendChild(bestSellers);
    navLinks.appendChild(forYou);
    navLinks.appendChild(bookshelf);

    return headerContainer;
}
