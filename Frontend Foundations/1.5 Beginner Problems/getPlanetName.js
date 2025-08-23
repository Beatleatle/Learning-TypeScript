
// for switch-case statements, you need to break the loop or it will always output the last name (wth??)
// solution - break statements are REQUIRED..
function getPlanetName(id) {
    var name;
    switch(id){
        case 1:
            name = 'Mercury'
            break;
        case 2:
            name = 'Venus'
            break;
        case 3:
            name = 'Earth'
            break;
        case 4:
            name = 'Mars'
            break;
        case 5:
            name = 'Jupiter'
            break;
        case 6:
            name = 'Saturn'
            break;
        case 7:
            name = 'Uranus'
            break;
        case 8:
            name = 'Neptune'
            break; //this one is optional because its the last one.
    }

    return name
}

// a dictionary solution to the function. makes sense!
function getPlanetName2(id) {
    return {
        1: 'Mercury',
        2: 'Venus',
        3: 'Earth',
        4: 'Mars',
        5: 'Jupiter', 
        6: 'Saturn', 
        7: 'Uranus', 
        8: 'Neptune'
    }[id]
}