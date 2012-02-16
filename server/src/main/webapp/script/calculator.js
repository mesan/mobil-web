/**
 * Created by IntelliJ IDEA.
 * User: Marta
 * Date: 10.02.12
 * Time: 14:05
 * To change this template use File | Settings | File Templates.
 */

Ext.require('Ext.slider.*');

Ext.onReady(function(){

    Ext.create('Ext.slider.Single', {
        renderTo: 'basic-slider-lanebelop',
        width: 214,
        minValue: 0,
        hideLabel: true,
        useTips: false,
        maxValue: 100
    });

    Ext.create('Ext.slider.Single', {
        renderTo: 'basic-slider-nedbetalingstid',
        hideLabel: true,
        useTips: false,
        width: 214,
        value:50,
        increment: 10,
        minValue: 0,
        maxValue: 100
    });

    Ext.create('Ext.form.Panel', {
        width: 200,
        height: 100,
        bodyPadding: 10,
        renderTo: 'radio-buttons',
        items:[{
            xtype: 'radiogroup',
            // Arrange radio buttons into two columns, distributed vertically
            columns: 1,
            vertical: true,
            items: [
                { boxLabel: 'Flytende rente', name: 'rb', inputValue: '1' },
                { boxLabel: 'Fast rente 3 år', name: 'rb', inputValue: '2', checked: true},
                { boxLabel: 'Fast rente 5 år', name: 'rb', inputValue: '3' }
            ]
        }]
    });

});