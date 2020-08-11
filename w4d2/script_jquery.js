const readInputAndAppend = () => {
  const input = document.querySelector('#new-list-item')
  const list = document.querySelector('#main-list')

  console.log(input)
  console.log(input.value)

  list.innerHTML += `<li>${input.value}</li>`


}

const readInputAndAppendJQ = () => {
  const value = $('#new-list-item').val()

  const $itemSpan = $('<span>')
  $itemSpan.text(value)

  const $newItem = $('<li>')
  $newItem.addClass('night')
  $newItem.append($itemSpan)

  $('#main-list').append($newItem)

  $('#main-list').append(`<li>${input.value}</li>`)

}

const chicken = 0
$(document).ready(() => {
  // When clicked, change the class of the h1

  $('body > h1').on('click', () => {
    $('body > h1').toggleClass('night')
  })
})

$(document).ready(() => {
  $('#add-new-item').click(readInputAndAppendJQ)
})