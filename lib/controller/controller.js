/**
 * Created by Pedro on 18/06/2015.
 */

if (Meteor.isClient){
    Session.setDefault('score', 0);
    Template.promocao.events({
        'click #submit': function (event, template) {
            var colocacao = template.find('#colocacao').value;
            var promocao = template.find('#promocao').value;
            var estabelecimento = template.find('#estabelecimento').value;
            Promocao.insert({
                colocacao: colocacao,
                promocao: promocao,
                estabelecimento: estabelecimento,
                score: Session.set('score', Session.get('score'))
            });
        }
    });

    /******************************** EVENTS ********************************/
    Template.index.events({
        'click .inc': function (){
            Session.set('score', Session.get('score')+1);
        /**Promocao.update(Session.get("selectedPromo"), {$inc: {score:5}}); **/
        }
    });

    /******************************** HELPERS ********************************/

    /** INDEX **/
    Template.index.helpers({
        promocoes: function () {
            return Promocao.find({}, {sort: {score: -1,name: 1 }});
        },
        /**selectedPromo: function () {
            var promo = Promocao.findOne(Session.get("selectedPromo"));
            return promo && promo.name;
        } **/
        score: function(){
           return Session.get('score');
       }
    });

    /** RANKING **/
    Template.ranking.helpers({
        promocoes: function (){
            return Promocao.find();
        },
        score: function() {
            return Session.get('score')
        }
    });

    /** ESTABELECIMENTO **/
    Template.estabelecimento.helpers({
        promocoes: function () {
            return Promocao.find();
        }
    })
}
