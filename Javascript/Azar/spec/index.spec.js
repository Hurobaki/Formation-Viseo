describe('Azar game', () => {
    beforeEach(() => {
        this.player1 = {
            name: "Willfried",
            luckyNumber: 0
        }

        this.player2 = {
            name: "Wawrinka",
            luckyNumber: 0
        }
        this.azar = 3
        this.lucky = 14
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
            expect(checkFirstRoundAction(this.lucky, this.player1, this.player2)).toBeTruthy()
        });
        it('should set opponent lucky number if the dice throw is not an Azar', () => {
            checkFirstRoundAction(this.lucky, this.player1, this.player2)
            expect(this.player2.luckyNumber).toEqual(this.lucky)
        })
    });

    describe('function secondRound()', () => {
      it('should return false due to ReAzar', () => {
            expect(secondRound(this.azar, this.player1, this.player2)).toBeFalsy()
      })

      it('should player1 luckyNumber equal to dice result if he doesn\'t ReAzar', () => {
          secondRound(this.lucky, this.player1, this.player2)
          expect(this.player1.luckyNumber === this.lucky).toBeTruthy()
      })

      it('should return false if player1 throw same score', () => {
          this.player2.luckyNumber = this.lucky
          expect(secondRound(this.lucky, this.player1, this.player2)).toBeFalsy()
      })
    })

    it('should contain result between 3 and 18', () => {
        let result = throwDice()
        expect(result >= 3 && result <= 18).toBeTruthy()
    });
});