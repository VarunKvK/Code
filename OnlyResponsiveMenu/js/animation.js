let t1 = gsap.timeline();

t1.from('.site', 3, { y: -100, ease: 'elastic.out(1, .9)' })
    .from('.menuicon', 3, { y: -100, ease: 'elastic.out(1, .9)' }, '-=2.7')