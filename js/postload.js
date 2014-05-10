//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ID helper functions
function characterId( name ){
    return name + "-character";
}
function skillsId( name ){
    return name + "-skills";
}
function accordionId( name ){
    return name + "-accordion";
}
function weaponsId( name ){
    return name + "-weapons";
}
function campaignsId( name ){
    return name + "-campaigns";
}
function notesId( name ){
    return name + "-notes";
}
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function createCharacterPanel( name, myJ ){
    var x = "";
    x += '<a class="anchor" id="' + characterId(name) +'"></a>';
    x += '<div class="panel panel-default">';
    x += '  <div class="panel-heading">';
    x += '    <h3 class="panel-title">';
    x += '      <span class="glyphicon glyphicon-user"></span>';
    x +=        myJ["id"]["name"];
    x += '    </h3>';
    x += '  </div>'; // Close panel-heading
    x += '  <div class="panel-body">';
    x +=        idTable( name, myJ );
    x +=        tapTable( name, myJ );
    x +=        statsAccordion( name, myJ );
    x +=        weapons( name, myJ );
    x +=        campaigns( name, myJ );
    x +=        notes( name, myJ );
    x += '  </div>';
    x += '</div>';
    return x;
}
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function idTable( name, myJ ){
    var x = "";
    x += '<div class="table-responsive">';
    x += '  <table class="table table-condensed">';
    x += '    <thead>';
    x += '      <tr>';
    x += '        <th>XP</th>';
    x += '        <th>Race</th>';
    x += '        <th>Occupation</th>';
    x += '        <th>Streetcred</th>';
    x += '        <th>Wonded</th>';
    x += '        <th>Exhausted</th>';
    x += '        <th>Money</th>';
    x += '      </tr>';
    x += '    </thead>';
    x += '    <tbody>';
    x += '      <tr>';
    x += '        <td>' + myJ["stats"]["xp"] + '</td>';
    x += '        <td>' + myJ["id"]["race"] + '</td>';
    x += '        <td>' + myJ["id"]["occupation"] + '</td>';
    x += '        <td>' + myJ["stats"]["streetcreed"]["current"] + '/' + myJ["stats"]["streetcreed"]["max"] +' </td>';
    x += '        <td>' + myJ["stats"]["wonded"] + '</td>';
    x += '        <td>' + myJ["stats"]["exhausted"] + '</td>';
    x += '        <td>' + myJ["stats"]["money"] + '</td>';
    x += '    </tr>';
    x += '    </tbody>';
    x += '  </table>';
    x += '</div>';
    return x;
}
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function tapTable( name, myJ ){
    var x = "";
    x += '<div class="table-responsive">';
    x += '  <table class="table table-condensed">';
    x += '    <thead>';
    x += '      <tr>';
    x += '        <th>Firewall</th>';
    x += '        <th>Toughness</th>';
    x += '        <th>AMS</th>';
    x += '        <th>Armour</th>';
    x += '      </tr>';
    x += '    </thead>';
    x += '    <tbody>';
    x += '      <tr>';
    x += '        <td>' + myJ["tap"]["firewall"] + '</td>';
    x += '        <td>' + myJ["tap"]["toughness"] + '</td>';
    x += '        <td>' + myJ["tap"]["ams"] + '</td>';
    x += '        <td>' + myJ["tap"]["armour"] + '</td>';
    x += '    </tr>';
    x += '    </tbody>';
    x += '  </table>';
    x += '</div>';
    return x;
}
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function statsAccordion( name, myJ ){
    var accordion = accordionId( name )
    var x = "";
    x += '<a class="anchor" id="' + skillsId( name ) +'"></a>';
    x += '<div class="panel-group">';
    $.each(myJ["skills"],function(key,value){
        var anchor = name + "-" + key;
        x += statEntry( key, value, accordion, anchor );
    });
    x += '</div>';
    return x;
}
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function statEntry( key, value, accordion, anchor ){
    var x = "";
    x += '<div class="panel-group" id="' + accordion + '">';
    x += '  <div class="panel panel-default">';
    x += '    <div class="panel-heading">';
    x += '      <h4 class="panel-title">';
    x += '        <a data-toggle="collapse" data-parent="#"' + accordion + '"" href="#' + anchor + '">';
    x += '          <span class="badge">' + value["value"] + '</span>';
    x += '          <span class="glyphicon glyphicon-stat"></span>' + key;
    x += '        </a>';
    x += '      </h4>';
    x += '    </div>';
    x += '    <div id="' + anchor + '" class="panel-collapse collapse">';
    x += '      <div class="panel-body">';
    x +=            attributeItems( value );
    x += '      </div>';
    x += '    </div>';
    x += '  </div>';
    x += '</div>';
    return x;
}
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function attributeItems( value ){
    var x = "";
    $.each(value["skills"],function(key,value){
        x += '<ul class="list-group">';
        x += '  <li class="list-group-item">';
        x += '    <span class="badge">' + value + '</span>';
        x +=      key;
        x += '  </li>';
        x += '</ul>';
    });
    return x;
}
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function weapons( name, myJ ){
    var x = "";
    x += '<a class="anchor" id="' + weaponsId( name ) +'"></a>';
    x += '<p>';
    x += '  Weapons';
    x += '</p>';
    return x;
}
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function campaigns( name, myJ ){
    var x = "";
    x += '<a class="anchor" id="' + campaignsId( name ) +'"></a>';
    x += '<p>';
    x += '  campaigns';
    x += '</p>';
    return x;
}
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function notes( name, myJ ){
    var x = "";
    x += '<a class="anchor" id="' + notesId( name ) +'"></a>';
    x += '<p>';
    x += '  Notes';
    x += '</p>';
    return x;
}
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function createCharacterDropdown( name, myJ ) {
    var shortName = myJ["id"]["name"].split(" ")[ 0 ];
    var x = "";
    x += '<li class="dropdown">';
    x += '  <a href="#" class="dropdown-toggle" data-toggle="dropdown">' + shortName + '<b class="caret"></b></a>';
    x += '  <ul class="dropdown-menu">';
    x += '    <li><a href="#' + characterId(name)+ '">Identity</a></li>';
    x += '    <li class="divider"></li>';
    x += '    <li class="dropdown-header">Stats</li>';
    x += '    <li><a href="#' + skillsId(name)+ '">Skills</a></li>';
    x += '    <li><a href="#' + weaponsId(name)+ '">Weapons</a></li>';
    x += '    <li class="divider"></li>';
    x += '    <li class="dropdown-header">Back story</li>';
    x += '    <li><a href="#' + campaignsId(name)+ '">Campaigns</a></li>';
    x += '    <li><a href="#' + notesId(name)+ '">Notes</a></li>';
    x += '  </ul>';
    x += '</li>';
    return x;
}
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function addHtmlForYaml( name, myJ ) {
    // Add the html for the stats
    var html = createCharacterPanel( name, myJ );
    $("#interfacezero-main").append(html)
    // Close that accordion.
    $('#'+skillsId(name)).collapse("hide");
    // Add the html for the navigation.
    var dropdown = createCharacterDropdown( name, myJ );
    $("#interfacezero-navbar").append(dropdown);
}
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// This is what executes
$(window).bind("load", function() {
    var yamlFiles = [
          'trigger_finger'
        , 'derp_man'
    ];
    yamlFiles.forEach( function(yamlFile){
        $.ajax({
            url: 'yaml/' + yamlFile + '.yaml',
            async: false,
            success: function (data){
                addHtmlForYaml(yamlFile,jsyaml.load(data));
            }
        });
    });
    $("body").scrollspy();
});
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
