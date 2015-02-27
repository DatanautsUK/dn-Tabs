/* 
  dnTabs by Datanauts (datanauts.co.uk / @datanauts_uk)
  Small jQuery extension to create tabbed interfaces
  v0.1 - 19 Feb 2015
*/

jQuery.fn.extend({
  dnTabs: function() {
    var container = $(this);
    var ul = container.children('ul').eq(0);
    var tabs = ul.children('li');
    var panes = container.children('div');

    // apply classes for styling (and clearfix on <ul>)
    container.addClass('dn-tabs-container')
    ul.addClass('group');
    tabs.addClass('dn-tab');
    panes.addClass('dn-tab-panel');

    /*
      Functions
    */

    var getPane = function(id) {
      var pane = $.grep(panes, function(pane, i) {
        return $(pane).attr('id') === id;
      });
      return $(pane);
    }

    var getTab = function(id) {
      return tabs.children("[href='#" + id + "']").eq(0).closest('li');
    }

    var firstTab = function() {
      return tabs.eq(0).children('a').eq(0);
    }


    var setCurrentTab = function(hash) {
      var id = hash.replace('#', '');

      tabs.removeClass('active');
      panes.hide();
      
      var currentTab = getTab(id);
      var currentPane = getPane(id);

      currentTab.addClass('active');
      currentPane.show();
    }

    /*
      Events
    */

    $('a', tabs).on('click', function(e) {
      e.preventDefault();
      setCurrentTab( $(this).attr('href') );

      if (history.pushState) {
        history.pushState(null, null, hash);
      } else {
        window.location.hash = hash;
      }
    });

    /*
      First page load
    */

    var hash = (window.location.hash === "" ? firstTab().attr('href') : window.location.hash);
    setCurrentTab(hash);
  }
});