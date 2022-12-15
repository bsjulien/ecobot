$(".chat-input input").keyup(function (e) {
  if ($(this).val() == "") $(this).removeAttr("good");
  else $(this).attr("good", "");
});

//   //   var txt2 = $("<p></p>").text("Text."); // Create with jQuery
//   //   var txt3 = document.createElement("p"); // Create with DOM
//   //   txt3.innerHTML = "Text.";

$(document).on("submit", "#chat-input", function (e) {
  var txtvalue = document.getElementById("chat-text").value;
  var txt1 = `<article class="msg-container msg-self" id="msg-0">
    <div class="msg-box">
      <div class="flr">
        <div class="messages">
          <p class="msg" id="msg-1">
            ${txtvalue}
          </p>
        </div>
  
      </div>
      <img class="user-img" id="user-0" src="../static/images/user.png" />
    </div>
  </article>`;
  //   var $chat = $(".chat-window");
  $(".chat-window").append(txt1);
  $(".chat-window").scrollTop($(".chat-window")[0].scrollHeight);

  e.preventDefault();
  $.ajax({
    type: "POST",
    url: "/",
    data: {
      user_text: $("#chat-text").val(),
    },
    success: function (result) {
      var txt2 = `<article class="msg-container msg-remote" id="msg-0">
      <div class="msg-box">
        <img class="user-img" id="user-0" src="../static/images/bot.png" />
        <div class="flr">
          <div class="messages">
            <p class="msg" id="msg-0">
              ${result}
            </p>
          </div>
        </div>
      </div>
    </article>`;
      $(".chat-window").append(txt2);
      $(".chat-window").scrollTop($(".chat-window")[0].scrollHeight);
      document.getElementById("chat-text").value = "";
    },
  });
});
