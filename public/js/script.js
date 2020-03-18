$(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

   
        $("#burger_name,#customer").removeClass("error");
        var newBurger = {
            CustomerId: $("#customer").val().trim(),
            burger_name: $("#burger_name").val().trim(),
            devoured: 0
          };
      
          console.log("newBurger",newBurger);
      
          // Send the POST request.
          $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
          }).then(function() {
              console.log("created new burger");
              // Reload the page to get the updated list
              location.reload();
            }
          ).fail(function(){
            $("#burger_name,#customer").addClass("error");
          });
    
  });

  $(".add-customer-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    
        $("#customer_name").removeClass("error");
        var newCustomer = {
            customer_name: $("#customer_name").val().trim()

          };
      
          console.log("newCustomer",newCustomer);
      
          // Send the POST request.
          $.ajax("/api/customer", {
            type: "POST",
            data: newCustomer
          }).then(function() {
        
              console.log("created new burger");
              // Reload the page to get the updated list
              location.reload();
            }
          ).fail(function(){
            $("#customer_name").addClass("error");
        });
    
  });

  $("#burger_name").on("focus",function(){
      $(this).removeClass("error");
  });

  $(".ready-count").html("["+$(".burgers-ready li").length +" Burgers]");

  $(".devoured-count").html("["+$(".burgers-devoured li").length +" Burgers]");


  $(".devour").on("click", function(event) {
    var id = $(this).data("id");
    var devouredState = {
      devoured: 1
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: devouredState
    }).then(
      function() {
        console.log("devoured", devouredState);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });