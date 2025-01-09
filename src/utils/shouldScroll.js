const shouldScroll = (isScrollable) => {
    document.body.style.overflow = isScrollable ? 'auto' : 'hidden';
};

export default shouldScroll;