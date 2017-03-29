# FilteredCustomBoard
A version of the custom board that can send and receive selection events


![screenshot](https://raw.githubusercontent.com/wrackzone/FilteredCustomBoard/master/parent-filter-custom-board.gif)

### Configuration

* Install one or more instances of the app on a single dashboard page. 

* Edit the App Settings for each App

* Set the 'Events' parameter to Send on one app

* Set the 'Events' parameter to Receive on one or more other apps

The Receiver board will be filtered when a card is selected on the Sender board

**Type Mapping**

Sender Board Type | Receiver Board Type | Filtered By Field
----------------- | ------------------- | -----------------
Story / Defect | Task | WorkProduct
Feature | Story | Feature
Parent Portfolio Item | Portfolio Item | Parent
Story / Defect | TestCase | WorkProduct

### Sender

![screenshot](https://github.com/wrackzone/FilteredApps/blob/master/FilteredCustomBoard/settings-send.png?raw=true)


### Receiver

![screenshot](https://github.com/wrackzone/FilteredApps/blob/master/FilteredCustomBoard/settings-receive.png?raw=true)


