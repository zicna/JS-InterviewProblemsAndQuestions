# Events properties and phases

Events have different phases.


DOM generates events but not at the target element rather at the root of the document (top of the DOM tree)
## Phases of the event 
1. Capturing phase
event travels from the document root to the target element
event passes through every parent element of the target element
when event reaches the target phase capturing phase is over and target begins


2. Target phase
event here can be handled at the target (with event listeners)
after handlening event travel back to the root


3. Bubbling phase
event bubble UP from target to the root element
event passes through all parent (ONLY parent, NOT sibiling) elements on his way UP

Event can be handled only in target and bubbling phase


Some events are created right on the target element but most have all three phases. 


Event propagate - events capturing and bubbling, event propagate from one place to another

## Event in addEventListener(event, callback(event))
in callback:
- `this` => points to the HTML element where event handler was attached
- `event` => object created in root element of DOM tree
- `event.target` => HTML element where event originates, where event first happend
- `event.currentTarget` => HTML element where event object is currently attached

We catch event in parent elements in event bubbling phase

**Cathing events in Capturing phase of event element**
`element.addEventListener(event, callback, true)`

if a third argument is found in `addEventListener` function it will result in dealing with the event in its capturing phase (while event is trickeling down to the target element)
