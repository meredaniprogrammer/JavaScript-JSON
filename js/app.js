$(document).ready(function () {
  $("#login").click(function () {
    $.ajax({
      type: "POST",
      url: "https://reqres.in/api/login",
      data: {
        email: $("#input__email").val(),
        password: $("#input__password").val(),
      },
      success: function (data) {
        window.location = "http://127.0.0.1:5502/teampage.html";
      },
      error: function () {
        if ($("#input_email").val() != "") {
          $("#form-messages").show(),
            $(".floating__input").css("border-color", "red");
        } else {
          $("#form-messages").hide();
        }
      },
    });
  });
});

$(document).ready(function () {
  $.ajax({
    type: "GET",
    url: "https://reqres.in/api/users?page=1",
    success: function (data) {
      var users = data.data;
      users.forEach(myFunction);

      function myFunction(item) {
        var myTable =
          '<tr class="table-row" id="usertable"><td scope="col" class="imgsrc"><img src = "' +
          item.avatar +
          '" /></td ><td scope="col"><div class="shift">' +
          item.first_name +
          "  " +
          item.last_name +
          "</div></td>" +
          '<td scope="col"><div class="shift">' +
          item.email +
          "</div></td>" +
          '<td scope="col"><div class="shift">Developer</div></td>' +
          '<td scope="col">' +
          '<div class="shift">' +
          '<button class="button-activate col_data">Activated</button></div></td>' +
          '<td scope="col"><div class="shift"><div class="btn-group"><button type="button" class="btn"><i class="fa fa-cog" aria-hidden="true"></i></button>' +
          '<button type="button" class="btn dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">' +
          '<span class="sr-only">Toggle Dropdown</span></button><div class="dropdown-menu"><a class="dropdown-item" href="#">Action</a><a class="dropdown-item" href="#">Another action</a>' +
          '<a class="dropdown-item" href="#">Something else here</a><div class="dropdown-divider"></div><a class="dropdown-item" href="#">Separated link</a></div></div>' +
          "</div></td>" +
          "</tr > ";
        $("#demo").append(myTable);
      }
    },
  });
});

/* Adding another page */

$(document).ready(function () {
  $("#nextpage").click(function () {
    debugger;
    window.location = "http://127.0.0.1:5502/teampage2.html";
    debugger;
  });
});
$(document).ready(function () {
  $.ajax({
    type: "GET",
    url: "https://reqres.in/api/users?page=2",
    success: function (data) {
      var users = data.data;
      users.forEach(myFunction);

      function myFunction(item) {
        var myTable =
          '<tr class="table-row" id="usertable"><td scope="col" class="imgsrc"><img src = "' +
          item.avatar +
          '" /></td ><td scope="col"><div class="shift">' +
          item.first_name +
          "  " +
          item.last_name +
          "</div></td>" +
          '<td scope="col"><div class="shift">' +
          item.email +
          "</div></td>" +
          '<td scope="col"><div class="shift">Developer</div></td>' +
          '<td scope="col">' +
          '<div class="shift">' +
          '<button class="button-activate col_data">Activated</button></div></td>' +
          '<td scope="col"><div class="shift"><div class="btn-group"><button type="button" class="btn"><i class="fa fa-cog" aria-hidden="true"></i></button>' +
          '<button type="button" class="btn dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">' +
          '<span class="sr-only">Toggle Dropdown</span></button><div class="dropdown-menu"><a class="dropdown-item" href="#">Action</a><a class="dropdown-item" href="#">Another action</a>' +
          '<a class="dropdown-item" href="#">Something else here</a><div class="dropdown-divider"></div><a class="dropdown-item" href="#">Separated link</a></div></div>' +
          "</div></td>" +
          "</tr > ";
        $("#demo2").append(myTable);
      }
    },
  });
});

$(document).ready(function () {
  $("#prevpage").click(function () {
    window.location = "http://127.0.0.1:5502/teampage.html";
  });
});

// $(document).ready(function () {
//   debugger;
//   $("#nextpage").click(function () {
//     $.ajax({
//       type: "GET",
//       url: "https://reqres.in/api/users?page=2",
//       success: function (value) {
//         window.location = "http://127.0.0.1:5502/teampage2.html";

//         let members = value.data;
//         members.forEach(myFunction);

//         function myFunction(item) {
//           debugger;
//           console.log(item);
//           // console.log(item.avatar);
//           // console.log(item.first_name);
//           // console.log(item.last_name);

//           // var mySecondTable =
//           //   '<tr class="table-row" id="usertable"><td scope="col" class="imgsrc"><img src = "' +
//           //   item.avatar +
//           //   '" /></td ><td scope="col"><div class="shift">' +
//           //   item.first_name +
//           //   "  " +
//           //   item.last_name +
//           //   "</div></td>" +
//           //   '<td scope="col"><div class="shift">' +
//           //   item.email +
//           //   "</div></td>" +
//           //   '<td scope="col"><div class="shift">Developer</div></td>' +
//           //   '<td scope="col">' +
//           //   '<div class="shift">' +
//           //   '<button class="button-activate col_data">Activated</button></div></td>' +
//           //   '<td scope="col"><div class="shift"><div class="btn-group"><button type="button" class="btn"><i class="fa fa-cog" aria-hidden="true"></i></button>' +
//           //   '<button type="button" class="btn dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">' +
//           //   '<span class="sr-only">Toggle Dropdown</span></button><div class="dropdown-menu"><a class="dropdown-item" href="#">Action</a><a class="dropdown-item" href="#">Another action</a>' +
//           //   '<a class="dropdown-item" href="#">Something else here</a><div class="dropdown-divider"></div><a class="dropdown-item" href="#">Separated link</a></div></div>' +
//           //   "</div></td>" +
//           //   "</tr > ";
//           // $("#demo2").append(mySecondTable);
//         }
//       },
//     });
//   });
// });
