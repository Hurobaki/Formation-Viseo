describe('Azar game', () => {
    beforeEach(() => {
        this.player1 = {
            name: "Willfried",
            luckyNumber: null
        }

        this.player2 = {
            name: "Wawrinka",
            luckyNumber: null
        }
        this.azar = 3
        this.lucky1 = 14
    });
    describe('function isAzar()', () => {
        it('should return true', () => {
            arrayAzar.forEach(score => {
                expect(isAzar(score)).toBeTruthy()
            })
        });
    });
    describe('function checkFirstRoundAction()', () => {
        it('should return false if game ends', () => {
            expect(checkFirstRoundAction(this.azar, this.player1, this.player2)).toBeFalsy()
        });
        it('should return true if games continues', () => {
            expect(checkFirstRoundAction(this.lucky1, this.player1, this.player2)).toBeTruthy()
        });
        it('should set opponent lucky number if the dice throw is not an Azar', () => {
            checkFirstRoundAction(this.lucky1, this.player1, this.player2)
            expect(this.player2.luckyNumber).toEqual(this.lucky1)
        })
    });
    it('should contain result between 3 and 18', () => {
        let result = throwDice()
        expect(result >= 3 && result <= 18).toBeTruthy()
    });
});