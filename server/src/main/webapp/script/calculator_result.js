Ext.setup({
    icon: 'icon.png',
    glossOnIcon: false,
    onReady: function() {
    	  var tabPanel = new Ext.TabPanel({
            fullscreen: true,
            type: 'light',
            sortable: true,
            items: [{
                title: 'Tabell',
                html: '1',
                cls: 'card1'
            }, {
                title: 'Graf',
                html: '2',
                cls: 'card2'
            }]
        });
        Ext.Ajax.request({
            url: '/../calculator_result_table.html',
            success: function(response, opts) {
            tabPanel.items.get(0).update(response.responseText, true);  //2nd parameter is "loadScripts"
          }
          });
        Ext.Ajax.request({
        	url: '/../calculator_result_graf.html',
        	success: function(response, opts) {
        		tabPanel.items.get(1).update(response.responseText, true);  //2nd parameter is "loadScripts"
        	}
        });
    }
});
