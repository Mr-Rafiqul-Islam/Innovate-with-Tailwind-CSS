tailwind.config = {
    theme: {
        container: {
            center: true,
        },
        extend: {
            colors: {
                hoverColor: '#1BBF00',
                pColor: '#726E9E',
                headerColor: 'rgba(22, 12, 109, 0.6)',
                bannerOverlay: 'rgba(107, 98, 197, 0.9)',
                circleBtn: 'rgba(27, 191, 0, 0.2)',
                serviceBg : '#F6F5FF',
                cardHover: '#6B62C5',
                headingColor: '#141135',
                footerColor: '#48409C',
            },
            fontFamily: {
                openSans: ["Open Sans, sans-serif"],
                Paprika: ["Paprika, cursive"],
                quickSand: ["Quicksand, sans-serif"],
                Nunito: ["Nunito Sans', sans-serif"],
            },
            width: {
                mainContainer:'1170px',
                bannerContainer: '962px',
                newsContainer: '982px',
            },
            backgroundImage: {
                bannerBg : "url('images/Bg_one.png')",
                galleryBg : "url('images/Bg_two.png')",
                contactBg : "url('images/Bg_three.png')",
                impactBg : "url('images/Bg-four.png')",
                Feed : "url('images/Bg_five.png')",
            },
        }
    }
}
