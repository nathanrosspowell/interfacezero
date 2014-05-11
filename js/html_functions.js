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
function title( text ){
   return text.toLowerCase().replace(/\b[a-z]/g,function(letter){
        return letter.toUpperCase();
   });
}
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function makeTable( headings, itemsFunction, useStripes ){
    var stripe = typeof useStripes !== 'undefined' ? useStripes : true;
    var x = "";
    x += '<div class="table-responsive">';
    x += '  <table class="table table-condensed';
    if(stripe){
        x += '  table-striped';
    }
    x += '  ">';
    x += '    <thead>';
    x += '      <tr>';
    $.each(headings,function(index){
        x += '    <th>' + headings[index] +'</th>';
    });
    x += '      </tr>';
    x += '    </thead>';
    x += '    <tbody>';
    x +=        itemsFunction();
    x += '    </tbody>';
    x += '  </table>';
    x += '</div>';
    return x;
}
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function makeVerticalTable( pairs ){
    var x = "";
    x += '<div class="table-responsive">';
    x += '  <table class="table table-condensed table-striped">';
    $.each(pairs, function(index){
        var pair = pairs[index];
        x += '<tr>';
        x += '  <th scope="row">'+pair[0]+'</th>';
        x += '  <td>'+pair[1]+'</td>';
        x += '</tr>';
    });
    x += '  </table>';
    x += '</div>';
    return x;
}
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function makeInfoButton( id, title, content ){
    var x = "";
    if ( typeof content !== 'undefined' ){
        x += '<button class="btn btn-primary btn-xs" data-toggle="modal" data-target="#' + id +'">';
        x +=  '  <span class="glyphicon glyphicon-list-alt"></span>';
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
function makeXpBar( xp ){
    var levels = [
          [0,20]
        , [20,40]
        , [40,60]
        , [60,80]
        , [80,100]
    ];
    var min = 0;
    var max = 100;
    for (var i = 0; i < levels.length; i++) {
        if ( xp < levels[ i ][ 1 ] ){
            min = levels[ i ][ 0 ];
            max = levels[ i ][ 1 ];
            break;
        }
    }
    var range = max - min;
    var percentage = ( ( xp - min ) / range ) * 100;
    var x = "";
    x += '<div class="progress progress-striped active">';
    x += '  <div class="progress-bar" role="progressbar" aria-valuenow="60"'; 
    x += '  aria-valuemin="'+min+'" aria-valuemax="'+max+'" style="width: '+percentage+'%;">';
    x +=       xp + "xp";
    x += '  </div>';
    x += '</div>';
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
    x +=        augmentations( name, myJ );
    x += '      <hr/>';
    x +=        protection( name, myJ );
    x += '      <hr/>';
    x +=        armaments( name, myJ );
    x += '      <hr/>';
    x +=        gear( name, myJ );
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
    x += makeXpBar( myJ["stats"]["xp"] );
    x += makeTable( ["XP"
                    ,"Race"
                    ,"Occupation"
                    ,"Streetcred"
                    ,"Wonded"
                    ,"Exhausted"
                    ,"Money" ],function(){
        var y = "";
        y += '<tr>';
        y += '  <td>' + myJ["stats"]["xp"] + '</td>';
        y += '  <td>' + myJ["id"]["race"] + '</td>';
        y += '  <td>' + myJ["id"]["occupation"] + '</td>';
        y += '  <td>' + myJ["stats"]["streetcreed"]["current"] + '/' + myJ["stats"]["streetcreed"]["max"] +' </td>';
        y += '  <td>' + myJ["stats"]["wonded"] + '</td>';
        y += '  <td>' + myJ["stats"]["exhausted"] + '</td>';
        y += '  <td>' + myJ["stats"]["money"] + '</td>';
        y += '</tr>';
        return y;
    }, false);
    return x;
}
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function tapTable( name, myJ ){
    var x = "";
    x += makeHeading("Tap");
        x += makeTable( ["Firewall"
                    ,"Toughness"
                    ,"AMS"
                    ,"Armour"],function(){
        var y = "";
        y += '<tr>';
        y += '  <td>' + myJ["tap"]["firewall"] + '</td>';
        y += '  <td>' + myJ["tap"]["toughness"] + '</td>';
        y += '  <td>' + myJ["tap"]["ams"] + '</td>';
        y += '  <td>' + myJ["tap"]["armour"] + '</td>';
        y += '</tr>';
        return y;
    },false);
    return x;
}
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function edges( name, myJ ){
    var x = "";
    x += '<a class="anchor" id="' + edgesId( name ) +'"></a>';
    x += makeHeading('Edges and Hinderances');
    x += makeTable( ["","Name","Info",],function(){
        var y = "";
        $.each(myJ["edges"],function(index){
            var map = myJ["edges"][index];
            y += '<tr class="success">';
            y += '  <td>'
            y += '    <span class="glyphicon glyphicon-plus"></span>';
            y += '  </td>'
            y += '  <td>' + map["name"] + '</td>';
            y += '  <td>' + map["info"] + '</td>';
            y += '</tr>';
        });
        $.each(myJ["hinderances"],function(index){
            var map = myJ["hinderances"][index];
            y += '<tr class="danger">';
            y += '  <td>'
            y += '    <span class="glyphicon glyphicon-minus"></span>';
            if (map["major"] == 1){
                y += '<span class="glyphicon glyphicon-minus"></span>';
            }
            y += '  </td>'
            y += '  <td>' + map["name"] + '</td>';
            y += '  <td>' + map["info"] + '</td>';
            y += '</tr>';
        });
        return y;
    });
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
    x += '          <span class="glyphicon glyphicon-stat"></span>' + title(key);
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
        x +=      title(key);
        x += '  </li>';
        x += '</ul>';
    });
    return x;
}
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function armaments( name, myJ ){
    var x = "";
    x += '<a class="anchor" id="' + armamentsId( name ) +'"></a>';
    x += makeHeading('Armaments');
    x += makeTable( ["Name","Damage","Weight",""],function(){
        var y = "";
        $.each(myJ["armaments"],function(index){
            var map = myJ["armaments"][ index ];
            y += '<tr>';
            y += '  <td>' + map["name"] + '</td>';
            y += '  <td>' + map["damage"] + '</td>';
            y += '  <td>' + map["weight"] + '</td>';
            y += '  <td>'
            y += makeInfoButton( name+"-weapon-"+index, "Notes: "+map["name"], map["notes"] );
            y += '  <td>'
            y += '</tr>';
        });
        return y;
    });
    return x;
}
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function augmentations( name, myJ ){
    var x = "";
    x += '<a class="anchor" id="' + augmentationsId( name ) +'"></a>';
    x += makeHeading("Augmentations");
    x += makeTable( ["Name","Strain","Info"],function(){
        var y = "";
        $.each(myJ["augmentations"],function(index){
            var map = myJ["augmentations"][ index ];
            y += '  <tr>';
            y += '    <td>' + map["name"] + '</td>';
            y += '    <td>' + map["strain"] + '</td>';
            y += '    <td>' + map["info"] + '</td>';
            y += '  </tr>';
        });
        return y;
    });
    return x;
}
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function gear( name, myJ ){
    var x = "";
    x += '<a class="anchor" id="' + gearId( name ) +'"></a>';
    x += makeHeading("Gear");
    x += makeTable( ["Name","Cost","Info"],function(){
        var y = "";
        $.each(myJ["gear"],function(index){
            var map = myJ["gear"][ index ];
            y += '  <tr>';
            y += '    <td>' + map["name"] + '</td>';
            y += '    <td>'
            if ( typeof map["cost"] !== 'undefined'){
               y +=      map["cost"]
            }
            y += '    </td>'
            y += '    <td>' + map["info"] + '</td>';
            y += '  </tr>';
        });
        return y;
    });
    return x;
}
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function protection( name, myJ ){
    var map = myJ["protection"];
    var x = "";
    x += '<a class="anchor" id="' + protectionId( name ) +'"></a>';
    x += makeHeading("Protection");
    x += makeVerticalTable( [
          ["Torso", map["torso"]]
        , ["Head", map["head"]]
        , ["Arms", map["arm"]]
        , ["Life Support", map["life support"]]
        , ["Legs", map["leg"]]
        , ["Hazard Sheild", map["hazard sheild"]]
    ]);
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
    x += makeHeading('Campaigns');
    x += '<p>';
    x += '  Campaigns: ToDo';
    x += '</p>';
    return x;
}
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function notes( name, myJ ){
    var x = "";
    var notes = name + "-notes";
    var anchor = name + "-notes-id";
    x += '<a class="anchor" id="' + notesId( name ) +'"></a>';
    x += makeHeading('Notes');
    x += '<div class="panel-group" id="' + notes + '">';
    x += '  <div class="panel panel-default">';
    x += '    <div class="panel-heading">';
    x += '      <h4 class="panel-title">';
    x += '        <a data-toggle="collapse" data-parent="#"' + notes + '"" href="#' + anchor + '">';
    x += '          <span class="glyphicon glyphicon-stat"></span>' + title("hello");
    x += '        </a>';
    x += '      </h4>';
    x += '    </div>';
    x += '    <div id="' + anchor + '" class="panel-collapse collapse">';
    x += '      <div class="panel-body">';
    //x +=            attributeItems( value );
    x += '      </div>';
    x += '    </div>';
    x += '  </div>';
    x += '</div>';
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
    x += '    <li><a href="#' + augmentationsId(name)+ '">Augmentations</a></li>';
    x += '    <li class="divider"></li>';
    x += '    <li class="dropdown-header">Items</li>';
    x += '    <li><a href="#' + protectionId(name)+ '">Protection</a></li>';
    x += '    <li><a href="#' + armamentsId(name)+ '">Weapons</a></li>';
    x += '    <li><a href="#' + gearId(name)+ '">Gear</a></li>';
    x += '    <li class="divider"></li>';
    x += '    <li class="dropdown-header">Back story</li>';
    x += '    <li><a href="#' + spendingId(name)+ '">Spending</a></li>';
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