
      // Toggle Images

      var imgToggle = document.getElementsByClassName('toggle_placeholder');
      var imgSection = $(".img_section").find("img")

      
      $('.toggle_placeholder').click(function() {
        if(!imgToggle) {
          imgToggle = true;
          imgSection.addClass('img_toggle');
        } else {
          imgToggle = false;
          imgSection.removeClass('img_toggle');
        }

      });



      // Toggle Spacers

      var spaceToggle = document.getElementById('outline');
      var spaceSection = $("div").find(".divider_outline")


      $('#outline').click(function() {
        if(!spaceToggle) {
          spaceToggle = true;
          console.log('true')
          spaceSection.addClass('divider_outline');
        } else {
          spaceToggle = false;
          console.log('false')
          spaceSection.removeClass('divider_outline');
        }

      });


  function highlightCurrentLink() {
      var arr = document.getElementsByTagName("a");
      for (var i = 0, len = arr.length; i < len; ++i) {
          if (arr[i].href == window.location.href) {
              arr[i].style.fontWeight = "bold";
              // break;
          }
      }
  }
  highlightCurrentLink();

