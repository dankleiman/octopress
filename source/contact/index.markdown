---
layout: page
title: Contact
date: 2016-05-05
comments: false
sharing: true
footer: true
---
<div id="message"></div>
<form id="contact-form">
  Your Name<br/>
  <input type="text" name="name"><br/>
  Your Email<br/>
  <input type="text" name="email"><br/>
  Your Message<br/>
  <textarea form="contact-form" name="message"></textarea><br/>
  <button type="submit">Send</button>
</form>

<script type="text/javascript">
  $(document).ready(function(){
    console.log('LIVE ENDPOINT');
    $("#contact-form").on("submit", function (e) {
      e.preventDefault();
      $('div#message').html('').show();
      $.ajax({
        type: 'POST',
        url: "https://boiling-chamber-62497.herokuapp.com/contact",
        data: $('#contact-form').serialize(),
        complete: function() {
          $('#contact-form input').val('');
          $('textarea').val('');
          $('div#message').html('<h3>Thanks for sending a message!</3>').fadeOut(2500);
         }
      });
    });
  })
</script>
