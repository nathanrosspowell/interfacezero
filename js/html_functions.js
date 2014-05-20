//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function makeHeading(text) {
  return "<h3>" + text + "</h3>";
}
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function replaceSpaces(text) {
  return text.replace(/\s+/g, '');
}
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function isValid(object) {
  return object !== 'undefined' && object !== null;
}
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function title(text) {
  return text.toLowerCase().replace(/\b[a-z]/g, function (letter) {
    return letter.toUpperCase();
  });
}
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function getCharacterName(myJ) {
  var x = "";
  x += myJ["id"]["firstname"]
  if (isValid(myJ["id"]["nickname"])) {
    x += ' <i>' + myJ["id"]["nickname"] + '</i>';
  }
  x += ' ' + myJ["id"]["lastname"];
  return x;
}
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function getCharacterShortName(myJ) {
  if (isValid(myJ["id"]["nickname"])) {
    return myJ["id"]["nickname"];
  }
  return myJ["id"]["firstname"];
}
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function makeTable(headings, itemsFunction, useStripes) {
  var stripe = typeof useStripes !== 'undefined' ? useStripes : true;
  var x = "";
  x += '<div class="table-responsive">';
  x += '  <table class="table table-condensed';
  if (stripe) {
    x += '  table-striped';
  }
  x += '  ">';
  if (headings.length > 0) {
    x += '<thead>';
    x += '  <tr>';
    $.each(headings, function (index) {
      x += '<th>' + headings[index] + '</th>';
    });
    x += '  </tr>';
    x += '</thead>';
  }
  x += '    <tbody>';
  x += itemsFunction();
  x += '    </tbody>';
  x += '  </table>';
  x += '</div>';
  return x;
}
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function makeVerticalTable(pairs) {
  var x = "";
  x += '<div class="table-responsive">';
  x += '  <table class="table table-condensed table-striped">';
  $.each(pairs, function (index) {
    var pair = pairs[index];
    x += '<tr>';
    x += '  <th scope="row">' + pair[0] + '</th>';
    x += '  <td>';
    if (pair[1] !== null) {
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
function makeModal(id, button, buttonStyle, size, title, content) {
  var x = "";
  if (typeof content !== 'undefined' && content !== null) {
    x += '<button class="btn ' + buttonStyle + ' btn-' + size +
      '" data-toggle="modal" data-target="#' + id + '">';
    x += button;
    x += '</button>';
    x += '<div id="' + id + '" class="modal fade bs-example-modal-' + size +
      '" tabindex="-1"';
    x += ' role="dialog" aria-labelledby="' + id + '" aria-hidden="true">';
    x += '  <div class="modal-dialog modal-' + size + '">';
    x += '    <div class="modal-content">';
    x += '      <div class="modal-header">';
    x +=
      '        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>';
    x += '        <h4 class="modal-title">';
    x += title;
    x += '        </h4>';
    x += '      </div>';
    x += '      <div class="modal-body">';
    x += content;
    x += '      </div>';
    x += '    </div>';
    x += '  </div>';
    x += '</div>';
  }
  return x;
}
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function makeInfoModal(id, title, content) {
  var button = '<span class="glyphicon glyphicon-list-alt"></span>';
  var size = 'xs';
  var buttonStyle = 'btn-primary';
  return makeModal(id, button, buttonStyle, size, title, content);
}
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function makeBigModal(id, button, content) {
  var title = button;
  var size = 'lg';
  var buttonStyle = 'btn-default';
  return makeModal(id, button, buttonStyle, size, title, content);
}
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function makeCharacterDescription(character, race, occupation, xp) {
  var levels = [
    [0, "Novice"],
    [20, "Seasoned"],
    [40, "Veteran"],
    [60, "Heroic"],
    [80, "Legendary"]
  ];
  var level = levels[0][1];
  for (var i = 1; i < levels.length; i++) {
    if (xp >= levels[i][0]) {
      level = levels[i][1];
    }
  }
  var an = "a";
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  var firstChar = level[0].toLowerCase();
  for (var i = 0; i < vowels.length; i++) {
    if (firstChar[0] == vowels[i]) {
      an = "an";
      break;
    }
  }
  return character + ' is ' + an + ' <u>' + level + '</u> <u>' + race +
    '</u> <u>' + occupation + '</u> with <u>' + xp + '</u> experience points.';
};
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function makeXpBar(xp) {
  var levels = [
    [0, 20], // use this to set the range for the bar
    [20, 40],
    [40, 60],
    [60, 80],
    [80, 100]
  ];
  var min = 0;
  var max = 100;
  for (var i = 0; i < levels.length; i++) {
    if (xp < levels[i][1]) {
      min = levels[i][0];
      max = levels[i][1];
      break;
    }
  }
  var range = max - min;
  var percentage = ((xp - min) / range) * 100;
  var x = "";
  x += '<div class="progress progress-striped active">';
  x +=
    '  <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="' +
    percentage + '"';
  x += '  aria-valuemin="' + levels[0][0] + '" aria-valuemax="' + levels[0][1] +
    '" style="width: ' + percentage + '%;">';
  x += xp + "xp";
  x += '  </div>';
  x += '</div>';
  return x;
}
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
