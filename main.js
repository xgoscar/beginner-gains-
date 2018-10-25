$.getJSON('https://api.airtable.com/v0/app57qa27H9exSnqq/Chest?api_key=keyuEvAoHG6yJhC2T',
  function(airtable){
    var html = [];
    $.each(airtable.records, function(index, record) {
      var name = record.fields['Name'];
      var address = record.fields['Address'];
      var rating = record.fields['Rating'];
      html.push(`<h2>${name}, ${address}, ${rating}</h2>`);
    });
    $('body').append(html);
  }
);