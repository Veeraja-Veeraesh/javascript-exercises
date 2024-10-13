const getTheTitles = function(books) {
    let lst = [];
    for (const item of books) {
        lst.push(item.title);
    }
    return lst;
};

// Do not edit below this line
module.exports = getTheTitles;
