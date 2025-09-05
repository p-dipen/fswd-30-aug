$(document).ready(function () {
  jqueryLoad();
});
function jqueryLoad() {
  console.log('Start of func jqueryLoad'); //  1
  $.ajax({
    url: 'https://dummyjson.com/products',
    method: 'GET',
    async: false,
    dataType: 'json',
    beforeSend: function () {
      console.log('beforeSend of func jqueryLoad'); //  2
      $('#spinner').show();
    },
    success: function (data) {
      console.log('success of func jqueryLoad'); //  4
      // $("#output").text(JSON.stringify(data, null, 2));
      appendProductCards(data.products);
    },
    error: function (xhr, status, error) {
      console.log('error of func jqueryLoad'); // 1,2,3,4,5
      $('#output').text(`Error ${xhr.status}: ${error}`);
    },
  });
  $('#spinner').hide();
  console.log('End of func jqueryLoad'); //  3
}

function appendProductCards(products) {
  for (let i = 0; i < products.length; i++) {
    let product = products[i];
    $('#output').append(`
                <div class="col-lg-3 col-sm-6 col-md-4">
                    <div class="card">
                        <div class="d-flex p-3">
                            <p class="lead">${product.title}</p>
                        </div>
                        <img src="${product.images[0]}"
                            alt="${product.title}" />
                        <div class="card-body">
                            <p class="small">beauty</p>
                        </div>
                        <div class="d-flex justify-content-between">
                            <h5>${product.brand}</h5>
                            <h5>${product.price}</h5>
                        </div>
                        <div class="d-flex justify-content-between">
                            <p class="text-muted">Rating :</p>
                            <div class="">${product.rating}</div>
                        </div>
                    </div>
                </div>
                `);
  }
}
