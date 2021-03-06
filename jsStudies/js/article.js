"use strict";

function Article() {
    this.created = new Date();
    var count = 0;
    Article.amount++;

    Article.lastDate = new Date();

    Article.showStats = function () {
        alert("Всего: " + Article.amount + ", последняя: " + Article.lastDate.toLocaleString("ru"));
    }
}

Article.amount = 0;

new Article();
new Article();

Article.showStats(); // Всего: 2, Последняя: (дата)

new Article();

Article.showStats(); // Всего: 3, Последняя: (дата)