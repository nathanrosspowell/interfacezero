//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function createCharacterPanel(name, myJ) {
  var characterName = getCharacterName(myJ);
  var x = "";
  x += '<a class="anchor" id="' + characterId(name) + '"></a>';
  x += '<div class="panel panel-default">';
  x += '  <div class="panel-heading">';
  x += '    <h3 class="panel-title">';
  x += '      <span class="glyphicon glyphicon-user"></span>&nbsp';
  x += characterName;
  x += '    </h3>';
  x += '  </div>'; // Close panel-heading
  x += '  <div class="panel-body">';
  x += identification(name, myJ);
  x += '      <hr/>';
  x += tap(name, myJ);
  x += '      <hr/>';
  x += edges(name, myJ);
  x += '      <hr/>';
  x += skills(name, myJ);
  x += '      <hr/>';
  x += augmentations(name, myJ);
  x += '      <hr/>';
  x += protection(name, myJ);
  x += '      <hr/>';
  x += powers(name, myJ);
  x += '      <hr/>';
  x += armaments(name, myJ);
  x += '      <hr/>';
  x += gear(name, myJ);
  x += '      <hr/>';
  x += vehicles(name, myJ);
  x += '      <hr/>';
  x += contacts(name, myJ);
  x += '      <hr/>';
  x += spending(name, myJ);
  x += '      <hr/>';
  x += notes(name, myJ);
  x += '  </div>';
  x += '</div>';
  return x;
}
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function identification(name, myJ) {
  var map = myJ["stats"];
  var characterName = getCharacterShortName(myJ);
  var x = "";
  x += '<a class="anchor" id="' + identificationId(name) + '"></a>';
  x += '<p>';
  x += makeCharacterDescription(characterName, myJ["id"]["race"], myJ["id"][
    "occupation"
  ], myJ["stats"]["xp"]);
  x += '&nbsp';
  x += makeModal(name + "-backstory", characterName + "'s Backstory",
    "btn-default", "xs", getCharacterName(myJ) + "'s Backstory", myJ["id"][
      "backstory"
    ]);
  x += '</p>'
  x += makeXpBar(myJ["stats"]["xp"]);
  x += makeVerticalTable([
    ["Money", map["money"]],
    ["Streetcred", map["streetcreed"]["current"] + '/' + map["streetcreed"][
      "max"
    ]],
    ["Wonded", map["wonded"]],
    ["Exhausted", map["exhausted"]]
  ]);

  return x;
}
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function tap(name, myJ) {
  var map = myJ["tap"];
  var x = "";
  x += '<a class="anchor" id="' + tapId(name) + '"></a>';
  x += makeHeading("Tap");
  x += makeVerticalTable([
    ["Firewall", map["firewall"]],
    ["Toughness", map["toughness"]],
    ["AMS", map["toughness"]],
    ["Armor", map["toughness"]]
  ]);
  return x;
}
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function edges(name, myJ) {
  var x = "";
  x += '<a class="anchor" id="' + edgesId(name) + '"></a>';
  x += makeHeading('Edges and Hinderances');
  x += makeTable([], function () {
    var y = "";
    $.each(myJ["edges"], function (index) {
      var map = myJ["edges"][index];
      var id = replaceSpaces(name + '-edge-' + map["name"]);
      y += '<tr class="success">';
      y += '  <td>'
      y += makeInfoModal(id, "Edge: " + map["name"], map["info"]);
      y += '  </td>'
      y += '  <td>'
      y += '    <span class="glyphicon glyphicon-plus"></span>';
      y += '  </td>'
      y += '  <td>' + map["name"] + '</td>';
      y += '</tr>';
    });
    $.each(myJ["hinderances"], function (index) {
      var map = myJ["hinderances"][index];
      var id = replaceSpaces(name + '-hinderances-' + map["name"]);
      y += '<tr class="danger">';
      y += '  <td>'
      y += makeInfoModal(id, "Hinderance: " + map["name"], map["info"]);
      y += '  </td>'
      y += '  <td>'
      y += '    <span class="glyphicon glyphicon-minus"></span>';
      if (map["major"] == 1) {
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
function skills(name, myJ) {
  var x = "";
  x += '<a class="anchor" id="' + skillsId(name) + '"></a>';
  x += makeHeading("Skills");
  x += '<div class="panel-group">';
  $.each(myJ["skills"], function (key, value) {
    var anchor = name + "-" + key;
    var id = skillsId(name) + "-" + key
    x += skillEntry(name, key, value, id, anchor);
  });
  x += '</div>';
  return x;
}
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function skillEntry(name, key, value, id, anchor) {
  var x = "";
  x += '<div class="panel-group" id="' + id + '">';
  x += '  <div class="panel panel-default">';
  x += '    <div class="panel-heading">';
  x += '      <h4 class="panel-title">';
  if (value["info"] !== 'undefined' && value["info"] != null) {
    x += makeInfoModal(name + "-modal-" + key, title(key), value["info"]) +
      '&nbsp';
  }
  x += '        <a data-toggle="collapse" data-parent="#"' + id + '"" href="#' +
    anchor + '">';
  x += '        <span class="glyphicon glyphicon-stats"></span>&nbsp'
  x += title(key) + '<b class="caret"></b>';
  x += '        <span class="badge btn pull-right">' + value["value"] +
    '</span>';
  x += '        </a>';
  x += '      </h4>';
  x += '    </div>';
  x += '    <div id="' + anchor + '" class="panel-collapse collapse">';
  x += '      <div class="panel-body">';
  x += attributeList(name, value["skills"]);
  x += '      </div>';
  x += '    </div>';
  x += '  </div>';
  x += '</div>';
  return x;
}
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function attributeList(name, map) {
  var x = "";
  if (Object.keys(map).length > 0) {
    x += '<ul class="list-group">';
    $.each(map, function (key, value) {
      x += '  <li class="list-group-item">';
      x += '    <span class="badge">' + value["value"] + '</span>';
      if (value["info"] !== 'undefined' && value["info"] != null) {
        x += makeInfoModal(name + "-" + key, title(key), value["info"]);
        x += ' ';
      }
      x += title(key);
      x += '  </li>';
    });
    x += '</ul>';
  } else {
    x += '<p>No skills, <code>-2</code> penalty.</p>';
  }
  return x;
}
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function armaments(name, myJ) {
  var x = "";
  x += '<a class="anchor" id="' + armamentsId(name) + '"></a>';
  x += makeHeading('Armaments');
  x += makeTable(["", "Name", "Quantity", "Damage", "Weight"], function () {
    var y = "";
    $.each(myJ["armaments"], function (index) {
      var map = myJ["armaments"][index];
      y += '<tr>';
      y += '  <td>'
      y += makeInfoModal(name + "-weapon-" + index, "Armament: " + map[
        "name"], map["info"]);
      y += '  </td>'
      y += '  <td>' + map["name"] + '</td>';
      if (typeof map["quantity"] !== 'undefined') {
        y += '  <td>' + map["quantity"] + '</td>';
      } else {
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
function powers(name, myJ) {
  var x = "";
  x += '<a class="anchor" id="' + powersId(name) + '"></a>';
  x += makeHeading('Powers');
  if (myJ["powers"] !== 'undefined' && myJ["powers"] != null) {
    x += makeTable(["", "Name", "PowerPoints", "Range", "Duration"], function () {
      var y = "";
      $.each(myJ["powers"], function (index) {
        var map = myJ["powers"][index];
        y += '<tr>';
        y += '  <td>'
        y += makeInfoModal(name + "-power-" + index, "Power: " + map[
          "name"], map["info"]);
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
function augmentations(name, myJ) {
  var x = "";
  x += '<a class="anchor" id="' + augmentationsId(name) + '"></a>';
  x += makeHeading("Augmentations");
  x += makeTable(["", "Name", "Strain", ], function () {
    var y = "";
    $.each(myJ["augmentations"], function (index) {
      var map = myJ["augmentations"][index];
      y += '  <tr>';
      y += '  <td>'
      y += makeInfoModal(name + "-augmentations-" + index,
        "Augmentation: " + map["name"], map["info"]);
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
function gear(name, myJ) {
  var x = "";
  x += '<a class="anchor" id="' + gearId(name) + '"></a>';
  x += makeHeading("Gear");
  x += makeTable(["", "Name", "Quantity", "Cost"], function () {
    var y = "";
    $.each(myJ["gear"], function (index) {
      var map = myJ["gear"][index];
      y += '<tr>';
      y += '  <td>'
      y += makeInfoModal(name + "-gear-" + index, "Gear: " + map["name"],
        map["info"]);
      y += '  </td>'
      y += '  <td>' + map["name"] + '</td>';
      y += '  <td>'
      if (typeof map["quantity"] !== 'undefined') {
        y += map["quantity"];
      }
      y += '  </td>'
      y += '  <td>'
      if (typeof map["cost"] !== 'undefined') {
        y += map["cost"];
      }
      y += '  </td>'
      y += '</tr>';
    });
    return y;
  });
  return x;
}
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function vehicles(name, myJ) {
  var x = "";
  x += '<a class="anchor" id="' + vehiclesId(name) + '"></a>';
  x += makeHeading("Vehicles");
  if (typeof myJ["vehicles"] !== 'undefined') {
    x += makeTable(["", "Name", "Quantity", "Cost"], function () {
      var y = "";
      $.each(myJ["vehicles"], function (index) {
        var map = myJ["vehicles"][index];
        var gone = typeof map["gone"] !== 'undefined' && map["gone"] === true;
        y += '<tr';
        if (gone){  
            y += ' class="danger" ';
        }
        y += '>';
        
        y += '  <td>';
        y += makeInfoModal(name + "-vehicles-" + index
                          , "Vehicles: " + map["name"]
                          , map["info"]);
        y += '  </td>'
        
        y += '  <td>' 
        if (gone) {
          y += '<del>';
        }
        y += map["name"];
        if (gone){
          y += '</del>';
        }
        y += '</td>';
      
        y += '  <td>' 
        if (gone) {
          y += '<del>';
        }
        if (typeof map["quantity"] !== 'undefined') {
          y += map["quantity"];
        } else {
          y += '1';
        }
        if (gone){
          y += '</del>';
        }
        y += '</td>';

        y += '  <td>' 
        if (gone) {
          y += '<del>';
        }
        if (typeof map["cost"] !== 'undefined') {
          y += map["cost"];
        }
        if (gone){
          y += '</del>';
        }
        y += '</td>';


        y += '</tr>';
      });
      return y;
    });
  }
  return x;
}
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function protection(name, myJ) {
  var map = myJ["protection"];
  var x = "";
  x += '<a class="anchor" id="' + protectionId(name) + '"></a>';
  x += makeHeading("Protection");
  x += makeVerticalTable([
    ["Torso", map["torso"]],
    ["Head", map["head"]],
    ["Arms", map["arm"]],
    ["Life Support", map["life support"]],
    ["Legs", map["leg"]],
    ["Hazard Sheild", map["hazard sheild"]]
  ]);
  return x;
}
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function spending(name, myJ) {
  var x = "";
  x += '<a class="anchor" id="' + spendingId(name) + '"></a>';
  x += makeHeading("Spending");
  if (myJ["spending"] !== 'undefined' && myJ["spending"] != null) {
    $.each(myJ["spending"], function (key, value) {
      var anchor = replaceSpaces(name + "-" + key);
      var id = replaceSpaces(spendingId(name) + "-" + key)
      x += spendingEntry(key, value, id, anchor);
    });
  }
  return x;
}
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function spendingEntry(key, value, id, anchor) {
  var x = "";
  x += '<div class="panel-group" id="' + id + '">';
  x += '  <div class="panel panel-default">';
  x += '    <div class="panel-heading">';
  x += '      <h4 class="panel-title">';
  x += '        <a data-toggle="collapse" data-parent="#"' + id + '"" href="#' +
    anchor + '">';
  x += '          <span class="glyphicon glyphicon-th-list"></span>&nbsp' +
    title(key) + '<b class="caret"></b>';
  x += '        </a>';
  x += '      </h4>';
  x += '    </div>';
  x += '    <div id="' + anchor + '" class="panel-collapse collapse">';
  x += '      <div class="panel-body">';
  x += spendingList(value["earnings"], value["spendings"]);
  x += '      </div>';
  x += '    </div>';
  x += '  </div>';
  x += '</div>';
  return x;
}
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function spendingList(earnings, spendings) {
  var x = "";
  x += makeTable([], function () {
    var y = "";
    $.each(earnings, function (index) {
      var map = earnings[index];
      y += '<tr class="success">';
      y += '  <td>'
      y += '    <span class="glyphicon glyphicon-plus"></span>';
      y += '  </td>'
      y += '  <td>' + map["value"] + '</td>';
      y += '  <td>' + map["info"] + '</td>';
      y += '</tr>';
    });
    $.each(spendings, function (index) {
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
function notes(name, myJ) {
  var x = "";
  var notes = name + "-notes";
  var anchor = name + "-notes-id";
  x += '<a class="anchor" id="' + notesId(name) + '"></a>';
  x += makeHeading('Notes');
  if (myJ["notes"] !== 'undefined' && myJ["notes"] != null) {
    x += '<ul class="list-inline">';
    $.each(myJ["notes"], function (key, list) {
      var id = replaceSpaces(name + '-notes-' + key);
      var y = "";
      y += '<ul class="list-group">';
      $.each(list, function (index) {
        y += '<li class="list-group-item">';
        y += list[index];
        y += '</li>';
      });
      y += '</ul>';
      //
      x += '<li>'
      x += makeBigModal(id, title(key), y);
      x += '</li>'
    });
    x += '</ul>';
  }
  return x;
}
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function contacts(name, myJ) {
  var x = "";
  var contacts = name + "-Contacts";
  var anchor = name + "-contacts-id";
  x += '<a class="anchor" id="' + contactsId(name) + '"></a>';
  x += makeHeading('Contacts');
  if (myJ["contacts"] !== 'undefined' && myJ["contacts"] != null) {
    x += '<ul class="list-inline">';
    $.each(myJ["contacts"], function (key, list) {
      var id = replaceSpaces(name + '-contacts-' + key);
      var y = "";
      y += '<ul class="list-group">';
      $.each(list, function (index) {
        y += '<li class="list-group-item">';
        y += list[index];
        y += '</li>';
      });
      y += '</ul>';
      //
      x += '<li>'
      x += makeBigModal(id, title(key), y);
      x += '</li>'
    });
    x += '</ul>';
  }
  return x;
}
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function dropdownLink(id, text) {
  var x = "";
  x += '<a href="#' + id + '">';
  x += text;
  x += '</a>';
  return x;
}
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function createCharacterDropdown(name, myJ) {
  var characterName = getCharacterName(myJ);
  var x = "";
  x += '<li class="dropdown">';
  x += '  <a href="#" class="dropdown-toggle" data-toggle="dropdown">' +
    getCharacterShortName(myJ) + '<b class="caret"></b></a>';
  x += '  <ul class="dropdown-menu">';
  x += '    <li>' + dropdownLink(characterId(name), characterName) + '</li>';
  x += '    <li class="divider"></li>';
  x += '    <li class="dropdown-header">Stats</li>';
  x += '    <li>' + dropdownLink(tapId(name), 'Tap') + '</li>';
  x += '    <li>' + dropdownLink(edgesId(name), 'Edges and Hinderances') +
    '</li>';
  x += '    <li>' + dropdownLink(skillsId(name), 'Skills') + '</li>';
  x += '    <li>' + dropdownLink(augmentationsId(name), 'Augmentations') +
    '</li>';
  x += '    <li class="divider"></li>';
  x += '    <li class="dropdown-header">Items</li>';
  x += '    <li>' + dropdownLink(protectionId(name), 'Protection') + '</li>';
  x += '    <li>' + dropdownLink(armamentsId(name), 'Armaments') + '</li>';
  x += '    <li>' + dropdownLink(gearId(name), 'Gear') + '</li>';
  x += '    <li>' + dropdownLink(vehiclesId(name), 'Vehicles') + '</li>';
  x += '    <li>' + dropdownLink(powersId(name), 'Powers') + '</li>';
  x += '    <li class="divider"></li>';
  x += '    <li class="dropdown-header">Back story</li>';
  x += '    <li>' + dropdownLink(contactsId(name), 'Contacts') + '</li>';
  x += '    <li>' + dropdownLink(spendingId(name), 'Spending') + '</li>';
  x += '    <li>' + dropdownLink(notesId(name), 'Notes') + '</li>';
  x += '  </ul>';
  x += '</li>';
  return x;
}
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function makePlayerCharacterHtml(name, myJ) {
  // Add the html for the stats
  var html = createCharacterPanel(name, myJ);
  $("#interfacezero-main").append(html)
  // Add the html for the navigation.
  var dropdown = createCharacterDropdown(name, myJ);
  $("#scrollspy-navbar").append(dropdown);
}
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
