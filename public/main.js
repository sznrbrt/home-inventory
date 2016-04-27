'use strict';

$(function() {
  $('.newItem').on('click', addItem);
  $('.items').on('click', '.deleteButton', deleteItem);
  $('.newItem').click(openAddItem);
  $('#addItem').click(addItem);
  renderItems();
});

function renderItems() {
  var settings = {
    "url": "./api/items",
    "method": "GET"
  }

  $.ajax(settings).done(function (response) {
    var $items = response.map(res => makeItem(res.id, res.name, res.make, res.model, res.sn, res.category, res.value, res.room));
    $('.items').append($items);
  });

};

function makeItem(id, name, make, model, sn, category, value, room) {
  var $item = $('.templateItem').clone().removeClass('templateItem').attr('id', id);
  $item.find('.id').text(id);
  $item.find('.name').text(name);
  $item.find('.make').text(make);
  $item.find('.model').text(model);
  $item.find('.sn').text(sn);
  $item.find('.category').text(category);
  $item.find('.value').text(value);
  $item.find('.room').text(room);

  return $item;
}

function openAddItem() {
  $('.new-item-modal').modal('show');
}

function addItem() {
  var newItem = {};
  newItem.name = $('.new-item-modal').find('#input-name').val();
  newItem.make = $('.new-item-modal').find('#input-make').val();
  newItem.model = $('.new-item-modal').find('#input-name').val();

}

function deleteItem() {
  var $item = $(this).closest('tr');
  var id = $item.attr('id');

  var settings = {
    "url": "./api/items/" + id,
    "method": "DELETE",
  }

  $.ajax(settings).done(function (response) {
    console.log(response);
    $item.remove();
  });
}
