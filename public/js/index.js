const MISSING_TITLE = 'View title not set.'

$(document).ready(function(){
  var _dashboards = null;
  var _index = 0;
  var breadcrumbs = [];

  setTimeout(() => {
    $.getJSON('/api/v1/dashboards', (dashboards) => {
      _dashboards = dashboards || [];

      $('#splash-screen').hide();

      if (_dashboards.length <= 0) {
        $('#configure-screen').show();
        return;
      }

      createFooterBreadcrumbs();
      updatePage();
      
      $('iframe').show();
    });
  }, 3000);

  function updatePage() {
    const seconds = _dashboards[_index].seconds || 15;
    const interval = seconds * 1000;
    
    showNextDashboard();
    updateFooter();

    _index = (_index == (_dashboards.length - 1)) ? 0 : (_index + 1);

    if (_dashboards.length > 1) {
      setTimeout(updatePage, interval);
    }
  }

  function showNextDashboard() {
    const title = _dashboards[_index].title || MISSING_TITLE;
    const url = _dashboards[_index].url;
    const showHeader = _dashboards[_index].showHeader || false;

    $('iframe').attr('src', url);
    if (showHeader) {
      $('#efc-header').html('<p>'+title+'</p>');
      $('#efc-header').show();
    } else {
      $('#efc-header').hide();
    }
  }

  function createFooterBreadcrumbs() {
    var breadcrumbs = _dashboards.map((dashboard, ix, dashboards) => {
      return $("<div>").addClass("breadcrumb").addClass("breadcrumb-"+ix).append($("<p>").text(dashboard.title));
    });
    $('#efc-footer').append(breadcrumbs);
  }

  function updateFooter() {
    // adjust an off-by-one issue
    dashboard_index = (_index - 1) < 0 ? (_dashboards.length - 1) : (_index - 1);
    
    var lastView = $('.breadcrumb-' + dashboard_index);
    lastView.remove();
    $('#efc-footer').append(lastView);
  }
});