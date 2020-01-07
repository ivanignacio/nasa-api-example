const URL =
  "https://api.nasa.gov/planetary/apod?api_key=2tU62ticUHkDcIALmE6TePscGxmsifqBpLnLPyuE";

// Original code

$.ajax({
    url: URL,
    success: function (response) {
        $('#copyright').append(response.copyright);
        $("#apod_img").attr("src", response.url);
        $('#apod_explanation').text(response.explanation);
    }
});

// 'Destructuring Assignment'

// $.ajax({
//   url: URL,
//   success: response => {
//     const { copyright, explanation, url } = response;
//     $("#copyright").append(copyright);
//     $("#apod_img").attr("src", url);
//     $("#apod_explanation").text(explanation);
//   }
// });
