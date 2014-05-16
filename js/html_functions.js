//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ID helper functions
function characterId( name ){
    return name + "-character";
}
function skillsId( name ){
    return name + "-skills";
}
function identificationId( name ){
    return name + "-stats";
}
function tapId( name ){
    return name + "-tap";
}
function edgesId( name ){
    return name + "-edges";
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
function notesId( name ){
    return name + "-notes";
}
function contactsId( name ){
    return name + "-contacts";
}
function powersId( name ){
    return name + "-powers";
}
function vehiclesId( name ){
    return name + "-vehicles";
}
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function makeHeading( text ){
   return "<h3>" + text + "</h3>";
}
function replaceSpaces( text ){
    return text.replace(/\s+/g, '');
}
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function title( text ){
   return text.toLowerCase().replace(/\b[a-z]/g,function(letter){
        return letter.toUpperCase();
   });
}
function shortName( myJ ){
    return myJ["id"]["name"].split(" ")[ 0 ];
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
    if (headings.length > 0){
        x += '<thead>';
        x += '  <tr>';
        $.each(headings,function(index){
            x += '<th>' + headings[index] +'</th>';
        });
        x += '  </tr>';
        x += '</thead>';
    }
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
        x += '  <td>';
        if (pair[1] !== null){
            x += pair[1];
        }
        x += '  </td>'
        x += '</tr>';
    });
    x += '  </table>';
    x += '</div>';
    return x;
}
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function makeModal( id, button, buttonStyle, size, title, content ){
    var x = "";
    if (typeof content !== 'undefined' && content !== null){
        x += '<button class="btn '+buttonStyle+' btn-'+size+'" data-toggle="modal" data-target="#' + id +'">';
        x +=     button;
        x += '</button>';
        x += '<div id="' + id + '" class="modal fade bs-example-modal-'+size+'" tabindex="-1"';
        x +=     ' role="dialog" aria-labelledby="'+id+'" aria-hidden="true">';
        x += '  <div class="modal-dialog modal-'+size+'">';
        x += '    <div class="modal-content">';
        x += '      <div class="modal-header">';
        x += '        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>';
        x += '        <h4 class="modal-title">';
        x +=            title;
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
function makeInfoModal( id, title, content ){
    var button = '<span class="glyphicon glyphicon-list-alt"></span>';
    var size = 'xs';
    var buttonStyle = 'btn-primary';
    return makeModal( id, button, buttonStyle, size, title, content );
}
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function makeBigModal( id, button, content ){
    var title = button;
    var size = 'lg';
    var buttonStyle = 'btn-default';
    return makeModal( id, button, buttonStyle, size, title, content );
}
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function makeCharacterDescription(character,race,occupation,xp ){
    var levels = [
          [0,"Novice"]
        , [20,"Seasoned"]
        , [40,"Veteran"]
        , [60,"Heroic"]
        , [80,"Legendary"]
    ];
    var level = levels[0][1];
    for (var i = 0; i < levels.length; i++) {
        if ( xp < levels[ i ][ 0 ] ){
            level = levels[ i ][ 1 ];
            break;
        }
    }
    var an = "a";
    var vowels = ['a','e','i','o','u'];
    var firstChar = level[0].toLowerCase();
    for (var i = 0; i < vowels.length; i++) {
        if (firstChar[0] == vowels[i]){
            an = "an";
            break;
        }
    }
    return character + ' is ' + an + ' <u>' + level + '</u> <u>' 
        + race + '</u> <u>' 
        + occupation + '</u> with <u>' 
        + xp + '</u> experience points.';
};
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function makeXpBar( xp ){
    var levels = [
          [0,20]// use this to set the range for the bar
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
    var percentage = ( ( xp - min ) / range  ) * 100;
    var x = "";
    x += '<div class="progress progress-striped active">';
    x += '  <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="'+percentage+'"'; 
    x += '  aria-valuemin="'+levels[0][0]+'" aria-valuemax="'+levels[0][1]+'" style="width: '+percentage+'%;">';
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
    x += '      <span class="glyphicon glyphicon-user"></span>&nbsp';
    x +=        myJ["id"]["name"];
    x += '    </h3>';
    x += '  </div>'; // Close panel-heading
    x += '  <div class="panel-body">';
    x +=        identification( name, myJ );
    x += '      <hr/>';
    x +=        tap( name, myJ );
    x += '      <hr/>';
    x +=        edges( name, myJ );
    x += '      <hr/>';
    x +=        skills( name, myJ );
    x += '      <hr/>';
    x +=        augmentations( name, myJ );
    x += '      <hr/>';
    x +=        protection( name, myJ );
    x += '      <hr/>';
    x +=        powers( name, myJ );
    x += '      <hr/>';
    x +=        armaments( name, myJ );
    x += '      <hr/>';
    x +=        gear( name, myJ );
    x += '      <hr/>';
    x +=        vehicles( name, myJ );
    x += '      <hr/>';
    x +=        contacts( name, myJ );
    x += '      <hr/>';
    x +=        spending( name, myJ );
    x += '      <hr/>';
    x +=        notes( name, myJ );
    x += '  </div>';
    x += '</div>';
    return x;
}
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function identification( name, myJ ){
    var map = myJ["stats"];
    var x = "";
    x += '<a class="anchor" id="' + identificationId( name ) +'"></a>';
    x+= '<p>';
    x += makeCharacterDescription(myJ["id"]["name"],myJ["id"]["race"],myJ["id"]["occupation"],myJ["stats"]["xp"]); 
    x+= '&nbsp';
    x += makeModal(name+"-backstory"
        ,shortName(myJ)+"'s Backstory"
        , "xs"
        , myJ["id"]["name"]+"'s Backstory"
        ,myJ["id"]["backstory"]);
    x+= '</p>'
    x += makeXpBar(myJ["stats"]["xp"]);
    x += makeVerticalTable( [
          ["Money", map["money"]]
        , ["Streetcred", map["streetcreed"]["current"] + '/' + map["streetcreed"]["max"]]
        , ["Wonded", map["wonded"]]
        , ["Exhausted", map["exhausted"]]
    ]);
    
    return x;
}
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function tap( name, myJ ){
    var map = myJ["tap"];
    var x = "";
    x += '<a class="anchor" id="' + tapId( name ) +'"></a>';
    x += makeHeading("Tap");
    x += makeVerticalTable([
          ["Firewall", map["firewall"]]
        , ["Toughness", map["toughness"]]
        , ["AMS", map["toughness"]]
        , ["Armor", map["toughness"]]
    ]);
    return x;
}
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function edges( name, myJ ){
    var x = "";
    x += '<a class="anchor" id="' + edgesId( name ) +'"></a>';
    x += makeHeading('Edges and Hinderances');
    x += makeTable( [],function(){
        var y = "";
        $.each(myJ["edges"],function(index){
            var map = myJ["edges"][index];
            var id = replaceSpaces(name+'-edge-'+map["name"]);
            y += '<tr class="success">';
            y += '  <td>'
            y += makeInfoModal(id,"Edge: "+map["name"],map["info"]);
            y += '  </td>'
            y += '  <td>'
            y += '    <span class="glyphicon glyphicon-plus"></span>';
            y += '  </td>'
            y += '  <td>' + map["name"] + '</td>';
            y += '</tr>';
        });
        $.each(myJ["hinderances"],function(index){
            var map = myJ["hinderances"][index];
            var id = replaceSpaces(name+'-hinderances-'+map["name"]);
            y += '<tr class="danger">';
            y += '  <td>'
            y += makeInfoModal(id,"Hinderance: "+map["name"],map["info"]);
            y += '  </td>'
            y += '  <td>'
            y += '    <span class="glyphicon glyphicon-minus"></span>';
            if (map["major"] == 1){
                y += '<span class="glyphicon glyphicon-minus"></span>';
            }
            y += '  </td>'
            y += '  <td>' + map["name"] + '</td>';
            y += '</tr>';
        });
        return y;
    });
    return x;
}
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function skills( name, myJ ){
    var x = "";
    x += '<a class="anchor" id="' + skillsId( name ) +'"></a>';
    x += makeHeading("Skills");
    x += '<div class="panel-group">';
    $.each(myJ["skills"],function(key,value){
        var anchor = name + "-" + key;
        var id = skillsId( name )+"-" + key
        x += skillEntry( name, key, value, id, anchor );
    });
    x += '</div>';
    return x;
}
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function skillEntry( name, key, value, id, anchor ){
    var x = "";
    x += '<div class="panel-group" id="' + id + '">';
    x += '  <div class="panel panel-default">';
    x += '    <div class="panel-heading">';
    x += '      <h4 class="panel-title">';
    x += '        <span class="glyphicon glyphicon-stats"></span>&nbsp'
    if (value["info"] !== 'undefined' && value["info"] != null){
        x +=  makeInfoModal( name+"-modal-"+key, title(key), value["info"]) + '&nbsp';
    }
    x += '        <a data-toggle="collapse" data-parent="#"' + id + '"" href="#' + anchor + '">';
    x +=            title(key);
    x += '        <span class="badge btn pull-right">' + value["value"] + '</span>';
    x += '        </a>';
    x += '      </h4>';
    x += '    </div>';
    x += '    <div id="' + anchor + '" class="panel-collapse collapse">';
    x += '      <div class="panel-body">';
    x +=            attributeList( name, value["skills"] );
    x += '      </div>';
    x += '    </div>';
    x += '  </div>';
    x += '</div>';
    return x;
}
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function attributeList( name, map ){
    var x = "";
    if (Object.keys(map).length>0){
        x += '<ul class="list-group">';
        $.each(map,function(key,value){
            x += '  <li class="list-group-item">';
            x += '    <span class="badge">' + value["value"] + '</span>';
            if (value["info"] !== 'undefined' && value["info"] != null){
                x +=  makeInfoModal( name+"-"+key, title(key), value["info"]);
                x +=  ' ';
            }
            x +=      title(key);
            x += '  </li>';
        });
        x += '</ul>';
    } else {
        x += '<p>No skills, <code>-2</code> penalty.</p>';
    }
    return x;
}
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function armaments( name, myJ ){
    var x = "";
    x += '<a class="anchor" id="' + armamentsId( name ) +'"></a>';
    x += makeHeading('Armaments');
    x += makeTable( ["","Name","Quantity","Damage","Weight"],function(){
        var y = "";
        $.each(myJ["armaments"],function(index){
            var map = myJ["armaments"][ index ];
            y += '<tr>';
            y += '  <td>'
            y += makeInfoModal( name+"-weapon-"+index, "Armament: "+map["name"], map["info"] );
            y += '  </td>'
            y += '  <td>' + map["name"] + '</td>';
            if ( typeof map["quantity"] !== 'undefined'){
               y += '  <td>' + map["quantity"] + '</td>';
            }
            else{
                y += '  <td>' + '1' + '</td>';
            }
            y += '  <td>' + map["damage"] + '</td>';
            y += '  <td>' + map["weight"] + '</td>';
            y += '</tr>';
        });
        return y;
    });
    return x;
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function powers( name, myJ ){
    var x = "";
    x += '<a class="anchor" id="' + powersId( name ) +'"></a>';
    x += makeHeading('Powers');
    if (myJ["powers"] !== 'undefined' && myJ["powers"] != null){
        x += makeTable( ["","Name","PowerPoints","Range", "Duration"],function(){
            var y = "";
            $.each(myJ["powers"],function(index){
                var map = myJ["powers"][ index ];
                y += '<tr>';
                y += '  <td>'
                y += makeInfoModal( name+"-power-"+index, "Power: "+map["name"], map["info"]);
                y += '  </td>'
                y += '  <td>' + map["name"] + '</td>';
                y += '  <td>' + map["powerpoints"] + '</td>';
                y += '  <td>' + map["range"] + '</td>';
                y += '  <td>' + map["duration"] + '</td>';
                y += '</tr>';
            });
            return y;
        });
    }
    return x;
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function augmentations( name, myJ ){
    var x = "";
    x += '<a class="anchor" id="' + augmentationsId( name ) +'"></a>';
    x += makeHeading("Augmentations");
    x += makeTable( ["","Name","Strain",],function(){
        var y = "";
        $.each(myJ["augmentations"],function(index){
            var map = myJ["augmentations"][ index ];
            y += '  <tr>';
            y += '  <td>'
            y += makeInfoModal( name+"-augmentations-"+index, "Augmentation: "+map["name"], map["info"] );
            y += '  </td>'
            y += '    <td>' + map["name"] + '</td>';
            y += '    <td>' + map["strain"] + '</td>';
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
    x += makeTable( ["","Name","Quantity","Cost"],function(){
        var y = "";
        $.each(myJ["gear"],function(index){
            var map = myJ["gear"][ index ];
            y += '<tr>';
            y += '  <td>'
            y += makeInfoModal( name+"-gear-"+index, "Gear: "+map["name"], map["info"] );
            y += '  </td>'
            y += '  <td>' + map["name"] + '</td>';
            y += '  <td>'
            if ( typeof map["quantity"] !== 'undefined'){
                y +=    map["quantity"];
            }
            y += '  </td>'
            y += '  <td>'
            if ( typeof map["cost"] !== 'undefined'){
               y +=    map["cost"];
            }
            y += '  </td>'
            y += '</tr>';
        });
        return y;
    });
    return x;
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function vehicles( name, myJ ){
    var x = "";
    x += '<a class="anchor" id="' + vehiclesId( name ) +'"></a>';
    x += makeHeading("Vehicles");
    if ( typeof myJ["vehicles"] !== 'undefined' ){
        x += makeTable( ["","Name","Quantity","Cost"],function(){
            var y = "";
            $.each(myJ["vehicles"],function(index){
                var map = myJ["vehicles"][ index ];
                y += '<tr>';
                y += '  <td>'
                y += makeInfoModal( name+"-vehicles-"+index, "Vehicles: "+map["name"], map["info"] );
                y += '  </td>'
                y += '  <td>' + map["name"] + '</td>';
                if ( typeof map["quantity"] !== 'undefined' ){
                   y += '  <td>' + map["quantity"] + '</td>';
                }
                else{
                    y += '  <td>' + '1' + '</td>';
                }
                if ( typeof map["cost"] !== 'undefined'){
                   y += '  <td>' + map["cost"] + '</td>';
                }
                y += '</tr>';
            });
            return y;
        });
    }
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
    if ( myJ["spending"] !== 'undefined' && myJ["spending"] != null ){
        $.each(myJ["spending"],function(key,value){
            var anchor = replaceSpaces(name + "-" + key);
            var id = replaceSpaces( spendingId( name )+"-" + key)
            x += spendingEntry( key, value, id, anchor );
        });
    }
    return x;
}
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function spendingEntry( key, value, id, anchor ){
    var x = "";
    x += '<div class="panel-group" id="' + id + '">';
    x += '  <div class="panel panel-default">';
    x += '    <div class="panel-heading">';
    x += '      <h4 class="panel-title">';
    x += '        <a data-toggle="collapse" data-parent="#"' + id + '"" href="#' + anchor + '">';
    x += '          <span class="glyphicon glyphicon-th-list"></span>&nbsp' + title(key);
    x += '        </a>';
    x += '      </h4>';
    x += '    </div>';
    x += '    <div id="' + anchor + '" class="panel-collapse collapse">';
    x += '      <div class="panel-body">';
    x +=            spendingList( value["earnings"],value["spendings"] );
    x += '      </div>';
    x += '    </div>';
    x += '  </div>';
    x += '</div>';
    return x;
}
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function spendingList( earnings, spendings ){
    var x = "";
    x += makeTable( [],function(){
        var y = "";
        $.each(earnings,function(index){
            var map = earnings[index];
            y += '<tr class="success">';
            y += '  <td>'
            y += '    <span class="glyphicon glyphicon-plus"></span>';
            y += '  </td>'
            y += '  <td>' + map["value"] + '</td>';
            y += '  <td>' + map["info"] + '</td>';
            y += '</tr>';
        });
        $.each(spendings,function(index){
            var map = spendings[index];
            y += '<tr class="danger">';
            y += '  <td>'
            y += '    <span class="glyphicon glyphicon-minus"></span>';
            y += '  </td>'
            y += '  <td>' + map["value"] + '</td>';
            y += '  <td>' + map["info"] + '</td>';
            y += '</tr>';
        });
        return y;
    });
    return x;
}
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function notes( name, myJ ){
    var x = "";
    var notes = name + "-notes";
    var anchor = name + "-notes-id";
    x += '<a class="anchor" id="' + notesId( name ) +'"></a>';
    x += makeHeading('Notes');
    if ( myJ["notes"] !== 'undefined' && myJ["notes"] != null){
        x += '<ul class="list-inline">';
        $.each(myJ["notes"],function(key,list){
            var id = replaceSpaces(name + '-notes-' + key);
            var y = "";
            y += '<ul class="list-group">';
            $.each(list,function(index){
                y += '<li class="list-group-item">';
                y +=    list[index];
                y += '</li>';
            });
            y += '</ul>';
            //
            x += '<li>'
            x += makeBigModal(id,title(key),y);
            x += '</li>'
        });
        x += '</ul>';
    }
    return x;
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function contacts( name, myJ ){
    var x = "";
    var contacts = name + "-Contacts";
    var anchor = name + "-contacts-id";
    x += '<a class="anchor" id="' + contactsId( name ) +'"></a>';
    x += makeHeading('Contacts');
    if ( myJ["contacts"] !== 'undefined' && myJ["contacts"] != null){
        x += '<ul class="list-inline">';
        $.each(myJ["contacts"],function(key,list){
            var id = replaceSpaces(name + '-contacts-' + key);
            var y = "";
            y += '<ul class="list-group">';
            $.each(list,function(index){
                y += '<li class="list-group-item">';
                y +=    list[index];
                y += '</li>';
            });
            y += '</ul>';
            //
            x += '<li>'
            x += makeBigModal(id,title(key),y);
            x += '</li>'
        });
        x += '</ul>';
    }
    return x;
}
function dropdownLink( id, text ){
    var x = "";
    /* += '<a data-toggle="collapse" data-target=".navbar-collapse"';
    x +=  'href="#' + id + '">';
    x +=    text;
    x += '</a>';*/
    x += '<a href="#' + id + '">';
    x +=    text;
    x += '</a>';
    return x;
}
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function createCharacterDropdown( name, myJ ) {
    var x = "";
    x += '<li class="dropdown">';
    x += '  <a href="#" class="dropdown-toggle" data-toggle="dropdown">' + shortName(myJ) + '<b class="caret"></b></a>';
    x += '  <ul class="dropdown-menu">';
    x += '    <li>' + dropdownLink( characterId(name), myJ["id"]["name"]) + '</li>';
    x += '    <li class="divider"></li>';
    x += '    <li class="dropdown-header">Stats</li>';
    x += '    <li>' + dropdownLink( tapId(name), 'Tap') + '</li>';
    x += '    <li>' + dropdownLink( edgesId(name), 'Edges and Hinderances') + '</li>';
    x += '    <li>' + dropdownLink( skillsId(name), 'Skills') + '</li>';
    x += '    <li>' + dropdownLink( augmentationsId(name), 'Augmentations') + '</li>';
    x += '    <li class="divider"></li>';
    x += '    <li class="dropdown-header">Items</li>';
    x += '    <li>' + dropdownLink( protectionId(name), 'Protection') + '</li>';
    x += '    <li>' + dropdownLink( armamentsId(name), 'Armaments') + '</li>';
    x += '    <li>' + dropdownLink( gearId(name), 'Gear') + '</li>';
    x += '    <li>' + dropdownLink( vehiclesId(name), 'Vehicles') + '</li>';
    x += '    <li>' + dropdownLink( powersId(name), 'Powers') + '</li>';
    x += '    <li class="divider"></li>';
    x += '    <li class="dropdown-header">Back story</li>';
    x += '    <li>' + dropdownLink( contactsId(name), 'Contacts') + '</li>';
    x += '    <li>' + dropdownLink( spendingId(name), 'Spending') + '</li>';
    x += '    <li>' + dropdownLink( notesId(name), 'Notes') + '</li>';
    x += '  </ul>';
    x += '</li>';
    return x;
}
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function addHtmlForYaml( name, myJ ) {
    // Add the html for the stats
    var html = createCharacterPanel( name, myJ );
    $("#interfacezero-main").append(html)
    // Add the html for the navigation.
    var dropdown = createCharacterDropdown( name, myJ );
    $("#scrollspy-navbar").append(dropdown);
}
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
