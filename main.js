var elems = $('.card-header:contains(Menu)').siblings('.card-body').find('small');

for (var i = 0; i < elems.length; i++) {
    var text = $(elems).eq(i).html();
    if (!text.includes('xp')) {
        continue;
    }

    var split = text.split('\n');

    if (split.length < 5) {
        continue;
    }

    var curLvl = Number(split[2]);
    var curXP = Number(split[4]);

    let points = 0;
    let output = 0;

    for (var lvl = 1; lvl <= curLvl; lvl++) {
        points += Math.floor(lvl + 300 * Math.pow(2, lvl / 7.));
        output = Math.floor(points / 4);
    }

    let xpNeeded = output - curXP;

    text += '/' + xpNeeded + ' xp';

    $(elems).eq(i).html(text);
}
