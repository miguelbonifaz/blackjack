import _ from "underscore";

/**
 * @param {string[]} tiposDeCarta Ejemplo: ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
 * @param {string[]} tiposEspeciales Ejemplo: ["Joker", "Joker"]
 * @returns {string[]} retorna un nuevo deck de cartas
 */
export const crearDeck = (tiposDeCarta, tiposEspeciales) => {
    let deck = []
    for (let i = 2; i <= 10; i++) {
        for (let tipo of tiposDeCarta) {
            deck.push(i + tipo);
        }
    }

    for (let tipo of tiposDeCarta) {
        for (let esp of tiposEspeciales) {
            deck.push(esp + tipo);
        }
    }

    deck = _.shuffle(deck);
    return deck;
}
