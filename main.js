function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, '\\$&');
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
      results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}
 var getAllRecords = function() {
  $.getJSON('https://api.airtable.com/v0/app57qa27H9exSnqq/Chest?api_key=keyuEvAoHG6yJhC2T',
    function(airtable){
      var html = [];
      $.each(airtable.records, function(index, record) {
        var id = record.id;
        var name = record.fields['Name'];
        var sets = record.fields['Sets'];
        var picture = record.fields['Pictures'];
        var rest = record.fields['Rest'];
        var type = record.fields['Type'];
        var part = record.fields['Part'];
        html.push(listView(id, name, sets, picture, rest, type, part));
      });
      $('body').append(html);
    }
  );
}
 var getOneRecord = function(id) {
  $.getJSON('https://api.airtable.com/v0/app57qa27H9exSnqq/Chest/${id}?api_key=${api_key}',
    function(record){
      var html = [];
      var name = record.fields['Name'];
      var address = record.fields['Address'];
      var rating = record.fields['Rating'];
      var picture = record.fields['Pictures'];
      var cost = record.fields['Cost'];
      var type = record.fields['Type'];
      html.push(detailView(name, address, rating, picture, cost, type ));
      $('body').append(html);
    }
  );
}
 var listView = function(id, name, sets, picture, rest, type, part) {
  return `
  <div class="card text-center" style="width: 18rem; display: inline-flex;">
    <div class="card-body ">
    ${picture ? `<img src="${picture[0].url}">` : ``}
      <h2>${name}</h2>
      <p class="card-text">${sets}</p>
      <p class="card-text">${part}</p>
      <p class="card-text">${rest} of rest between sets</p>
      <a href="workout.html?id=${id}" class="btn bg-dark">View</a>
      <div class="d-flex justify-content-between align-items-center">
      </a>
    </div>
  </div>
</div>
   
  `;
}
 var detailView = function(name, address, rating, picture, cost, type) {
  return `
    <h2>${name}</h2>
    <p>${address}</p>
    <p>${rating}</p>
    <p>${cost}</p>
    <p>${type}</p>
    ${picture ? `<img src="${picture[0].url}">` : ``}
  `;
}
 var id = getParameterByName('id');
if (id) {
  getOneRecord(id);
} else {
  getAllRecords();
}
