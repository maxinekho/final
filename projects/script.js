let winHeight = $(window).height(),
    docHeight = $(document).height();
max = docHeight - winHeight;

$(progress).attr('max', max);