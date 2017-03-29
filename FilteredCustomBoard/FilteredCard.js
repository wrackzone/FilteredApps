// config - Events : Send, Receive, None (Default)
// If sender use custom card which publishes the model of the card that is clicked.
// If receiver filters board to the children of the received model. 
// Mapping of types for receiver board
// Task -> WorkProduct
// Story -> Feature
// PortfolioItem -> Parent
// TestCase -> WorkProduct

Ext.define('FilteredCard', {
        extend: 'Rally.ui.cardboard.Card',
        alias: 'widget.filteredcard',
        afterRender: function() {
            this.callParent(arguments);
            this.getEl().on("click",this._onCardClick, this);
        },

        _onCardClick: function() {
            this.fireEvent('cardclick', this, this.getRecord());
        }
} );
