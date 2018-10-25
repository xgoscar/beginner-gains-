$.getJSON('https://api.airtable.com/v0/app57qa27H9exSnqq/Chest?api_key=keyuEvAoHG6yJhC2T',
  function(airtable){
    var html = [];
    $.each(airtable.records, function(index, record) {
      var name = record.fields['Name'];
      html.push(`<h2>${name}</h2>`);
    });
    $('body').append(html);
  }
);