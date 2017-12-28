$(document).ready(() => {
	$('form').on('submit', () => {
		location.href = '/';

		const item = $('form input');
		const list = {item: item.val()};

      // Make an ajax request to update data
		$.ajax({
			type: 'POST',
			url: '/',
			data: list,
			success(data) {
          // Reload the page on successfull addition
				location.reload();
			}
		});

		return false;
	});

	$('li').on('click', function () {
		const item = $(this).text().replace(/ /g, '-');
		$.ajax({
			type: 'DELETE',
			url: '/' + item,
			success(data) {
          // Reload the page on successful removal
				location.reload();
			}
		});
	});
});
