/**
 * Created by Pedro on 18/06/2015.
 */
Router.configure({
    layoutTemplate: 'layout'
});

Router.map(function (){
    this.route('index', {path: '/'});
    this.route('estabelecimento');
    this.route('ranking', {path: '/ranking'});
    this.route('promocao', {path: '/promocao'});
});
