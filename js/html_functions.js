//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ID helper functions
function characterId( name ){
    return name + "-character";
}
function skillsId( name ){
    return name + "-skills";
}
function edgesId( name ){
    return name + "-edges";
}
function accordionId( name ){
    return name + "-accordion";
}
function armamentsId( name ){
    return name + "-armaments";
}
function augmentationsId( name ){
    return name + "-augmentations";
}
function gearId( name ){
    return name + "-gear";
}
function protectionId( name ){
    return name + "-protection";
}
function spendingId( name ){
    return name + "-spending";
}
function campaignsId( name ){
    return name + "-campaigns";
}
function notesId( name ){
    return name + "-notes";
}
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function makeHeading( text ){
   return "<h3>" + text + "</h3>";
}
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function makeModal( id, button, title, content ){
    var x = "";
    if ( typeof content !== 'undefined' ){
        x += '<button class="btn btn-primary" data-toggle="modal" data-target="#' + id +'">';
        x +=    button;
        x += '</button>';
        x += '<div id="' + id + '" class="modal fade bs-example-modal-sm" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">';
        x += '  <div class="modal-dialog modal-sm">';
        x += '    <div class="modal-content">';
        x += '      <div class="modal-header">';
        x += '        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>';
        x += '        <h4 class="modal-title">';
        x +=            title
        x += '        </h4>';
        x += '      </div>';
        x += '      <div class="modal-body">';
        x +=          content;
        x += '      </div>';
        x += '    </div>';
        x += '  </div>';
        x += '</div>';
    }
    return x;
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
    x += '      <hr/>';
    x +=        tapTable( name, myJ );
    x += '      <hr/>';
    x +=        edges( name, myJ );
    x += '      <hr/>';
    x +=        statsAccordion( name, myJ );
    x += '      <hr/>';
    x +=        armaments( name, myJ );
    x += '      <hr/>';
    x +=        augmentations( name, myJ );
    x += '      <hr/>';
    x +=        gear( name, myJ );
    x += '      <hr/>';
    x +=        protection( name, myJ );
    x += '      <hr/>';
    x +=        spending( name, myJ );
    x += '      <hr/>';
    x +=        campaigns( name, myJ );
    x += '      <hr/>';
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
    x += makeHeading("Tap");
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
function edges( name, myJ ){
    var x = "";
    x += '<a class="anchor" id="' + edgesId( name ) +'"></a>';
    x +=  makeHeading('Edges and Hinderances');
    x += '<div class="table-responsive">';
    x += '  <table class="table table-condensed">';
    x += '    <thead>';
    x += '      <tr>';
    x += '        <th></th>';
    x += '        <th>Name</th>';
    x += '        <th>Info</th>';
    x += '      </tr>';
    x += '    </thead>';
    x += '    <tbody>';
    $.each(myJ["edges"],function(index){
        var map = myJ["edges"][index];
        x += '  <tr class="success">';
        x += '    <td>'
        x += '      <span class="glyphicon glyphicon-plus"></span>';
        x += '    </td>'
        x += '    <td>' + map["name"] + '</td>';
        x += '    <td>' + map["info"] + '</td>';
        x += '  </tr>';
    });
    $.each(myJ["hinderances"],function(index){
        var map = myJ["hinderances"][index];
        x += '  <tr class="danger">';
        x += '    <td>'
        x += '      <span class="glyphicon glyphicon-minus"></span>';
        if (map["major"] == 1){
            x += '  <span class="glyphicon glyphicon-minus"></span>';
        }
        x += '    </td>'
        x += '    <td>' + map["name"] + '</td>';
        x += '    <td>' + map["info"] + '</td>';
        x += '  </tr>';
    });
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
    x += makeHeading("Skills");
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
function armaments( name, myJ ){
    var x = "";
    x += '<a class="anchor" id="' + armamentsId( name ) +'"></a>';
    x +=  makeHeading('Armaments');
    x += '<div class="table-responsive">';
    x += '  <table class="table table-condensed table-striped">';
    x += '    <thead>';
    x += '      <tr>';
    x += '        <th>Name</th>';
    x += '        <th>Damage</th>';
    x += '        <th>Weight</th>';
    x += '        <th>Notes</th>';
    x += '      </tr>';
    x += '    </thead>';
    x += '    <tbody>';
    $.each(myJ["armaments"],function(index){
        var map = myJ["armaments"][ index ];
        x += '  <tr>';
        x += '    <td>' + map["name"] + '</td>';
        x += '    <td>' + map["damage"] + '</td>';
        x += '    <td>' + map["weight"] + '</td>';
        x += '    <td>'
        x += makeModal( name+"-weapon-"+index,"", "Notes: "+map["name"], map["notes"] );
        x += '    <td>'
        x += '  </tr>';
    });
    x += '    </tbody>';
    x += '  </table>';
    x += '</div>';
    return x;
}
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function augmentations( name, myJ ){
    var x = "";
    x += '<a class="anchor" id="' + augmentationsId( name ) +'"></a>';
    x += makeHeading("Augmentations");
    return x;

}
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function gear( name, myJ ){
    var x = "";
    x += '<a class="anchor" id="' + gearId( name ) +'"></a>';
    x += makeHeading("Gear");
    x += '<div class="table-responsive">';
    x += '  <table class="table table-condensed">';
    x += '    <thead>';
    x += '      <tr>';
    x += '        <th>Name</th>';
    x += '        <th>Cost</th>';
    x += '        <th>Info</th>';
    x += '      </tr>';
    x += '    </thead>';
    x += '    <tbody>';
    $.each(myJ["gear"],function(index){
        var map = myJ["gear"][ index ];
        x += '  <tr>';
        x += '    <td>' + map["name"] + '</td>';
        x += '    <td>'
        if ( typeof map["cost"] !== 'undefined'){
           x +=      map["cost"]
        }
        x += '    </td>'
        x += '    <td>' + map["info"] + '</td>';
        x += '  </tr>';
    });
    x += '    </tbody>';
    x += '  </table>';
    x += '</div>';
    return x;
}
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function protection( name, myJ ){
    var x = "";
    x += '<a class="anchor" id="' + protectionId( name ) +'"></a>';
    x += makeHeading("Protection");
    return x;
}
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function spending( name, myJ ){
    var x = "";
    x += '<a class="anchor" id="' + spendingId( name ) +'"></a>';
    x += makeHeading("Spending");
    return x;
}
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function campaigns( name, myJ ){
    var x = "";
    x += '<a class="anchor" id="' + campaignsId( name ) +'"></a>';
    x +=  makeHeading('Campaigns');
    x += '<p>';
    x += '  Campaigns: ToDo';
    x += '</p>';
    return x;
}
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function notes( name, myJ ){
    var x = "";
    x += '<a class="anchor" id="' + notesId( name ) +'"></a>';
    x +=  makeHeading('Notes');
    x += '<p>';
    x += '  Notes: ToDo';
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
    x += '    <li><a href="#' + characterId(name)+ '">' + myJ["id"]["name"] + '</a></li>';
    x += '    <li class="divider"></li>';
    x += '    <li class="dropdown-header">Stats</li>';
    x += '    <li><a href="#' + edgesId(name)+ '">Edges and Hinderances</a></li>';
    x += '    <li><a href="#' + skillsId(name)+ '">Skills</a></li>';
    x += '    <li><a href="#' + armamentsId(name)+ '">Weapons</a></li>';
    x += '    <li><a href="#' + augmentationsId(name)+ '">Augmentations</a></li>';
    x += '    <li class="divider"></li>';
    x += '    <li class="dropdown-header">Items</li>';
    x += '    <li><a href="#' + gearId(name)+ '">Gear</a></li>';
    x += '    <li><a href="#' + protectionId(name)+ '">Protection</a></li>';
    x += '    <li class="divider"></li>';
    x += '    <li class="dropdown-header">Back story</li>';
    x += '    <li><a href="#' + spendingId(name)+ '">spending</a></li>';
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