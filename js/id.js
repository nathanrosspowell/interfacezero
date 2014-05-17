//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Name should be a unique id for each player chartacter, which has no spaces.
// These funcitons are used to generate the #anchors for navigation.
// Currently using the YAML file name is working well.
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function characterId(name) {
    return name + "-character";
}

function skillsId(name) {
    return name + "-skills";
}

function identificationId(name) {
    return name + "-stats";
}

function tapId(name) {
    return name + "-tap";
}

function edgesId(name) {
    return name + "-edges";
}

function armamentsId(name) {
    return name + "-armaments";
}

function augmentationsId(name) {
    return name + "-augmentations";
}

function gearId(name) {
    return name + "-gear";
}

function protectionId(name) {
    return name + "-protection";
}

function spendingId(name) {
    return name + "-spending";
}

function notesId(name) {
    return name + "-notes";
}

function contactsId(name) {
    return name + "-contacts";
}

function powersId(name) {
    return name + "-powers";
}

function vehiclesId(name) {
    return name + "-vehicles";
}
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~