/**
 * Created by Pedro on 17/06/2015.
 */
Promocao = new Mongo.Collection('promocoes');


if (Meteor.isClient) {
    Template.promocao.events({
        'click #submit': function () {
            Promocao.insert({
                colocacao: colocaao.value,
                promocao: promocao.value,
                estabelecimento: estabelecimento.value,
                pontos: pontos.value
            })
            alert("Dados cadastrados no banco, confira-la, my brother :D");
        }
    });

    Template.ranking.helpers({
        promocoes: function (){
            return Promocao.find();
        }

    });

}