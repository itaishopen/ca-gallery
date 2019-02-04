var gProjs;
const PROJ_KEY = 'proj';


function createPortfolios() {
    var porjs = loadFromStorage(PROJ_KEY);
    if (!porjs || porjs.length === 0) {
        porjs = []
        var projIds = ['book-shop', 'minesweeper'];
        var projNames = ['Book shop', 'Minesweeper game'];
        var titles = ['Menage the store', 'Find those mines'];
        var descs = ['A simple book store manage platform', 'The most nostalgic game remastered to work on your browser'];
        var time = [1561399260000, 1548352860000];
        var labels = [['book store', 'site manage'], ['oldie game', 'fun game']];
        for (var i=0; i < projNames.length; i++) {
            porjs.push(createPortfolio(projIds[i], projNames[i], titles[i], descs[i], time[i], labels[i]));
        }
        saveToStorage(PROJ_KEY, porjs);
    }
    return porjs;
}

function createPortfolio(id, name, title, desc, time, label) {
    return {
        id: id,
        name: name,
        title: title,
        desc: desc,
        url: `img/portfolio/${id}.jpg`,
        publishedAt: time,
        labels: label,
    }   
    
}