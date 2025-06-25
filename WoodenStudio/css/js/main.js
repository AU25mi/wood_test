// gsapからメディアクエリの関数を実行する
const mm = gsap.matchMedia()


// 端末の画面幅...1025px以上
mm.add("(min-width: 1025px", () => {
    gsap.fromTo(
        ".concept-first .column-left",
        1,
        {
            x: -100,
            opacity: 0
        },
        {
            x: 0,
            opacity: 1,
            scrollTrigger: {
                trigger: ".concept-first .column-left",
                start: "top center",
            }
        }
    )

    gsap.fromTo(
        ".concept-first .column-right",
        1,
        {
            x: 100,
            opacity: 0
        },
        {
            x: 0,
            opacity: 1,
            delay: 0.5,
            scrollTrigger: {
                trigger: ".concept-first .column-right",
                start: "top center",
            }
        }
    )
})


// 端末の画面幅...599px以下
mm.add("(max-width: 599px", () => {
    gsap.fromTo(
        ".concept-first .column-left",
        1,
        {
            y: -100,
            opacity: 0
        },
        {
            y: 0,
            opacity: 1,
            scrollTrigger: {
                trigger: ".concept-first .column-left",
                start: "top center",
                
            }
        }
    )

    gsap.fromTo(
        ".concept-first .column-right",
        1,
        {
            y: 100,
            opacity: 0
        },
        {
            y: 0,
            opacity: 1,
            scrollTrigger: {
                trigger: ".concept-first .column-right",
                start: "top center",
            }
        }
    )
})