/*
 * GitHub widget
 * http://developer.github.com/v3/repos/
 */
;(function($, window, document) {
    $.fn.showGitHubRepo = function(username, options) {
	options = $.extend({}, $.fn.showGitHubRepo.options, options);

	var getRepos = function(user, opts, callback) {
	    return $.ajax({
		url: 'https://api.github.com' + '/users/' + user + '/repos',
		type: 'GET',
		data: opts,
		dataType: 'jsonp',
		success: function(results) {
		    callback(results.data);
		}
	    });
	};

        var checkGhPages = function(element, user, opts, repo) {
	    return $.ajax({
		url: 'https://api.github.com' + '/repos/' + user + '/' + repo + '/branches/gh-pages',
		type: 'GET',
		data: opts,
		dataType: 'jsonp',
		success: function(results) {
                    console.log(repo);
                    console.log(results.data.name);
                    if (results.data.name !== undefined) {
                        element.empty().append('<a href="{{ site.url }}/' + repo + '" target="_blank"><i class="fa fa-file-text-o"></i></a>');
                    }
		}
	    });
        };

	var putRepos = function(elm, args) {
	    elm.empty().hide();
	    var n = args.length-1;
            $.each(
                $.grep(args, function(repo, i) { return (repo.name !== "{{ site.github.username }}.github.io"); }),
                function(i, repo) {
	            elm.append('<li><p><a href="' + repo.html_url + '" target="_blank">' + repo.name + '</a>&nbsp;<span id="gh-' + repo.name + '"></span><br/>' +
                               '<small>' + repo.description + '</small><br/>' +
                               '<i class="glyphicon glyphicon-star"></i>' + repo.watchers + ' / forks : ' + repo.forks + '</p></li>');
	            if (i < n) {
	                elm.append('<li class="divider"></li>');
	            }
                    checkGhPages($('#gh-' + repo.name), username, options, repo.name);
	        });
	    elm.fadeIn();
	};

	return this.each(function() {
	    var elem = $(this);

	    getRepos(username, options,
		     function(args) {
                         if (args.message) {
                             elem.empty().append('<p><small>' + args.message + '</small></p>');
                         } else {
			     putRepos(elem, args.slice(0, {{ site.github.count }}));
                         }
		     },
		     function(args) {
			 elem.empty().append('<p>' + args.statusText + '</p>');
		     }
		    );
	});
    };

    $.fn.showGitHubRepo.options = {
	type: 'owner',
	sort: 'pushed',
	direction: 'desc'
    };

})(jQuery, window, document);

$(function () {
    $('#github-repo').showGitHubRepo('{{ site.github.username }}', {
	count: {{ site.github.count }}
    });
});
