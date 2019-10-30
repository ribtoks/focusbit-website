$(document).ready(function() {

	function getOS() {
		var userAgent = window.navigator.userAgent,
			platform = window.navigator.platform,
			macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
			windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
			iosPlatforms = ['iPhone', 'iPad', 'iPod'],
			os = null;

		if (macosPlatforms.indexOf(platform) !== -1) {
			os = 'mac';
		} else if (iosPlatforms.indexOf(platform) !== -1) {
			os = 'mac';
		} else if (windowsPlatforms.indexOf(platform) !== -1) {
			os = 'windows';
		} else {
			os = 'linux';
		}

		return os;
	}

	var DownloadTabs = {
		selectors: {
			tab: '.tabs-os-button',
			content: '.tab-download-content',
		},
		activeClass: 'active-tab',
		init: function(os) {
			var _ = this;

			_.select(os);
			_.attachEvents();
		},
		attachEvents: function() {
			var _ = this;

			/*$(_.selectors.tab).click(function(ev) {
				ev.preventDefault();
				var os = $(this).attr('data-os');

				_.select(os);
			});*/
		},
		select(os) {
			var _ = this;

			$(_.selectors.tab).removeClass(_.activeClass);
			$(_.selectors.content).removeClass(_.activeClass);
			$("[data-os='" + os + "']").addClass(_.activeClass);

		}
	}

    DownloadTabs.init(getOS());
});
