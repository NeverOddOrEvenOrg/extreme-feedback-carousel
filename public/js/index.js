$(document).ready(function(){
  var _dashboards = null;
  var _index = 0;

  setTimeout(() => {
    $.getJSON('/api/v1/dashboards', (dashboards) => {
      _dashboards = dashboards || [];

      $('#splash-screen').hide();

      if (_dashboards.length <= 0) {
        $('#configure-screen').show();
      }

      showDashboards();
      $('iframe').show();
    });
  }, 3000);

  function showDashboards() {
    const title = _dashboards[_index].title || null;
    const url = _dashboards[_index].url;
    const seconds = _dashboards[_index].seconds || 15;
    const interval = seconds * 1000;

    console.log(url)
    console.log(_dashboards)

    _index = (_index == (_dashboards.length - 1)) ? 0 : (_index + 1);

    $('iframe').attr('src', url);
    if (title) {
      $('#bmc-header').html('<p>'+title+'</p>');
      $('#bmc-header').show();
    } else {
      $('#bmc-header').hide();
    }

    if (_dashboards.length > 1) {
      setTimeout(showDashboards, interval);
    }
  }
});