# dnTabs
Small jQuery extension to create tabbed interfaces

# Example

```html
<!-- Put everything inside a container div -->
<div id="tabs">
  <ul>
    <!-- Make sure the hrefs match up to the IDs on the content divs below -->
    <li><a href="#tab-one">Tab one</a></li>
    <li><a href="#tab-two">Tab two</a></li>
    <li><a href="#tab-three">Tab three</a></li>
  </ul>
  
  <!-- Make sure these IDs match the hrefs on the anchors -->
  <div id="tab-one">
    This is tab one!
  </div>
  <div id="tab-two">
    This is tab two!
  </div>
  <div id="tab-three">
    This is tab three!
  </div>
</div>

<script type="text/javascript">
  $(function() {

    $('#tabs').dnTabs();

  });
</script>
```
