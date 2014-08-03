viralShare-javascript
=====================

viral Share javascript


Use this script to lock the page unless user share.

<script src='http://malsup.github.io/jquery.blockUI.js'/>
<script type='text/javascript'>
  jQuery(document).ready(function() { 
      ShareToUse.setData({
          name: " fill ",
          caption: "fill",
          description: ("fill"),
          href: "http://fill/"
      });
      ShareToUse.LockFullPage();
      ShareToUse.countPage();
  });
  </script>
