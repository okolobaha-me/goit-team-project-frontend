export const useVisibleBooks = (books, length) => {
    let visibleBooks = [];

    if (books?.length <= 3 || length === 'long') {
        visibleBooks = books;
    } else {
        visibleBooks = books?.slice(books?.length - 3);
    }

    return visibleBooks;
};
