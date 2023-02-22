const paletteCards = {
    template:
    /*html*/
    `<button type="button" @click="generateRandomPalette" class="button">Generate Palette</button>
    <div id="copy-info">
        <h3>Click the hex value of the color to copy it.</h3>
        <p></p>
    </div>
    <div id="palette-cards">
        <div class="card" v-for="n in 5">
            <div class="card-color"></div>
            <p class="color-hex" @click="copyColorToClipboard"></p>
        </div>
    </div>
    `,
    methods: {
        generateRandomColors() {
            const hexValues = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'A', 'B', 'C', 'D', 'E', 'F'];
            let color = '#';

            for (let i = 0; i <= 5; i++) {
                const random = Math.floor(Math.random() * hexValues.length);
                color += hexValues[random];
            }

            return color;
        },
        generateRandomPalette() {
            const cardColors = document.querySelectorAll('.card-color');
            const hexValues = document.querySelectorAll('.color-hex');

            cardColors.forEach(c => c.style.backgroundColor = this.generateRandomColors());
            hexValues.forEach(val => val.innerText = this.generateRandomColors());
        },
        copyColorToClipboard() {
            const hexValues = document.querySelectorAll('.color-hex');
            const copyInfoParagraph = document.querySelector('#copy-info>p');

            hexValues.forEach(val => {
                val.addEventListener('click', () => {
                    // Copy color value to the clipboard
                    navigator.clipboard.writeText(val.innerText);
                    copyInfoParagraph.innerText = `Color ${val.innerText} copied to the clipboard!`;
                });
            });
        }
    },
    mounted() {
        this.generateRandomPalette();
    }
};