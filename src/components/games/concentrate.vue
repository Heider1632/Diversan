<template>
  <div id="root">
      <div class="container level">
          <div v-show="userScore==8" class="centered success-message">Success!!!</div>
          <div class="level-item">
              <div class="columns is-gapless is-multiline">
                  <div class="column is-2">
                      <h1>User Score: <span v-text="userScore" ></span></h1>
                      <div class="button is-warning" @click="restartGame">Restart Game</div>
                  </div>
                  <div class="column is-8">
                      <div class="columns is-gapless is-multiline">
                          <div v-for="(value, card) in showCards" class="column is-3 playing-card" @click="flipCard" :id="card">
                              <img class="card-img" :src="require('../../assets/icons/' + value + '.svg')"></img>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <div class="button is-primary below-game" v-show="twoCards"  @click="coverCards">Cover cards</div>
  </div>
</template>
<script>
import bulma from 'bulma'
// Load the full build.
var _ = require('lodash');

var cardsBack = '2753';

export default{
  data: function(){
    return{
        cards: [
          'agua', 'naranja', 'hamburguesa', 'manzana',
          'avena', 'cereal', 'filete', 'fresas',
          'jamon', 'leche', 'pan', 'papas-fritas',
          'pastelito', 'pizza', 'pollo', 'queso',
          'tocino', 'verduras', 'sandia', 'emparedado',
        ],
        cardsDeck: [],
        showCards: {
          card0: cardsBack,
          card1: cardsBack,
          card2: cardsBack,
          card3: cardsBack,
          card4: cardsBack,
          card5: cardsBack,
          card6: cardsBack,
          card7: cardsBack,
          card8: cardsBack,
          card9: cardsBack,
          card10: cardsBack,
          card11: cardsBack,
          card12: cardsBack,
          card13: cardsBack,
          card14: cardsBack,
          card15: cardsBack,
        },
        flippedCardsCounter: 0,
        flippedCards: [],
        flippedCardsSymbols: [],
        twoCards: false,
        matchedCards: [],
        userScore: 0,
      }
    },
    created(){
      this.shuffleCards();
    },
    methods:{
      shuffleCards: function() {
          var cardsInUse = _.shuffle(this.cards).slice(0, 8);
          cardsInUse = [].concat(cardsInUse, cardsInUse);
          this.cardsDeck = _.shuffle(cardsInUse);
      },
      setupCards: function() {
        var that = this;
        that.flippedCards.forEach(function(c){
          if (!that.matchedCards.includes(c)){
            that.showCards[c] = cardsBack;
          }
        })
        this.flippedCards = [];
        this.flippedCardsSymbols = [];
        this.flippedCardsCounter = 0;
        this.twoCards = false;
      },
      exposeCard: function(flippedCard) {
        var cardNumber = parseInt(flippedCard.split('card')[1]);
        this.showCards[flippedCard] = this.cardsDeck[cardNumber];
      },
      restartGame: function() {
        var that = this;
        Object.keys(that.showCards).forEach(function(c){
          that.showCards[c] = cardsBack;
        });
        this.shuffleCards();
        this.flippedCards = [];
        this.flippedCardsSymbols = [];
        this.flippedCardsCounter = 0;
        this.twoCards = false;
        this.matchedCards = [];
        this.userScore = 0;
      },
      coverCard: function(flippedCard) {
        this.showCards[flippedCard] = cardsBack;
      },
      coverCards: function() {
        this.setupCards();
      },
      flipCard: function(event) {
        var flippedCard = event.currentTarget.id;
        if (!this.twoCards & !this.matchedCards.includes(flippedCard)) {
            if (this.flippedCards[0] != flippedCard) {
              this.exposeCard(flippedCard);
              this.flippedCardsCounter += 1;
              this.flippedCards.push(flippedCard);
              var cardValue = this.cardsDeck[parseInt(flippedCard.split(
                'card')[1])];
              this.flippedCardsSymbols.push(cardValue);
              if (this.flippedCardsCounter >= 2) {
                this.twoCards = true;
                if (this.flippedCardsSymbols[0] == this.flippedCardsSymbols[1]) {
                  this.matchedCards = this.matchedCards.concat(this.flippedCards);
                  this.userScore += 1;
                  this.setupCards();
                }
              }
            }
          else {
            this.coverCard(flippedCard);
            this.flippedCards = [];
            this.flippedCardsSymbols = [];
            this.flippedCardsCounter = 0;
          }
          }
        }

    }
}
</script>
<style>
#root{
  margin-top: 50px;
}

img.card-img {
    width: 50px;
    height: 50px;
}

 .playing-card {
   font-size: 80px;
   cursor: pointer; cursor: hand;
 }

 .centered {
     position: fixed;
     top: 50%;
     left: 50%;
     /* bring your own prefixes */
     transform: translate(-50%, -50%);
 }

.success-message {
    font-size: 100pt;
}

.below-game {
    position: fixed !important;
    left: 50%;
    z-index: 10;
}

img.logo {
    width: 25px;
}
</style>
