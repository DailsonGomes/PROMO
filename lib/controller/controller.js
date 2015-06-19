/**
 * Created by Pedro on 18/06/2015.
 */

if (Meteor.isClient) {
    Template.promocao.events({
        'click #submit': function () {
            Promocao.insert({
                colocacao: colocacao.value,
                promocao: promocao.value,
                estabelecimento: estabelecimento.value,
                pontos: pontos.value
            });
        }
    });

    Template.ranking.helpers({
        promocoes: function (){
            return Promocao.find();
        }
    });

    Template.index.helpers({
       promocoes: function () {
           return Promocao.find();
       }
    });
}